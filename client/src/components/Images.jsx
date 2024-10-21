import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import four from "../images/four.jpg";
import threeyy from "../images/threeyy.jpg";
import six from "../images/six.jpg";

const Images = () => {
    const sliderSettings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // Change slide every 3 seconds
        arrows: false, // Hide arrows for cleaner look
    };

    const slidesData = [
        {
            image:one,
            text: 'Have received letter of appreciation from Coding Ninjas for an Event',
        },
        {
            image: two,
            text: 'Was invited to Meet Mr. Ankush Singla The founder of Coding Ninjas',
        },
        {
            image:threeyy,
            text: 'Won First prize at ACM Students Chapetr for Coding Event',
        },
        {
            image:four,
            text: 'Attended a Great Hackthon at Chandigarh University and chance to meet Team of Dojima Network ',
        },{
            image:six,
            text: 'Attended a Utkrishti Event at Chitkara University A Great Event had learnt a lot ',
        },
        
    ];

    return (
        <div className="image-slider-container mt-[30vw]" style={{ maxWidth: '700px', margin: '0 auto', padding: '10px'  }}>
            <Slider {...sliderSettings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="slide-item">
                        <img src={slide.image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px',color:[] }}>{slide.text}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Images;
