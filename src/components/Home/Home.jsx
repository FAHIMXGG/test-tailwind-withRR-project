import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import { Spinner } from 'flowbite-react';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {navigation.state === 
            
            'loading' 
            
            && 
            
            <div className="text-center">
    <Spinner aria-label="Center-aligned spinner example" />
  </div>
            
            }
            
            <Outlet></Outlet>

        </div>
    );
};

export default Home;