import React, {useState} from 'react';
import AppNavItem from "components/SharedComponents/AppNavItem";
import {
    ROUTE_ABOUT, ROUTE_ABOUT_SKILLS,
    ROUTE_CONTACT,
    ROUTE_EDUCATION,
    ROUTE_MAIN,
    ROUTE_PROJECTS,
    ROUTE_WORK
} from "Constants/Routes";
import "./NavLeft.scss";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import {GoMarkGithub} from "react-icons/go";

const NavLeft = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isHover, setIsHover] = useState(false);
    return (
        <React.Fragment>
            <div className={`menu-side ${openMenu ? "roll-down" : ""}`}>
                <Link to={ROUTE_MAIN}>
                    <div className='logo-top'>
                        <span>Paulina</span>
                        <span>Murzanska</span>
                    </div>
                </Link>

                <div className="menu-links">

                    <AppNavItem
                        name='About me'
                        path={ROUTE_ABOUT}

                    />
                    <AppNavItem
                        name='My skills'
                        path={ROUTE_ABOUT_SKILLS}
                    />
                    <AppNavItem
                        name='Projects'
                        path={ROUTE_PROJECTS}
                    />
                    <AppNavItem
                        name='Education'
                        path={ROUTE_EDUCATION}
                    />
                    <AppNavItem
                        name='Work history'
                        path={ROUTE_WORK}
                    />
                    <AppNavItem
                        name='Contact'
                        path={ROUTE_CONTACT}
                    />
                </div>
                <div className='socials'>
                    <a href='https://www.facebook.com/paulina.murzanska/' target="_blank">
                        <FaFacebookF/>
                    </a>
                    <a href='https://www.linkedin.com/in/paulina-murza%C5%84ska-858b6544/' target="_blank">
                        <FaLinkedinIn/>
                    </a>
                    <a href='https://github.com/PaulinaMurzanska' target="_blank">
                        <GoMarkGithub/>
                    </a>
                </div>
                <div className='menu-hover-triangle-up'>
                    <div
                        className={`bar-menu-top ${isHover ? "on-hover" : ""}`}
                        onMouseOver={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        onClick={() => setOpenMenu(false)}
                    >
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>

            </div>
            <div className='menu-hover-triangle'>
                <div
                    className={`bar-menu ${isHover ? "on-hover" : ""}`}
                    onMouseOver={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={() => setOpenMenu(true)}
                >
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>

        </React.Fragment>
    )
}
export default NavLeft;