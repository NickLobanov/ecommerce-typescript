import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import sliderImgOne from '../../images/sliderImgOne.png'
import sliderImgTwo from '../../images/sliderImgTwo.png'
import sliderImgThree from '../../images/sliderImgThree.png'
import sliderImgFour from '../../images/sliderImgFour.png'
import MainLogo from '../../images/MainLogo.svg'

import 'swiper/css';
import 'swiper/scss/pagination';
import styles from './slider.module.scss'


SwiperCore.use([Pagination, Autoplay])

function Slider() {
    return (
        <div className={styles.sliderContainer}>
            <Swiper
            spaceBetween={0}
            slidesPerView={window.innerWidth < 768 ? 1 : 2}
            autoplay={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={styles.sliderWrapper}
            >
                <SwiperSlide>
                    <img src={sliderImgOne} alt="Img" className={styles.sliderImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImgTwo} alt="Img" className={styles.sliderImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImgThree} alt="Img" className={styles.sliderImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImgFour} alt="Img" className={styles.sliderImg}/>
                </SwiperSlide>
            </Swiper>

            <div className={styles.sliderDescription}>
                <h1 className={styles.title}>Colors Of Your Soul</h1>
                <span className={styles.description}>Бренд одежды из натуральных тканей с акцентом на цвет</span>
                <img src={MainLogo} alt="MainLogo" className={styles.image}/>
            </div>
        </div>
        
    )
}

export default Slider