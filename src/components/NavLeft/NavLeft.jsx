import React from 'react';
import AppNavItem from "components/SharedComponents/AppNavItem";
import {
    ROUTE_ABOUT,
    ROUTE_CONTACT,
    ROUTE_EDUCATION,
    ROUTE_MAIN,
    ROUTE_PROJECTS,
    ROUTE_SKILLS,
    ROUTE_WORK
} from "Constants/Routes";
import "./NavLeft.scss";
import {FaFacebookF, FaGithubAlt, FaLinkedinIn} from "react-icons/fa";
import {Link} from "react-router-dom";

const NavLeft = () => {
    return (
        <React.Fragment>
            <div className="menu-side">
                <Link to={ROUTE_MAIN}>
                    <div className='logo-top'>
                        <span>paulina</span>
                        <span>murzanska</span>
                    </div>
                </Link>

                <div className="menu-links">
                    <AppNavItem
                        name='about'
                        path={ROUTE_ABOUT}
                    />
                    <AppNavItem
                        name='projects'
                        path={ROUTE_PROJECTS}
                    />
                    <AppNavItem
                        name='education'
                        path={ROUTE_EDUCATION}
                    />
                    <AppNavItem
                        name='work history'
                        path={ROUTE_WORK}
                    />
                    <AppNavItem
                        name='contact'
                        path={ROUTE_CONTACT}
                    />
                </div>
                <div className='socials'>
                    <FaFacebookF/>
                    <FaLinkedinIn/>
                    <FaGithubAlt/>
                </div>
            </div>

        </React.Fragment>
    )
}
export default NavLeft;