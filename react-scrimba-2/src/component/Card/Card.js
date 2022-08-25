import React from 'react';
import './Card.css';
import star from './star.png';

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "Sold Out";
    } else if (props.location === "Online") {
        badgeText = "Online";
    }
  return (
    
        <div className='card'>
            <div className='card-badge'>{badgeText}</div>
            <img className='img-div' src={props.coverImg}></img>
            <div className='stats'>
                <img src={star}></img>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount})</span>
                <span className='gray'>·</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
  )
}