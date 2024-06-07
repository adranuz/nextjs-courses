"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import {Swiper as SwiperCore} from 'swiper';
import "swiper/swiper-bundle.css";
import "./slideshow.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const SliceShow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  // console.log(images);
	return (
		<div className={className}>
			<Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // } as React.CSSProperties}
				spaceBetween={10}
        navigation={true}
        autoplay={{ delay: 5000 }}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
			>
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={1024}
              height={800}
              className=' object-cover rounded'
            />
          </SwiperSlide>
        ))}
			</Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={300}
              height={300}
              className='w-full object-cover rounded'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
		</div>
	);
};
