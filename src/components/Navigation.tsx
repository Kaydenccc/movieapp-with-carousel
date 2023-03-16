import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface navProps {
  text: string;
}
const Navigation = ({ text }: navProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-semibold">{text}</h1>
      <div className="flex gap-4">
        <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white border border-gray-300">
          <AiOutlineLeft />
        </button>
        <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white border border-gray-300">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
