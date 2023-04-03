import { Navbar } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeMeal from '../HomeMeal/HomeMeal';

const HomePage = () => {
    const productData = useLoaderData();

    const {meals} = productData;
    console.log(meals);
    return (
        <div>
            <h1 className='text-center'>Data:{meals.length}</h1>
            <div className='grid grid-cols-4 gap-5 lg:px-28'>
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