import React from "react";
import './ProjectItem.scss';
import {Link} from "react-router-dom";
import {GoMarkGithub} from "react-icons/go";


const ProjectItem = ({title, projectLogo, projectScreen, path}) => {
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
};
export const ProjectItemPortfolio= ({title, projectScreen, path}) => {
    return (
            <div className="project-item-box portfolio">
                <Link to={path}>
                    <div className="project-item-logo">
                        <h1> {title}</h1>
                    </div>
                    <div className='project-item-screen'>
                        <img src={projectScreen}/>
                    </div>
                    <div className="portfolio-info">
                        <p> This portfolio site is a React SPA, too!</p>
                    </div>
                </Link>
                <a className="github" href="#">
                    <GoMarkGithub/>
                </a>


            </div>
    )
}


export default ProjectItem;