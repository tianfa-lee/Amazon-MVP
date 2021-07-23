import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";  

export default function Banner() {

    return (
        <div className="banner">
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} showIndicators={false} className="banner__img">   
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg" alt="Ëssentials for Gamers"/>
                </div>

                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Shop Computers & Accessories"/>
                </div>

                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="Shop Toy & Games"/>
                </div>

                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" alt="Refresh your space Shop the Home store"/>  
                </div>

                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="Discover the Beauty selection"/>
                </div>

                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" alt="We ship over 45 million products around the world"/>
                </div>  
            </Carousel>
        </div>
    )
}