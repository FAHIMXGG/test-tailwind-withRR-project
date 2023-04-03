
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { QuestionMarkCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'

const MealInfo = () => {
    const mealInfo = useLoaderData();
    const { strMeal, strArea, strCategory, strIngredient6, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strInstructions, strMealThumb, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strSource, strYoutube, } = mealInfo.meals[0];

    //console.log(mealId);
    //console.log(strMeal);

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className="lg:mx-80 mt-10">
                <div className='mx-auto text-center mb-10'>
                    <button className=' bg-slate-300 p-2 rounded' onClick={handleGoBack}>GoBack</button>
                </div>
                <div>
                    <div className='mb-10'>
                        <img className='mx-auto text-center items-center content-center w-11/12 md:w-7/12 rounded-md' src={strMealThumb} alt="" />
                    </div>
                    <div className='text-center mb-10'>
                        <h2 className='font-bold'>Origin:{strArea}</h2>
                        <h2 className='font-bold'>Category:{strCategory}</h2>
                    </div>
                    <h2 className='text-center text-2xl font-semibold'>Ingredient</h2>
                    <div className='flex mx-auto justify-around p-5 mb-10' >

                        <div>
                            <p className='font-medium'>{strIngredient1}</p>
                            <p className='font-medium'>{strIngredient2}</p>
                            <p className='font-medium'>{strIngredient3}</p>
                        </div>
                        <div>
                            <p className='font-medium'>{strIngredient4}</p>
                            <p className='font-medium'>{strIngredient5}</p>
                            <p className='font-medium'>{strIngredient6}</p>
                        </div>
                    </div>
                    <h2 className='text-center text-2xl font-semibold'>Measure</h2>
                    <div className='flex mx-auto justify-around p-0' >

                        <div>
                            <p className='font-medium'>{strMeasure1}</p>
                            <p className='font-medium'>{strMeasure2}</p>
                            <p className='font-medium'>{strMeasure3}</p>
                        </div>
                        <div>
                            <p className='font-medium'>{strMeasure4}</p>
                            <p className='font-medium'>{strMeasure5}</p>
                            <p className='font-medium'>{strMeasure6}</p>
                        </div>
                    </div>
                    <div className='flex justify-center mb-10'>
                        <a className='md:mr-2' target="_blank" href={strSource}><QuestionMarkCircleIcon className="h-6 w-6 text-[#FFCB59]" /></a>

                        <a target="_blank" href={strYoutube}><PlayCircleIcon className="h-6 w-6 text-red-600" /></a>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-center mb-5 font-medium text-2xl'>Instructions</h2>
                        <p className='font-semibold p-5'>{strInstructions}
                        </p>
                    </div>
                    <div className='mx-auto text-center mb-24'>
                        <button className=' bg-slate-300 p-2 rounded' onClick={handleGoBack}>GoBack</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealInfo;