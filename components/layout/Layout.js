import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Slider from '../slider/Slider';
import SliderData from '../slider/SliderData';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Slider />
            {children}
        </>
    );
}

export default Layout;