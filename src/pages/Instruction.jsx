import React from 'react'
import button from "../assests/images/play.png";
import cards from "../assests/images/3Cards.png";
import string from "../assests/images/string.png";
export default function Instruction({ nextKey }) {
    return (
        <div className="w-full h-full flex justify-center items-center">

            <div className='w-[70%] relative top-[1%] left-[2%] z-1'>
                <div className='w-[60%] absolute top-[30%] left-[18%] z-0'>
                    <img className='w-full z-0' src={string} />
                </div>
                <img className='w-full z-2' src={cards} />
            </div>
            <div className='w-[20%] absolute left-[80%] top-[80%]'>
                <button onClick={nextKey}>
                    <img src={button} />
                </button>
            </div>
        </div>
    )

}
