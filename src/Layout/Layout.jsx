import React, { useEffect, useState } from 'react';
import bg from "../assests/images/bg-image.png";
import prev from "../assests/images//prevB.png"
import layer from "../assests/images/layer.png";
import pinkBanana from "../assests/images/pinkBanana.png"


function Layout({ children, setKeyState, keyState }) {
    const [screen, setScreen] = useState(1);

    useEffect(() => console.log(keyState), [keyState])
    return (
        <div className='w-full h-screen'>
            <div
                className="h-full relative"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='w-[7%] absolute left-[2%] top-[2%]'>
                    {keyState > 1
                        ? <button className='pointer'>
                            <img src={prev} onClick={setKeyState} />
                        </button>
                        : ''}
                </div>
                <div className='flex flex-row absolute left-[27%] top-[6%] h-fit w-[50%] border rounded-[20px] bg-white'>
                    <div className={`h-[30px] ${keyState === 6 ? 'w-full' : `w-${keyState}/6`} bg-[yellow] rounded-[20px] `}
                        style={keyState >= 5 ?
                            {
                                backgroundImage: 'repeating-linear-gradient(-45deg, #ffcf25, #ffcf25 10%, #fce492 10%, #fce492 20%)'
                            }

                            : {
                                backgroundImage: 'repeating-linear-gradient(-45deg, #C4C4C4, #C4C4C4 10%, #cbd0d0 10%, #cbd0d0 20%)'
                            }}>
                    </div>
                    <img src={pinkBanana} className='w-[100px] absolute right-[-30px] top-[-20px]' />
                </div>
                {children}
            </div>
        </div>



    );
}

export default Layout;