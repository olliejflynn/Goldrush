'use client'

import Image from "next/image";
import { useState } from "react";

export default function FullBoard() {

    const [isStartClicked, setIsStartClicked] = useState(false);
    const [isEndClicked, setIsEndClicked] = useState(false);


    const handleStartNodeClick = () => {
        setIsStartClicked(!isStartClicked)
        setIsEndClicked(false)
    }

    const handleEndNodeClick = () => {
        setIsEndClicked(!isEndClicked)
        setIsStartClicked(false)
    }

    const generateCells = (grid_size: number) => {
        const cells = [];
        for (let i = 1; i <= grid_size; i++) {
            for (let j = 1; j <= grid_size; j++) {
                if(i == 1 && j==1){
                    cells.push(
                        <div key={`${i}-${j}`} className={`border bg-lime-700 border-bistre-400 hover:border-white ${isStartClicked ? 'border-green-400 border-4' : ''}`} onClick={handleStartNodeClick}>
                        </div>
                    );
                }
                else if(i==grid_size/2 && j==grid_size/2){
                    cells.push(
                        <div key={`${i}-${j}`} className={`border bg-cosmic_latte-300 border-bistre-400 hover:border-white ${isEndClicked ? 'border-yellow-400 border-4' : ''}`} onClick={handleEndNodeClick}>
                        </div>
                    );
                }
                else{
                    cells.push(
                        <div key={`${i}-${j}`} className={`border border-bistre-400 ${isStartClicked || isEndClicked ? 'hover:border-white' : ''}`}>
                            <Image
                                alt="dirt"
                                width={150}
                                height={150}
                                style={{objectFit: "contain"}}
                                src={"/dirt3.jpg"}
                            />
                        </div>
                    );
                }
            }
        }
        return cells;
    };

    return (
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {generateCells(20)}
        </div>
    );
}