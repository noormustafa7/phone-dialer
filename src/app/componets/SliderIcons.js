import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import {Navigation} from 'swiper/modules';
import {BiArrowBack} from "react-icons/bi";
import CallDeclined from "@/app/componets/CallDeclined";
import Call from "@/app/componets/Call";
import PhoneBook from "@/app/componets/PhoneBook";
import Favourite from "@/app/componets/Favourite";
import Recents from "@/app/componets/Recents";
import SecretContact from "@/app/componets/SecretContact";

const SliderIcons = ({clearFunction}) => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="flex item-center justify-evenly">
                        <div>
                            <div
                                className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                                <button
                                    className="rounded h-20 w-20 flex text-black items-center bg-white text-salate justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                    onClick={clearFunction}
                                >
                                    <BiArrowBack size={32}/>
                                </button>
                            </div>
                        </div>
                        <div>
                            <Call/>
                        </div>
                        <div>
                            <CallDeclined/>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex item-center justify-evenly">
                        <PhoneBook/>
                        <Favourite/>
                        <Recents/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex item-center justify-evenly">
                        <SecretContact/>
                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    )
}
export default SliderIcons;