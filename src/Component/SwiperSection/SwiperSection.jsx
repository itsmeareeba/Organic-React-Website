import React from 'react';
import { Link } from 'react-router-dom';
import "./SwiperSection.css";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import swiPic from "../../Images/swi-pic.svg";
import swiPic1 from "../../Images/swi-pic1.svg";
import swiPic2 from "../../Images/swi-pic2.svg";
import swiPic3 from "../../Images/swi-pic3.svg";


const SwiperSection = () => {
    const swidata=[
        {
        'imag' :<img class="img" src={swiPic} alt="img"/>
    
        },
        {
          'imag' :<img class="img" src={swiPic1} alt="img"/>
      
          },
          {
            'imag' :<img class="img" src={swiPic2} alt="img"/>
        
            },
            {
              'imag' :<img class="img" src={swiPic3} alt="img"/>
          
              },
              {
                'imag' :<img class="img" src={swiPic} alt="img"/>
            
                },
                {
                  'imag' :<img class="img" src={swiPic1} alt="img"/>
              
                  },
                  {
                    'imag' :<img class="img" src={swiPic2} alt="img"/>
                
                    },
                    {
                      'imag' :<img class="img" src={swiPic3} alt="img"/>
                  
                      },
      ] 
     const params = {
        // Swiper parameters and options
        spaceBetween: 24,
        loop: true,
        speed: 1000,
        slidesPerView: 3,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        },
      };
  return (
    <div  className="wrapper" >
     <Swiper 
      {...params}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        stopOnLast: false,
      }}
      modules={[Autoplay]}
      class="swiper-wrapper"
    >
      {swidata.map((item,i)=>
      <SwiperSlide key={i} className="swiper-slide">
      <Link href="#" class="img-otr">
        {item.imag}
      </Link>
    </SwiperSlide>
      )
      
      }
    </Swiper> 
    </div>
  )
}

export default SwiperSection ;
