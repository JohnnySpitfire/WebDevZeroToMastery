import React from 'react';

const FaceRecognition = ({imgUrl}) => {
    console.log(imgUrl);
    return(
        <div className='center'>
            <img src={imgUrl} alt='placeholder'/>
        </div>
    )
}

export default FaceRecognition;