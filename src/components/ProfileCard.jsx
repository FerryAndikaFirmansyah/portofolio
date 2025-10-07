import React, { useState } from 'react';


export default function ProfileCard() {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className={`lanyard-wrap ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(s => !s)}>
            <div className="lanyard-card">
                <div className="lanyard-front">
                    <img src="/assets/profilecard.jpg" alt="profile" className="profile-img" />
                    <h4 className="mt-2">Ferry</h4>
                    <p className="muted small">Web Developer</p>
                </div>
                <div className="lanyard-back">
                    <h5>Contact</h5>
                    <p className="small">ferryandika089@gmail.com<br />+62 858-8881-1049</p>
                    <p className="small">GitHub: github.com/FerryAndikaFirmansyah</p>
                </div>
            </div>
            <div className="lanyard-strap" />
        </div>
    );
}