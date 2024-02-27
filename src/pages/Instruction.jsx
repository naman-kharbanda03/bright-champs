import React from 'react'
import button from "../assests/images/play.png"
export default function Instruction({ nextKey }) {
    return (
        <div className="w-full h-full">


            <div className='w-[20%] absolute left-[80%] top-[80%]'>
                <button onClick={nextKey}>
                    <img src={button} />
                </button>
            </div>
        </div>
    )
}
