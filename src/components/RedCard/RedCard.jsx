import React, { useEffect, useState } from 'react'
import "./RedCard.css"

export default function RedCard({ back, front, id, isFlipped, setRightCardOpt, setRightCards }) {
    const [Flip, setFlip] = useState(false);
    const [flipButton, setFlipButton] = useState(false);
    const [ID, setID] = useState(id);

    useEffect(() => {
        setFlip(isFlipped);
    }, [isFlipped])


    const handleFlip = (ID) => {
        setFlip(prev => !prev);
        setTimeout(() => {
            setRightCardOpt(prev => ({
                ...prev,
                id: ID,
                isFlipped: true
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
                <button
                    className={`card ${Flip ? 'flipped' : ''} pointer`}
                    onClick={() => handleFlip(id)}
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
