
import { Card } from 'flowbite-react';
import React from 'react';
import './HomeMeal.css'
import { QuestionMarkCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

const HomeMeal = ({ meal }) => {
    console.log(meal)
    const { strMealThumb, strMeal, strInstructions, strCategory, strSource, strTags, strYoutube } = meal;
    return (
        <div>
            <div className=''>
                <div className="">
                    <Card imgSrc={strMealThumb}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {strMeal}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text">
                            {strInstructions}
                        </p>
                        <p className='font-bold'>
                            Category: <span className='text-orange-700'>{strCategory}</span>
                        </p>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <a className='md:mr-2' target="_blank" href={strSource}><QuestionMarkCircleIcon className="h-6 w-6 text-[#FFCB59]" /></a>

                                <a target="_blank" href={strTags}><PlayCircleIcon className="h-6 w-6 text-red-600" /></a>
                            </div>
                            <div>
                                <button className='text-xs font-bold'>Read More</button>
                            </div>

                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default HomeMeal;