import React, { useEffect, useState } from 'react';
import bg from "../assests/images/bg-image.png";
import prev from "../assests/images//prevB.png"
import layer from "../assests/images/layer.png"


function Layout({ children, setKeyState, keyState }) {
    const [screen, setScreen] = useState();

    return (
        <div className='w-full h-screen'>
            <div
                className="h-full"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='w-[7%] absolute left-[2%] top-[2%]'>
                    {keyState > 0
                        ? <button className='pointer'>
                            <img src={prev} onClick={() => { console.log(keyState); setKeyState() }} />
                        </button>
                        : ''}
                </div>
                {children}
            </div>
        </div>


    );
}

export default Layout;