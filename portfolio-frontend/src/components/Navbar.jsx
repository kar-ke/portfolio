import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [selectedIndex, setSelectedindex] = useState(0);
    const navigate = useNavigate();

    function handleClick(index, path='') {
        setSelectedindex(index);
        navigate(`/${path}`);
    }

    return (
        <nav className='navbar-container'>
            <ul className='nav-list'>
                <li className={`nav-item ${selectedIndex === 0 ? 'selected' : ''}`} onClick={() => handleClick(0)}>
                    <a href="#" >Home</a>
                </li>
                <li className={`nav-item ${selectedIndex === 1 ? 'selected' : ''}`} onClick={() => handleClick(1, 'projects')}>
                    <a href="#" >Projects</a>
                </li>
                <li className={`nav-item ${selectedIndex === 2 ? 'selected' : ''}`} onClick={() => handleClick(2, 'contact')}>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar