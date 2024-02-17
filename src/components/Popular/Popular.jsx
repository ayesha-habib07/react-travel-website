import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { GoHorizontalRule } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import "swiper/css";
import { FaGripLines } from "react-icons/fa";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import "./Popular.css";
const Popular = () => {
    return (
        <section className="section PopularSection">
            <div>
                <Swiper {...sliderSettings} className="sliderSection">
                    <div className="sliderBtn">
                        <div>
                            <h2>Popular Destinations</h2>
                            <p>From historical cities to natural specteculars , come see the best of the world!</p>
                        </div>
                        <div>
                            <SliderButtons />
                        </div>
                    </div>
                    {data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-card">
                                <img src={card.image}></img>
                                <div className="p-price">
                                    <span style={{fontSize:'30px'}}>{card.price}</span>
                                    <span className="line" > <FaGripLines /> </span>

                                </div>
                              <div className="cardName">
                              <div>{card.name}</div>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                     <GoDotFill style={{color:"rgb(139, 92, 214)"}} />
                                    <div>Dot</div>
                                   
                                </div>
                              </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default Popular;
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button  onClick={() => { swiper.slidePrev() }}>&lt;</button>
            <button  onClick={() => { swiper.slideNext() }}>&gt;</button>
        </div>
    );
}