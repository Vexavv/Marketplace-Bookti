import React from 'react';
import styles from './BlogCarousel.module.scss'
import Container from "../../Container/Container";
import HTag from "../../HTag/HTag";
import {useTranslation} from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {List} from "../../../types";

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 1441},
        items: 3,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: {max: 1440, min: 901},
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: {max: 900, min: 501},
        items: 2
    },
    mobile: {
        breakpoint: {max: 500, min: 0},
        items: 1,
        slidesToSlide: 2
    }
};


const BlogCarousel = () => {
    const {t} = useTranslation('home')

    const test: List[] = [
        {id: 1, icon: "/home/carouselTest/1.png", title: t('BlogCarousel.Carousel.first')},
        {id: 2, icon: "/home/carouselTest/2.png", title: t('BlogCarousel.Carousel.second')},
        {id: 3, icon: "/home/carouselTest/3.png", title: t('BlogCarousel.Carousel.third')},
        {id: 4, icon: "/home/carouselTest/1.png", title: t('BlogCarousel.Carousel.fourth')},
        {id: 5, icon: "/home/carouselTest/2.png", title: t('BlogCarousel.Carousel.first')},
        {id: 6, icon: "/home/carouselTest/3.png", title: t('BlogCarousel.Carousel.second')}
    ]


    return (
        <Container>
            <div className={styles.Wrapper}>
                <div className={styles.WrapperTitle}>
                    <HTag tag='h2'>{t('BlogCarousel.title')}</HTag>
                </div>
                <Carousel
                    responsive={responsive}
                    arrows={false}
                    renderDotsOutside={true}
                    rewind={true}
                    keyBoardControl={true}
                    draggable
                    // showDots={true}
                >
                    {test.map(item => (
                        <div key={item.id} className={styles.WrapperCard}>
                            <div className={styles.WrapperCardImage}>
                                <img src={item.icon} alt={item.title}/>
                            </div>

                            <p className={styles.WrapperCardText}>{item.title}</p>
                        </div>
                    ))}

                </Carousel>


            </div>
        </Container>

    );
};

export default BlogCarousel;