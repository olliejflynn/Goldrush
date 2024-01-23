import Image from 'next/image';
import FullBoard from './ui/gameboard/board';

export default function Home() {
  return (
    <main className="bg-bistre flex flex-col min-h-screen p-2 justify-around gap-4">
      <div className="flex flex-none h-20 items-center justify-center bg-dirt">
        <h1 className="font-sans text-8xl shadow-lg text-center align-middle font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-400">
          GOLD RUSH
        </h1>
      </div>
      <div className=" flex lg:flex-row flex-col flex-grow gap-4">
        <div className="border-cosmic_latte border-4 rounded-lg sm:min-h-[28rem] max-h-screen aspect-square">
          <FullBoard/>
        </div>
        <div className="border-cosmic_latte border-4 flex-none max-w-none h-40 lg:flex-grow lg:h-auto"/>
      </div>
    </main>
  )
}
