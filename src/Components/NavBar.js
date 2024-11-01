import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);  
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    const handleServiceChange = (e) => {
        const value = e.target.value;
        switch (value) {
            case 'small-Scale':
                navigate('/ss');
                break;
            case 'money-Remitter':
                navigate('/money');
                break;
            case 'wealth-Management':
                navigate('/wealth');
                break;
            case 'micro-Fiance':
                navigate('/micro');
                break;
            default:
                break;

        };
    }
    return (
        <div className='nav'>
            <img src="https://i.ibb.co/gmmRky5/Designer-removebg-preview.png" alt='logo' className='logo-img' />
            <div className='hamburger' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <ul className={`nav1 ${isOpen ? 'open' : ''}`}>
                <li className='nav-li'>
                    <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>About Us</Link>
                </li>
                <li className='nav-li'>
                    <select className='service' onChange={handleServiceChange}>
                        <option value="services">Services</option>
                        <option value="small-Scale">SS</option>
                        <option value="money-Remitter">
                            <Link to='/money' style={{ textDecoration: 'none', color: 'black' }}>MR</Link>
                        </option>
                        <option value="wealth-Management">
                            <Link to='/wealth' style={{ textDecoration: 'none', color: 'black' }}>WM</Link>
                        </option>
                        <option value="micro-Fiance">
                            <Link to='/micro' style={{ textDecoration: 'none', color: 'black' }}>MF</Link>
                        </option>
                    </select>
                </li>
                <li className='nav-li'>
                    <Link to='/cal' style={{ textDecoration: 'none', color: 'black' }}>EMI Calculator</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/join' style={{ textDecoration: 'none', color: 'black' }}>Join as a Member</Link>
                </li>
                <li className='nav-li'>
                    <Link to='/update' style={{ textDecoration: 'none', color: 'black' }}>Update Profile</Link>
                </li>
                <li className='log'>
                    <Link to='/' style={{ textDecoration: 'none' }}>Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
