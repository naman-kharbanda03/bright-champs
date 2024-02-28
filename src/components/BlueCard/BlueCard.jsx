import React, { useEffect, useState } from 'react'
import "./BlueCard.css"

export default function BlueCard({ back, front, id, isFlipped, setLeftCardOpt, disableButton, setLeftCards }) {
    const [Flip, setFlip] = useState(false);
    const [flipButton, setFlipButton] = useState(false);
    const [ID, setID] = useState(id);

    useEffect(() => {
        console.log(isFlipped);
        setFlip(isFlipped);
    }, [isFlipped])

    useEffect(() => {
        setFlipButton(disableButton);
    }, [disableButton])

    const handleFlip = (ID, back) => {
        // setFlip(prev => !prev)
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
            <div className='h-fit w-[130px]'>
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
