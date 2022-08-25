import React from 'react';
import './Body.css';
import icon from './images/icon-location.png';

export default function Body(props) {
    return (

            <div className='item'>
                <img className='item-img' src={props.imageUrl}></img>
                <div className='item-info'>
                    <div className='item-info-top'>
                        <img className='icon-location' src={icon} alt='icon'></img>
                        <p className='location'>{props.location}</p>
                        <a className='link' href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className='title'>{props.title}</h1>
                    <p className='date'>{props.startDate} - {props.endDate}</p>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
    )
}