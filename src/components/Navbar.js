import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope, faEarthAsia } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <FontAwesomeIcon icon={faEarthEurope} className="navbar--icon"/>
            <p>Places I would like to travel to</p>
            <FontAwesomeIcon icon={faEarthAsia} className="navbar--icon"/>
        </nav>
    )
}