import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain2 from './brain2.png';
import './Logo.css';

const Logo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-3 pa3' tiltMaxAngleX={30} tiltMaxAngleY={30}>
                <div style={{ height: '100px', width: '100px', display: 'flex', }}>
                    <img alt='logo' src={brain2}></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;