import Image from 'next/image';
import React from 'react';

const CardLanscap = () => {
  return (
    <div className="relative inline-block text-white w-full">
      <Image
        className="h-[200px] object-cover"
        src={'https://occ-0-6715-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXvGSazinJVyxH_NYkL6p62bL573zSAwtMS39ceguPHXI8b9UJOm4MwqbaGnbfIwd9-hyU1QbSccfLc6DkLZSb-3JUrPd0GpU1E.jpg?r=847'}
        height={200}
        width={300}
        alt="poster movie"
      />
      <div className="absolute top-0 left-0 w-full p-4 h-full bg-gradient-to-t from-slate-900 to-transparent">
        <div className="flex w-full h-full gap-2 items-end">
          <h1 className="font-bold">Demon Slayer </h1> <p>(2020)</p>
        </div>
      </div>
    </div>
  );
};

export default CardLanscap;
