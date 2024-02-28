import React, { useEffect, useState } from 'react'
import "./RedCard.css"
import downArrow from "../../assests/images/upArrow.png"
import msg from "../../assests/images/msg.png";

export default function RedCard({ back, front, id, isFlipped, setRightCardOpt, setRightCards, disableButton, disableLeftButton }) {
    const [Flip, setFlip] = useState(false);
    const [flipButton, setFlipButton] = useState(false);
    const [ID, setID] = useState(id);
    const [firstClick, setFirstClick] = useState(false);

    useEffect(() => {
        setFlip(isFlipped);
    }, [isFlipped])

    useEffect(() => {
        setFlipButton(disableButton);
    }, [disableButton])

    const handleFlip = (ID, back) => {
        setFirstClick(true);
        setFlip(prev => !prev);
        setTimeout(() => {
            setRightCardOpt(prev => ({
                ...prev,
                id: ID,
                isFlipped: true,
                back: back
            }))
            setRightCards(prev => {
                const updatedCards = prev.map(card => {
                    if (card.id === ID) {
                        return { ...card, isFlipped: true, back: card.back, id: card.id };
                    } else
                        return { ...card }
                })
                return updatedCards;
            })
        }, 1000)

    }


    return (
        <div>
            <div className='h-fit w-[130px]'>
                {(id === 8 && !firstClick && disableLeftButton)
                    ? <div className='relative'>
                        <img src={downArrow} className='absolute top-[180px] right-[-90px]' />
                        <img className='absolute top-[180px] left-[-100px] ' src={msg} />
                        <p className='absolute  top-[195px] left-[-80px] text-[#11AEC6]'
                            style={{
                                // position: 'absolute',
                                width: '140px',
                                height: '18px',
                                fontFamily: 'Nunito',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                fontSize: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#11AEC6',
                            }}
                        >Now select a second card!</p>
                    </div>
                    : ''}
                <button
                    className={`card ${Flip ? 'flipped' : ''} pointer`}
                    onClick={() => handleFlip(id, back)}
                    disabled={flipButton}
                >
                    <div className='card-inner '>
                        <div className='card-front'>
                            <img src={front} className='w-full pointer' />
                        </div>
                        <div className='card-back'>
                            <img src={back} className='w-full pointer' />
                        </div>
                    </div>

                </button>
            </div>
        </div>
    )
}
