import React, {useState} from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
// import '../Header/Header.scss';


const AppNavItem = ({path, name}) => {
    const style = {
        color: "#575353",
        fontSize:"1.3rem",
        paddingLeft:"15px",

    };

    return (

            <NavLink tag={RouterNavLink} exact to={path} activeClassName='active' activeStyle={style}>
                    {name}
            </NavLink>

    )
}
export default AppNavItem;