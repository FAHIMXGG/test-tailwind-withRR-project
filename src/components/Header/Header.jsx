import { Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [message, setMessage] = useState('');

    return (
        <div>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}

            <div className="w-full">
                <Navbar>
                    <React.Fragment key=".0">
                        <Navbar.Brand href="https://github.com/FAHIMXGG">
                            <img
                                alt="Flowbite Logo"
                                className="mr-3 h-6 sm:h-9"
                                src="https://cdn.discordapp.com/attachments/726013741564559461/726367272511340554/gg.png"
                            />
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                                DaimFood
                            </span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                        </Navbar.Collapse>
                    </React.Fragment>
                </Navbar>





                <div className='md:mx-96 md:px-52 px-4'>
                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-[#9D1512] dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>

                            <input onChange={e => setMessage(e.target.value)}
                                type="text"
                                id="message"
                                name="message" class="block w-full p-4 pl-10 text-sm text-[#9D1512] border border-[#EC903E] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-[#EC903E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />


                            <Link to={`${message}`} className=' text-white absolute right-2.5 bottom-2.5 bg-[#EC903E] hover:bg-[#9D1512] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</Link>
                        </div>
                    </form>
                </div>




                {/* <div>
                    <div className='mx-auto text-center mt-0'>
                        <input
                            onChange={e => setMessage(e.target.value)}
                            type="text"
                            id="message"
                            name="message"
                        />

                        <Link to={`${message}`} className='text-xs font-bold'>Search</Link>
                    </div>
                </div> */}
            </div>
        </div>

    );
};

export default Header;