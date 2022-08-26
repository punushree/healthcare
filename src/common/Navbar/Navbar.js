import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"



export const Navbar = () => {
    // const [click, setClick] = useState(false)

    // const handleClick = () => setClick(!click)

    // const closeMobileMenu = () => setClick(false)

    return (
        <>
            {/* <nav className='navbar'>
                <div className="container flex_space">

                   <div className="menu-icon" onClick={handleClick}>
                        <i class= {click? "fas fa-times" : "fa-solid fa-bars"}></i>
                    </div>

                    <ul className={click? "nav-menu active" : "nav-menu"}>
                        
                    <li><Link to ="/" onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to ="/About" onClick={closeMobileMenu}>About</Link></li>
                    <li><Link to ="/Contact" onClick={closeMobileMenu}>Contact</Link></li>
                        
                    </ul>

                    <ul className="login-area flex">
                       
                        <li>
                            <Link to ="/contact">
                                <button className='primary-btn'>
                                    Request a Quote
                                </button>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav> */}

            <header>
                <div className='container flex_space'>
                    <div className='logo'>
                    <Link to ="/"><img src= "https://xqn91.mjt.lu/img/xqn91/b/s848/0qv4j.png" alt="" width="100" /></Link>
                    </div>

                    <div className='contact flex_space'>
                        <div className='box flex_space'>
                        <Link to ="/">Home</Link>
                        </div>
                        <div className='box flex_space'>
                        <Link to ="/About">About</Link>
                        </div>
                        <div className='box flex_space'>
                        <Link to ="/Contact">Contact</Link>
                        </div>
                        
                        <div className='box flex_space'>
                           <p><i class="fa-solid fa-phone"></i> 
                            &nbsp;&nbsp;+1 (088) 456 888</p>
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    )
}
