import React from 'react';
import Avatar  from '@mui/material/Avatar';
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestmp, channelImage }) {
  return (
    <div className='videoCard'>
        <img className='videoCard__thumbnail' src={image} alt="" />
        <div className="videoCard__info">
            <Avatar 
                className="videoCard__avatar"
                alt={title}
                src={channelImage}
            />
            <div className='videoCard__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} • {timestmp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard