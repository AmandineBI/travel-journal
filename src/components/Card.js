import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div className="card--container">
            <img src={props.image} alt={props.place} className="card--image" />
            <div className="card--text">
                <div>
                    <FontAwesomeIcon icon={faLocationDot} className="text--icon"/>
                    <span className="text--country">{props.country}</span>
                    <span className="text--maps">
                        <a href={props.googleMapsLink} target="_blank" rel="noreferrer">View on Google Maps</a>
                    </span>
                </div>
                <h1 className="text--place">{props.place}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}