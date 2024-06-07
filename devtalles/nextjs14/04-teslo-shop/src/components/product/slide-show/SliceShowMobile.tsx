"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./slideshow.css";
// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const SliceShowMobile = ({ images, title, className }: Props) => {
	return (
		<div className={className}>
			<Swiper
      style={{
        width: '100vw',
        height: '500px'
      }}
        pagination
        // navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[FreeMode, Navigation, Autoplay, Navigation]}
        className="mySwiper2"
			>
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={600}
              height={500}
              className='object-cover'
            />
          </SwiperSlide>
        ))}
			</Swiper>
		</div>
	);
};
