import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

interface navProps {
  text: string;
  index: number;
}
const Navigation = ({ text, index }: navProps) => {
  const swiper = useSwiper();
  return (
    <div className=" flex mb-6 justify-between items-center">
      <h1 className="text-xl font-semibold">{text}</h1>
      <div className="flex gap-4">
        <button disabled={index === 0} onClick={() => swiper.slidePrev()} className="w-[40px] disabled:opacity-25 h-[40px] flex justify-center items-center rounded-full bg-white border border-gray-300">
          <AiOutlineLeft />
        </button>
        <button disabled={index >= 10} onClick={() => swiper.slideNext()} className="w-[40px] disabled:opacity-25 h-[40px] flex justify-center items-center rounded-full bg-white border border-gray-300">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
