import React, { useState } from 'react';

const Navbar = () => {

    const [selectedIndex, setSelectedindex] = useState(0);

    function handleSelect(index) {
        setSelectedindex(index);
    };

    return (
        <nav className='navbar-container'>
            <ul className='nav-list'>
                <li className={`nav-item ${selectedIndex === 0 ? 'selected' : ''}`} onClick={() => handleSelect(0)}>
                    <a href="#" >Home</a>
                </li>
                <li className={`nav-item ${selectedIndex === 1 ? 'selected' : ''}`} onClick={() => handleSelect(1)}>
                    <a href="#" >Projects</a>
                </li>
                <li className={`nav-item ${selectedIndex === 2 ? 'selected' : ''}`} onClick={() => handleSelect(2)}>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar