 import React from 'react'
import Header from "../components/Layout/Header";
import Hero from '../components/Extras/Hero';
import Categories from '../components/Extras/Categories';
import BestDeals from '../components/Extras/BestDeals';
import Footer from '../components/Layout/Footer';
import Sponsored from '../components/Extras/Sponsored';

const HomePage = () => {
  return (
    <div>
     <Header activeHeading={1}/>
     <Hero/>
     <Categories/>
     <BestDeals/>
     <Sponsored/>
     <Footer/>
    </div>
  )
}

export default HomePage















