import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SearchQ from '../SearchQ/SearchQ';

const Search = () => {
    const search = useLoaderData();
    console.log(search);
    const { meals } = search;
    console.log(meals);

    // searchData = useLoaderData();
    // console.log(params);

    return (
        <div>
            
            <div>
                {
                    <div className='grid lg:grid-cols-4 gap-5 lg:px-28 mt-6 p-5 '>
                    {
                        meals.map(meal => <SearchQ
                            key={meal.idMeal}
                            meal={meal}
    
                        ></SearchQ>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default Search;