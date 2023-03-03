import React, { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/2983364/pexels-photo-2983364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/12729102/pexels-photo-12729102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
        // why not pass currentSlide as prev
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
    };

  return ( 
    <div className="slider">
        <div 
            className="container"
            style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider

