import React from 'react'
import BlueCard from '../BlueCard/BlueCard'
import next from "../../assests/images/next.png"
import SVGComponent from '../../assests/svgs/svgviewer-react-output'

export default function Match({ leftCard, rightCard, setMatched }) {
    console.log(leftCard)
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-row'>
                <div className='h-fit w-[130px] mr-5 rotate-30'>
                    <img className=' transform rotate-30' src={leftCard.back} style={{
                        transform: 'rotate(-20deg)'
                    }} />
                </div>
                <div className='h-fit w-[130px] ml-5 relative top-[50px]' style={{
                    transform: 'rotate(20deg)'
                }}>
                    <img src={rightCard.back} />
                </div>
                <div className='absolute text-6xl text-white top-[30%] left-[60%]'>
                    <h2 style={{

                        width: '723px',
                        height: '131px',
                        // left: 711px;
                        // top: 200px;
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: '800',
                        fontSize: '96px',
                        lineHeight: '131px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        letterSpacing: '0.08em',
                        color: '#EF8F35',
                        // color: #fff,
                        textShadow: '3px 3px 2px #fff,-3px 3px 2px #fff, 3px -3px 0 #fff, 3px -3px 0 #fff',
                        // border: ' 7px solid #FFFFFF',

                    }}>It's a match </h2>
                    {/* <SVGComponent /> */}
                </div>
            </div>
            <div className='w-[20%] absolute left-[80%] top-[80%]'>
                <button onClick={() => {
                    setMatched(prev => ({
                        ...prev,
                        leftCard: {},
                        rightCard: {},
                        matched: false
                    }))
                }}>
                    <img src={next} />
                </button>
            </div>
        </div>
    )
}
