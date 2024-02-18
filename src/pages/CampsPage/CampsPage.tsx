import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './CampsPage.module.css';
import FAQComponent from './FAQComponent';

export default function CampsPage() {
    return (
        <div>
            <h1>CAMPS</h1>
            <p>
                Registration for the 2024 ELEVATE Synchro Camp is now live! Join us for 2 days of on-ice and off-ice training this July in Pleasant Prarie, WI!
            </p>
            <FAQComponent />
        </div>
        
    );
};