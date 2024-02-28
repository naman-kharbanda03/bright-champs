import React, { useEffect, useState } from 'react'
import BlueCard from '../components/BlueCard/BlueCard'
import RedCard from '../components/RedCard/RedCard'

import back from "../assests/images/Apple.png"
import orange2 from "../assests/images/orange2.png"
import grape from "../assests/images/grapes.png"
import water from "../assests/images/watermelon.png"
import banana from "../assests/images/banana.png"
import guava from "../assests/images/guava.png"
import straw from "../assests/images/strawberry.png"
import mango from "../assests/images/Mango.png"

import right from "../assests/images/A.png"
import o from "../assests/images/o.png"
import g from "../assests/images/G.png"
import w from "../assests/images/W.png"
import b from "../assests/images/B.png"
import gu from "../assests/images/GU.png"
import s from "../assests/images/S.png"
import m from "../assests/images/M.png"




import frontLeft from "../assests/images/blue.png"
import frontRight from "../assests/images/Red.png"
import Match from '../components/matched/Match'



export const leftData = [
    {
        id: 1,
        back: back,
        isFlipped: false,
    }, {
        id: 6,
        back: guava,
        isFlipped: false,
    }, {
        id: 2,
        back: mango,
        isFlipped: false,
    }, {
        back: banana,
        id: 8,
        isFlipped: false,
    }, {
        id: 4,
        back: straw,
        isFlipped: false,
    }, {
        id: 5,
        back: water,
        isFlipped: false,
    }, {
        id: 3,
        back: orange2,
        isFlipped: false,
    }, {
        id: 7,
        back: grape,
        isFlipped: false,
    }, ,]
export const rightData = [
    {
        id: 2,
        back: m,
        isFlipped: false,
    },
    {
        id: 1,
        back: right,
        isFlipped: false,
    }, {
        id: 3,
        back: o,
        isFlipped: false,
    },
    {
        id: 6,
        back: gu,
        isFlipped: false,
    }, {
        id: 8,
        back: b,
        isFlipped: false,
    }, {
        id: 4,
        back: s,
        isFlipped: false,
    }, {
        id: 5,
        back: w,
        isFlipped: false,
    }, {
        id: 7,
        back: g,
        isFlipped: false,
    },]
export default function Activity({ nextKey }) {
    const [tries, setTries] = useState(4);
    const [leftCardOpt, setLeftCardOpt] = useState({
        id: null,
        isFlipped: false,
        back: ''
    });
    const [rightCardOpt, setRightCardOpt] = useState({
        id: null,
        isFlipped: false,
        back: '',
    });
    const [leftCards, setLeftCards] = useState(leftData);
    const [rightCards, setRightCards] = useState(rightData);

    const [disableLeftButtons, setDisableLeftButtons] = useState(false);
    const [disableRightButtons, setDisableRightButtons] = useState(true);

    const [bananas, setBananas] = useState(0);
    const [matched, setMatched] = useState({
        leftCard: {},
        rightCard: {},
        matched: false,
    });

    useEffect(() => {

        if (leftCardOpt.isFlipped) {
            //disable left buttons
            setDisableLeftButtons(true);
            setDisableRightButtons(false);
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
                setMatched(prev => ({
                    ...prev,
                    leftCard: leftCardOpt,
                    rightCard: rightCardOpt,
                    matched: true
                }));
                setDisableLeftButtons(false);
                setDisableRightButtons(true);

            } else {
                reset();
            }
            setTries(prev => prev - 1);
        }

    }, [leftCardOpt, rightCardOpt])

    useEffect(() => {
        let Id;
        if (tries === 0) {
            Id = setTimeout(() => {
                nextKey(bananas);
            }, 1000)
        }
        return () => clearTimeout(Id);
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
        setDisableRightButtons(true);

    }
    useEffect(() => console.log(leftCards), [leftCards])
    return (
        <div className={`flex flex-col justify-center items-center h-full z-1 `} >
            <div className='flex flex row gap-x-24 h-[400px] z-0'>
                <div className='grid grid-cols-4 gap-2' >
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

                            disableButton={disableRightButtons}
                            setRightCardOpt={setRightCardOpt}
                            disableLeftButton={disableLeftButtons}

                            setRightCards={setRightCards}
                        />
                    ))}

                </div>
            </div>
            <div className={` ${matched.matched ? 'bg-black bg-opacity-50 h-full w-full z-10 absolute' : 'hidden'} `}>
                <Match leftCard={matched.leftCard} rightCard={matched.rightCard} setMatched={setMatched} />
            </div>
        </div >
    )
}
