import Header from '@/components/Header';
import Productivity from '@/components/Productivity';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="py-16 bg-[fe6fafc]">
        <Productivity />
      </div>
    </main>
  );
}
