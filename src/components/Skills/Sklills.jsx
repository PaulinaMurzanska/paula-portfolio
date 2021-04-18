import React from 'react';

import {Link} from "react-router-dom";
import {ROUTE_ABOUT, ROUTE_PROJECTS} from "Constants/Routes";
import "./Skills.scss";
import "../About/About.scss";
import AboutReact from "components/Technologies/React";

const SkillsSmall = ({icon, path}) => {

    return (
        <React.Fragment>

            <Link to={path}>
                <div className="skill-card-small">
                    <div className="logo">
                        <div className="logo-wrapper">
                            <img src={icon}/>
                        </div>
                    </div>
                </div>
            </Link>



        </React.Fragment>

    )
}
export default SkillsSmall;