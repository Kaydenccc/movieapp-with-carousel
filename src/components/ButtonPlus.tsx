import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const ButtonPlus = () => {
  return (
    <button className="p-[10px] h-[44px]  text-xl h-full bg-gray-500/70 backdrop-blur-sm">
      <AiOutlinePlus className="font-bold" />
    </button>
  );
};

export default ButtonPlus;
