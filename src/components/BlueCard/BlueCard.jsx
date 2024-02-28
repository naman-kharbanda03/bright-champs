import React, { useEffect, useState } from 'react'
import "./BlueCard.css"
import downArrow from "../../assests/images/downArrow.png"
import msg from "../../assests/images/msg.png";

export default function BlueCard({ back, front, id, isFlipped, setLeftCardOpt, disableButton, setLeftCards }) {
    const [Flip, setFlip] = useState(false);
    const [flipButton, setFlipButton] = useState(false);
    const [ID, setID] = useState(id);
    const [firstClick, setFirstClick] = useState(false);

    useEffect(() => {
        console.log(isFlipped);
        setFlip(isFlipped);
    }, [isFlipped])

    useEffect(() => {
        setFlipButton(disableButton);
    }, [disableButton])

    const handleFlip = (ID, back) => {
        // setFlip(prev => !prev)
        setFirstClick(true);
        setLeftCardOpt(prev => ({
            ...prev,
            id: ID,
            isFlipped: true,
            back: back
        }))
        setLeftCards(prev => {
            const updatedCards = prev.map(card => {
                if (card.id === ID) {
                    return { ...card, isFlipped: true, back: card.back, id: card.id };
                } else
                    return { ...card }
            })
            return updatedCards;
        })
    }


    return (
        <div>
            <div className='h-fit w-[140px]'>
                {(id === 8 && !firstClick)
                    ? <div className='relative'>
                        <img src={downArrow} className='absolute top-[-40px] right-[60px]' />
                        <img className='absolute top-[-50px] left-[100px]' src={msg} />
                        <p className='absolute top-[-35px] left-[110px] text-[#11AEC6]'
                            style={{
                                // position: 'absolute',
                                width: '200px',
                                height: '20px',

                                fontFamily: 'Nunito',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                fontSize: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#11AEC6',
                            }}
                        >Select an image!</p>
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
