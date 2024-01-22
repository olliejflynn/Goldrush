import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="bg-bistre flex flex-col min-h-screen p-2 justify-around gap-4">
      <div className="border-cosmic_latte border-4 rounded-lg flex flex-none h-20 items-center justify-center">
        <h1 className="font-sans text-4xl shadow-lg text-center align-middle font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-400">
          GOLD RUSH
        </h1>
      </div>
      <div className=" flex lg:flex-row flex-col flex-grow gap-4">
        <div className="border-cosmic_latte border-4 rounded-lg sm:min-h-[28rem] max-h-screen flex-grow aspect-square"/>
        <div className="border-cosmic_latte border-4 flex-none max-w-none h-40 lg:max-w-[32rem] lg:flex-grow lg:h-auto"/>
      </div>
      <div className="border-cosmic_latte border-4 rounded-lg flex-none h-40"/>
    </main>
  )
}
