import { Navbar } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeMeal from '../HomeMeal/HomeMeal';

const HomePage = () => {
    const productData = useLoaderData();

    const {meals} = productData;
    //console.log(meals);
    return (
        <div>
            {/* <h1 className='text-center'>Data:{meals.length}</h1> */}
            <div className='grid lg:grid-cols-4 gap-5 lg:px-28 mt-16 p-5 '>
                {
                    meals.map(meal => <HomeMeal
                    key={meal.idMeal}
                    meal={meal}

                    ></HomeMeal>)
                }
            </div>
        </div>
    );
};

export default HomePage;