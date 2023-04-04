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
                <div>
                <div className='mx-auto text-center mt-0'>
                <input
                    onChange={e=> setMessage(e.target.value)}
                    type="text"
                    id="message"
                    name="message"
                />

                <Link  to={`${message}`} className='text-xs font-bold'>Search</Link>
            </div>
                </div>
            </div>
        </div>

    );
};

export default Header;