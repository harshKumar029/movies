import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
    return (
        <>
            <header className='navbar'>
                <div className='navdata'>
                    <div>
                    <Link to="/"><h2>Movie App</h2></Link>
                        {/* <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul> */}
                    </div>
                    <div className="auth-buttons">
                        <Link >
                            <button className='butt1'>Login</button>
                        </Link>
                        <Link >
                            <button className='butt2'>Signup</button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar