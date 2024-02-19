import React from 'react'
import Slider from "react-slick";

const HeroSlide = [
  {
    
  }
]
const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div>
      <div className='w-full'>
        {/* Hero Section */}
        <Slider {...settings}></Slider>
        </div>
    </div>
  );
}

export default Hero
