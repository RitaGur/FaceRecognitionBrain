import React, { useEffect } from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    useEffect(() => {
        if (!box.leftCol) {
            return;
        }
    });

    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id={"inputImage"} alt='' src={imageUrl} width={'500px'} height={"auto"} />
                {box && box.leftCol && (
                    <div className='bounding-box' style={{ left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow }}></div>
                )}
            </div>
        </div>
    );
}

export default FaceRecognition;