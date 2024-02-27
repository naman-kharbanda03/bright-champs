import React, { useEffect, useState } from 'react'
import BlueCard from '../components/BlueCard/BlueCard'
import RedCard from '../components/RedCard/RedCard'
import back from "../assests/images/Apple.png"
import right from "../assests/images/A.png"
import frontLeft from "../assests/images/blue.png"
import frontRight from "../assests/images/Red.png"



export const leftData = [
    {
        id: 1,
        back: back,
        isFlipped: false,
    }, {
        id: 2,
        back: back,
        isFlipped: false,
    }, {
        id: 3,
        back: back,
        isFlipped: false,
    }, {
        id: 4,
        back: back,
        isFlipped: false,
    }, {
        id: 5,
        back: back,
        isFlipped: false,
    }, {
        id: 6,
        back: back,
        isFlipped: false,
    }, {
        id: 7,
        back: back,
        isFlipped: false,
    }, {
        back: back,
        id: 8,
        isFlipped: false,
    },]
export const rightData = [
    {
        id: 1,
        back: right,
        isFlipped: false,
    }, {
        id: 2,
        back: right,
        isFlipped: false,
    }, {
        id: 3,
        back: right,
        isFlipped: false,
    }, {
        id: 4,
        back: right,
        isFlipped: false,
    }, {
        id: 5,
        back: right,
        isFlipped: false,
    }, {
        id: 6,
        back: right,
        isFlipped: false,
    }, {
        id: 7,
        back: right,
        isFlipped: false,
    }, {
        id: 8,
        back: right,
        isFlipped: false,
    },]
export default function Activity({ nextKey }) {
    const [tries, setTries] = useState(4);
    const [leftCardOpt, setLeftCardOpt] = useState({
        id: null,
        isFlipped: false
    });
    const [rightCardOpt, setRightCardOpt] = useState({
        id: null,
        isFlipped: false
    });
    const [leftCards, setLeftCards] = useState(leftData);
    const [rightCards, setRightCards] = useState(rightData);

    const [disableLeftButtons, setDisableLeftButtons] = useState(false);
    const [bananas, setBananas] = useState(0);

    useEffect(() => {

        if (leftCardOpt.isFlipped) {
            //disable left buttons
            setDisableLeftButtons(true);
        }
        if (leftCardOpt.isFlipped && rightCardOpt.isFlipped) {
            if (leftCardOpt.id === rightCardOpt.id) {
                setLeftCards(prev => {
                    const updatedCards = prev.map(card => {
                        if (card.id === leftCardOpt.id) {
                            return { ...card, isFlipped: true, back: '', id: card.id };
                        } else
                            return { ...card }
                    })
                    return updatedCards;
                });
                setRightCards(prev => {
                    const updatedCards = prev.map(card => {
                        if (card.id === rightCardOpt.id) {
                            return { ...card, isFlipped: true, back: '', id: card.id };
                        } else
                            return { ...card }
                    })
                    return updatedCards;
                });
                setLeftCardOpt({
                    id: null,
                    isFlipped: false
                });
                setRightCardOpt({
                    id: null,
                    isFlipped: false
                });
                setBananas(prev => prev + 1);
                alert('matched');
                setDisableLeftButtons(false);
            } else {
                reset();
            }
            setTries(prev => prev - 1);
        }

    }, [leftCardOpt, rightCardOpt])

    useEffect(() => {
        if (tries === 0) {
            nextKey(bananas);
        }
    }, [tries])

    function reset() {
        setLeftCardOpt(prev => ({
            ...prev,
            id: null,
            isFlipped: false
        }));
        setRightCardOpt(prev => ({
            ...prev,
            id: null,
            isFlipped: false
        }))
        setLeftCards(prev => {
            const updatedCards = prev.map(card => {
                if (card.id === leftCardOpt.id) {
                    return { ...card, isFlipped: false, back: card.back, id: card.id };
                } else
                    return { ...card }
            })
            return updatedCards;
        });
        setRightCards(prev => {
            const updatedCards = prev.map(card => {
                if (card.id === rightCardOpt.id) {
                    return { ...card, isFlipped: false, back: card.back, id: card.id };
                } else
                    return { ...card }
            })
            return updatedCards;
        });
        setDisableLeftButtons(false);
    }
    useEffect(() => console.log(leftCards), [leftCards])
    return (
        <div className='flex flex-col justify-center items-center h-full' >
            <div className='flex flex row gap-x-24 h-[400px]'>
                <div className='grid grid-cols-4 gap-2'>
                    {leftCards?.map(card => (
                        <BlueCard className='col-span-1'
                            back={card?.back}
                            front={frontLeft}
                            id={card?.id}
                            isFlipped={card?.isFlipped}

                            setLeftCardOpt={setLeftCardOpt}
                            disableButton={disableLeftButtons}

                            setLeftCards={setLeftCards}
                        />
                    ))}
                </div>
                <div className='grid grid-cols-4 gap-2'>
                    {rightCards.map(card => (
                        <RedCard className='col-span-1'
                            back={card.back}
                            front={frontRight}
                            id={card.id}
                            isFlipped={card.isFlipped}

                            setRightCardOpt={setRightCardOpt}

                            setRightCards={setRightCards}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}
