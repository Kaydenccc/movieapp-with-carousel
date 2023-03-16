import Image from 'next/image';
import React from 'react';
import Button from './Button';
import ButtonPlus from './ButtonPlus';

const Card = () => {
  return (
    <div className="relative mr-4 inline-block text-white min-w-[200px]">
      <Image className="h-[300px] object-cover" src={'http://demo.amytheme.com/movie/demo/elementor-movie-news/wp-content/uploads/sites/8/2022/05/img_17-214x368_c.jpg'} height={300} width={200} alt="poster movie" />
      <div className="absolute top-0 left-0 w-full p-4 h-full">
        <div className="flex w-full h-full flex-col justify-between items-end">
          <ButtonPlus />
          <Button text={'Watch Now'} auto />
        </div>
      </div>
    </div>
  );
};

export default Card;
