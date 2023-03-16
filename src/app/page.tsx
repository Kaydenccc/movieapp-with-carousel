import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Navigation from '@/components/Navigation';
import ButtonPlus from '@/components/ButtonPlus';
import Card from '@/components/Card';
import CardLanscap from '@/components/CardLanscap';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
      <Navigation text="Now Playing" />
      <section className="flex overflow-x-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Navigation text="Top Rated Movies" />
      <section className=" flex overflow-x-auto">
        <CardLanscap />
        <CardLanscap />
        <CardLanscap />
        <CardLanscap />
        <CardLanscap />
        <CardLanscap />
        <CardLanscap />
        <CardLanscap />
        <CardLanscap />
      </section>
    </main>
  );
}
