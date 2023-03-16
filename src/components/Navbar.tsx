import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex gap-6 font-bold text-black/50">
      <Link href={'/'}>Movie</Link>
      <Link className="text-black" href={'/tv-show'}>
        Tv Show
      </Link>
      <Link href={'/anime'}>Anime</Link>
    </nav>
  );
};

export default Navbar;
