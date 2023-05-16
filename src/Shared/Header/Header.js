import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className='btn btn-ghost text-xl normal-case'>Auth Context</Link>
                <Link to="/home" className='btn btn-ghost text-xl normal-case'>Home</Link>
                <Link to="/login" className='btn btn-ghost text-xl normal-case'>Log in</Link>
                <Link to="/register" className='btn btn-ghost text-xl normal-case'>Sign up</Link>
                <button className='btn btn-sm'>Logout</button>
                <button className='btn btn-sm'>Log in</button>

            </div>

        </div>

    );
};

export default Header;