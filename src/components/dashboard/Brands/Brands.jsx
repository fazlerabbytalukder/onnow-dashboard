import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import brandone from '../../../assets/party-pizza.png';
import brandthree from '../../../assets/snackmate.png';
import brandtwo from '../../../assets/wrappo.png';

const Brands = () => {
    return (
        <div className='ml-2 md:ml-10 mt-[50px] relative'>
            <div className="absolute top-0 right-0 h-slider w-[200px] bg-gradient-to-l from-[#ff5b361c] to-transparent z-0"></div>
            <Swiper
                className='pb-3'
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <button className="brand-card brand-card-2 active">
                        <div className='w-[58px] h-[58px]'></div>
                        <span className='translate-x-[-25px]'>All Brands</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="brand-card">
                        <img src={brandone} alt="brand logo" />
                        <span>Party Pizza</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="brand-card">
                        <img src={brandtwo} alt="brand logo" />
                        <span>Wrappo</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="brand-card">
                        <img src={brandthree} alt="brand logo" />
                        <span>Snackmate</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="brand-card">
                        <img src={brandone} alt="brand logo" />
                        <span>Party Pizza</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="brand-card">
                        <img src={brandtwo} alt="brand logo" />
                        <span>Wrappo</span>
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <button className="brand-card">
                        <img src={brandthree} alt="brand logo" />
                        <span>Snackmate</span>
                    </button>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Brands;