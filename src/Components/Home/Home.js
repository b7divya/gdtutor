import React from 'react'
// import Header from "../Header/Header";

import Section1 from "../Section1/Section1";
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';


function Home () {
    return (
        <div>
            {/* <Header /> */}
            <Slider />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </div>
    )
}

export default Home