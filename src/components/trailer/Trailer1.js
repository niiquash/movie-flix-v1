import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer1.css';

import React from 'react'

const Trailer1 = () => {
    let params = useParams();
    const key = params.ytTrailerId;
    return (
        <div className="react-player-container">
            {
                (key != null) ?
                    <ReactPlayer
                        controls="true"
                        playing={true}
                        url={`https://www.youtube.com/watch?v=${key}`}
                        width='100vw'
                        height='100vh'
                    /> :
                    null
            }
        </div>
    )
}

export default Trailer1
