import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from 'antd';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import styles from '../../styles/Slider.module.css';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
    return (
        <div>
            <Swiper className={`${styles.container} ${styles.swiper}`} spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 4000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }}>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.content}>
                        <span className={styles.title}>SLIDE 1</span>
                        <p className={styles.description}>
                            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <Button type="danger" danger ghost>Xem ngay</Button>
                    </div>
                    <div className={styles.image}>
                        <img src="/images/product.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.content}>
                        <span className={styles.title}>SLIDE 2</span>
                        <p className={styles.description}>
                            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <Button type="danger" danger ghost>Xem ngay</Button>
                    </div>

                    <div className={styles.image}>
                        <img src="/images/product.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.content}>
                        <span className={styles.title}>SLIDE 3</span>
                        <p className={styles.description}>
                            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <Button type="danger" danger ghost>Xem ngay</Button>
                    </div>

                    <div className={styles.image}>
                        <img src="/images/product.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <div className={styles.content}>
                        <span className={styles.title}>SLIDE 4</span>
                        <p className={styles.description}>
                            lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip
                        </p>
                        <Button type="danger" danger ghost>Xem ngay</Button>
                    </div>

                    <div className={styles.image}>
                        <img src="/images/product.png" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;