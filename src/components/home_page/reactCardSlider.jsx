import React from 'react';
import '../../css/home_page/slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
const ReactCardSlider =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <div className='container'>
            <h4 className='text-center'>Our Shops</h4>
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
            { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <img src={slide.image} alt="" />
                                <p className='text-center m-0'>{slide.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
        </div>
    )
}
export default ReactCardSlider;