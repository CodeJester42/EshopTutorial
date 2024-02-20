import React from 'react'
import Slider from "react-slick";
import Image1 from '../../images/category/headphone.png';
import Image2 from '../../images/category/vr.png';
import Image3 from '../../images/category/macbook.png';

const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Headphone",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Virtual",
    },
    {
      id: 3,
      img: Image3,
      subtitle: "Beats Solo",
      title: "Branded",
      title2: "Laptops",
    },
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
        <Slider { ... settings}>
          {
            HeroData.map((data) => (
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content selection */}
                <div>
                  <h1>{data.subtitle}</h1>
                  <h1>{data.title}</h1>
                  <h1>{data.title2}</h1>
                  <div>
                    <button>Shop Now</button>
                  </div>
                </div>
                {/* IMG section */}
                <div>
                  <div>
                    <img src='{data.img}' alt=''
                    className='w-[300px] h-[300px] sm:h-[450px]
                    sm:scale-105 lg:scale-110' 
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default Hero
