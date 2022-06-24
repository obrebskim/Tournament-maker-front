import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import RedirectBtn from '../../../components/Common/RedirectBtn';

export default function Slider() {
    return (
        <Container>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='https://kronika24.pl/wp-content/uploads/2020/03/WT-Monta-251.jpg' alt="volley" />
                    <div className='swiper-caption'>
                        <h2 className='title'>
                            Warmia Cup
                        </h2>
                        <p className='location'>
                            Location: <span>Olsztyn </span>
                        </p>
                        <p className='date'>
                            Date: <span>2022-07-12 </span>
                        </p>
                        <p className='pool'>
                            Pool: <span className='important'>1000 $ </span>
                        </p>
                        <p className='type'>
                            Type: <span>Grand Slam </span>
                        </p>
                        <p className='amount'>
                            Amount: <span>24</span>
                        </p>
                        <div className='rate'>
                            Rate: <span> 5 </span>
                        </div>
                        <RedirectBtn text='check this out!' to='/tournaments' styles={{ gridColumn: ' -1 / -2' }} />
                    </div>
                </SwiperSlide>

            </Swiper>
        </Container>
    )
}

const Container = styled.section`
    grid-column: 1/4;
    grid-row: 2/4;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        position: relative;
    }

    .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .swiper-caption {
        height: 40%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        padding: 40px ;
        background: linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(51,51,51,.8) 70%, rgba(255,216,0,0) 100%);
        font-size: 1.6rem;

        & span {
            font-weight: 600;
            padding-left: 10px;

            &.important {
                background: linear-gradient(135deg, rgba(255,40,0,1) 0%, rgba(255,216,0,1) 100%);
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }

    .title {
        font-size:3rem;
        font-weight: bold;
        grid-column: 1 / -1;
    }

`