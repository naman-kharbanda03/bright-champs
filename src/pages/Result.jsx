import React from 'react';
import result from "../assests/images/Result.png";
import monkey from "../assests/images/MonkeyResult.png";
import yellow from "../assests/images/yellowBanana.png";

export default function Result({ ans, resetKey }) {
    return (
        <div className="w-full h-full flex justify-center border border-black bg-black bg-opacity-50 " style={{
            // backdropFilter: 'blur(8px)'
        }}>
            <div className='w-[30%] relative '>
                <img src={result} />

                <img className='absolute w-[50%] top-[40%] left-[26%]' src={monkey} />
                <div className='absolute text-center text-[white] w-[10%] h-[10%] bg-[#fd9c3b] top-[25%] left-[15%] rounded-[15px] flex flex-col justify-center'>
                    <h2 className='text-4xl'>{ans}</h2>
                </div>
                <button className='pointer h-[10%] absolute w-[70%] top-[74%] left-[15%]' onClick={() => resetKey()}>
                </button>
                <img src={yellow} className='absolute top-[80%] left-[120%] w-[20%]' />
                <img src={yellow} className='absolute top-[60%] left-[-20%] w-[20%]' />
                <img src={yellow} className='absolute top-[20%] left-[-60%] w-[20%]' />
                <img src={yellow} className='absolute top-[40%] left-[90%] w-[20%]' />
            </div>
        </div>
    )
}
