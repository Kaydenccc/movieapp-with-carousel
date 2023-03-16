'use client';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Navigation from '@/components/Navigation';
import ButtonPlus from '@/components/ButtonPlus';
import Card from '@/components/Card';
import CardLanscap from '@/components/CardLanscap';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation as Nvv, Pagination, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import { useState } from 'react';
import Navigation2 from '@/components/Navigation2';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [currentIndex, setIndex] = useState<number>(0);
  const [currentIndex2, setIndex2] = useState<number>(0);

  const getIndex = (index: number) => {
    setIndex(index);
  };
  const getIndex2 = (index: number) => {
    setIndex2(index);
  };

  console.log(currentIndex);
  return (
    <main className="max-w-3xl  space-y-6 my-8 mx-auto">
      <Navbar />
      <header className="relative">
        <Image
          alt="thumbnil"
          src={'https://occ-0-6715-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdVozig2u8iR0NKqtv2lR888eLN6X8Exwx0wUT1zMMYAuRqc5x3oBq63k5SfbNvwnDRKBUhx-e21qjVNRlCu7lmAZpKIr15QARY.jpg?r=d58'}
          width={768}
          height={200}
        />
        <div className="absolute top-0 left-0 w-full h-full text-white">
          <div className="flex flex-col space-y-2 justify-end w-full h-full p-12">
            <p>SEASON 10</p>
            <h1 className="text-5xl font-bold">SUPRANATURAL</h1>
            <p>AHAHA, HAHAHA, HAHAA</p>
            <div className="flex items-center gap-2">
              <Button text={'Watch Now'} />
              <ButtonPlus />
            </div>
          </div>
        </div>
      </header>
      <section className=" flex overflow-x-auto">
        <Swiper modules={[A11y, Nvv, Pagination]} className="mySwiper" spaceBetween={20} slidesPerView={3.5} onSlideChange={(swiper) => getIndex(swiper.activeIndex)} onSwiper={(swiper) => getIndex(swiper.activeIndex)}>
          <Navigation index={currentIndex} text="Now Playing" />
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className=" flex overflow-x-auto">
        <Swiper className="mySwiper" spaceBetween={10} slidesPerView={3} onSlideChange={(swiper) => getIndex2(swiper.activeIndex)} onSwiper={(swiper) => getIndex2(swiper.activeIndex)}>
          <Navigation2 index2={currentIndex2} text="Top Rated Movies" />
          <SwiperSlide>
            <CardLanscap />
          </SwiperSlide>
          <SwiperSlide>
            <CardLanscap />
          </SwiperSlide>
          <SwiperSlide>
            <CardLanscap />
          </SwiperSlide>
          <SwiperSlide>
            <CardLanscap />
          </SwiperSlide>
          <SwiperSlide>
            <CardLanscap />
          </SwiperSlide>
          <SwiperSlide>
            <CardLanscap />
          </SwiperSlide>
          <SwiperSlide>
            <CardLanscap />
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
