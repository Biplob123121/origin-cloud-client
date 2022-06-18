import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth);
        navigate('/')
    }
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/profile' className="navbar-brand">ORIGIN CLOUD</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/profile' className="nav-link active" aria-current="page">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/project' className="nav-link active" aria-current="page">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add' className="nav-link active" aria-current="page">Add Project</Link>
                        </li>
                        {
                            user && <button style={{ background: 'aliceblue' }} className='border-0 text-dark fw-bold' onClick={handleLogout}>Logout</button>
                        }
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default Header;