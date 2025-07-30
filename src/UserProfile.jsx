// https://github.com/Greg01001000/module9b-profile

import { useState } from 'react';

function UserProfile({name, pic, quote, bonus}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div style={{ maxWidth: '300px', margin: '15px auto', padding: '20px', borderRadius: '15px', boxShadow: '0 1px 8px rgba(0, 0, 100, 0.2)', backgroundColor: '#94f6f637',
             fontFamily: 'Cambria, Times New Roman, serif', textAlign: 'center', boxShadow: isHovered ? '0 8px 25px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
             transform: isHovered ? 'scale(1.03)' : 'scale(1)', transition: 'all 0.3s ease'}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <img src={pic} alt={`${name}'s profile`} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #419494ff', marginBottom: '15px' }} />
            <h1 style={{ fontSize: '22px', color: '#0714a8ff' }}>{name}</h1>
            <p style={{ fontSize: '15px', color: '#3b3b3dff' }}>{quote}</p>
            <div style={{ maxHeight: isHovered ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease, opacity 0.3s ease', opacity: isHovered ? 1 : 0 }}>
                <hr />
                <p style={{ fontSize: '14px', color: '#3b3b3dff' }}> {bonus} </p>
            </div>
        </div>
    );
}

export default UserProfile;