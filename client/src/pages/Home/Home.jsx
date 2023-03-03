import React from 'react';
import Slider from "../../components/Slider/Slider";
import "../../components/FeaturedProducts/FeaturedProducts"
import "./Home.scss";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contacts from '../../components/Contacts/Contacts';

const home = () => {

  const featuredContent = "Dress and show up for the moment, stay beautiful with our unique collections, you have come to the right place to live beautifully"
  
  const trendingContent = "Always be seen as the Trend setter, we've got you covered right here at Petsu Store, we deliver designs that set trends, don't order late!";

  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" content={featuredContent} />
      <Categories />
      <FeaturedProducts type="trending" content={trendingContent} />
      <Contacts />
    </div>
  )
}

export default home