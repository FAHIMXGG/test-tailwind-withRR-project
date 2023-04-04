import { Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HomeMeal from '../HomeMeal/HomeMeal';
import Search from '../Search/Search';
import {useRef} from 'react';

const HomePage = () => {
    const productData = useLoaderData();

    const { meals } = productData;
    //console.log(meals);


    //
    // const [message, setMessage] = useState('');
    // const inputRef = useRef(null);
    
    // function handleClick() {
    //     const search = inputRef.current.value;
    //     setMessage(search)
        
    // }
    //console.log(message);

    return (
        <div>
            {/* <div className='mx-auto text-center mt-10'>
                <input
                    onChange={e=> setMessage(e.target.value)}
                    type="text"
                    id="message"
                    name="message"
                />

                <Link  to={`${message}`} className='text-xs font-bold'>Search</Link>
            </div> */}


            
            {/* <Search></Search> */}
            {/* <h1 className='text-center'>Data:{meals.length}</h1> */}
            <div className='grid lg:grid-cols-4 gap-5 lg:px-28 mt-6 p-5 '>
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