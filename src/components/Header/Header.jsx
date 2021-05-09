import React from "react";
import {Container} from "reactstrap";
import './Header.scss';
import logo from '../../images/paulina logo white.png';
import AppNavItem from "components/SharedComponents/AppNavItem";
import {ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_MAIN, ROUTE_PROJECTS} from "Constants/Routes";
import {FaFacebookF, FaLinkedinIn, FaGithubAlt} from 'react-icons/fa';
import {Link} from "react-router-dom";

const HeaderBar = () => {
    return (
        <div className='header'>
            <Container className='nav-container'>
                <div className='logo-section'>
                    <Link to={ROUTE_MAIN}>
                        <img className='logo' src={logo}/>
                    </Link>

                </div>
                <div className="links-socials-section">
                    <div className='nav-links-section'>
                        <AppNavItem
                            name='about'
                            path={ROUTE_ABOUT}
                        />
                        <AppNavItem
                            name='projects'
                            path={ROUTE_PROJECTS}
                        />
                        <AppNavItem
                            name='contact'
                            path={ROUTE_CONTACT}
                        />

                    </div>
                    <div className='socials-section'>
                        <FaFacebookF style={{color: "white", fontSize: "1.2rem"}}/>
                        <FaLinkedinIn style={{color: "white", fontSize: "1.2rem"}}/>
                        <FaGithubAlt style={{color: "white", fontSize: "1.2rem"}}/>

                    </div>
                </div>


            </Container>
        </div>
    )
}

export default HeaderBar;