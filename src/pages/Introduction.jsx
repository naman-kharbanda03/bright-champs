import React from 'react'
import monkey from "../assests/images/monkeyOpen.png"
import msg from "../assests/images/msg.png"
import prev from "../assests/images//prevB.png"
import start from "../assests/images/Start Button.png"

export default function Introduction({ button, nextKey, message }) {
    console.log(button)
    return (
        <div className="w-full h-full">
            <div className='w-[7%] absolute left-[2%] top-[2%]'>
                <button className='pointer'>
                    <img src={prev} />
                </button>
            </div>

            <div className='w-[30%] relative top-[30%] left-[40%]'>
                <img className='' src={monkey} />
                <div className='w-[80%] absolute left-[40%] top-[-25%]'>
                    <div className=''>
                        <p className='absolute top-[50px] left-[40px] text-2xl text-[#11AEC6]'>{message}</p>
                    </div>
                    <img src={msg} />
                </div>
            </div >

            <div className='w-[20%] absolute left-[80%] top-[80%]'>
                <button onClick={nextKey}>
                    <img src={button} />
                </button>
            </div>
        </div >
    )
}
