"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    document.querySelector(".custom-next")?.classList.add("swiper-button-next");
    document.querySelector(".custom-prev")?.classList.add("swiper-button-prev");
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-[url('/asset/banner-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1200px] pt-24 m-auto flex justify-center items-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-24 items-center">
              <Image src="/asset/slide1.webp" alt="Slide 1" width={300} height={300} />
              <div>
                <Image src="/asset/kalma.png" alt="Kalma" width={400} height={100} className="w-full h-auto" />
                <p className="text-yellow-500 font-bold text-3xl">O’ Allah We Believe</p>
                <h2 className="text-white font-bold text-5xl">Invited to The Home Of Peace</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-24 items-center">
              <Image src="/asset/slide2.webp" alt="Slide 2" width={300} height={300} />
              <div>
                <Image src="/asset/kalma.png" alt="Kalma" width={400} height={100} className="w-full h-auto" />
                <p className="text-yellow-500 font-bold text-3xl">O’ Allah We Believe</p>
                <h2 className="text-white font-bold text-5xl">Invited to The Home Of Peace</h2>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-24 items-center">
              <Image src="/asset/slide3.png" alt="Slide 3" width={300} height={300} />
              <div>
                <Image src="/asset/kalma.png" alt="Kalma" width={400} height={100} className="w-full h-auto" />
                <p className="text-yellow-500 font-bold text-3xl">O’ Allah We Believe</p>
                <h2 className="text-white font-bold text-5xl">Invited to The Home Of Peace</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Navigation Buttons (Bottom Center) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <button className="custom-prev bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-md shadow-md transition-all duration-300 hover:bg-yellow-600 hover:scale-110">
          ❮
        </button>
        <button className="custom-next bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-md shadow-md transition-all duration-300 hover:bg-yellow-600 hover:scale-110">
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
