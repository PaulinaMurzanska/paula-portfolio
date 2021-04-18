import React from "react";
import './ProjectItem.scss';
import {Link} from "react-router-dom";
import {ROUTE_PROJECTS} from "Constants/Routes";

const ProjectItem = ({title, projectLogo, projectScreen,path}) => {
    return (
        <div className="project-item-box">
            <Link to={path}>
                <div className="project-item-logo">
                    <img src={projectLogo}/>
                </div>
                <div className='project-item-screen'>
                    <img src={projectScreen}/>
                </div>
            </Link>


        </div>
    )

}
export default ProjectItem;