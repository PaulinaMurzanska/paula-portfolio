import React from 'react';
import 'scss/pageContainer.scss';
import {ROUTE_BEAUTYLINE, ROUTE_BLOG, ROUTE_BUDGET, ROUTE_PLANTATION, ROUTE_PROJECTS} from "Constants/Routes";
import "../Technologies/React.scss"
import "../About/About.scss";
import ProjectSiteItem from "components/Projects/ProjectSiteItrem";
import reactLogo from '../../images/reactjs-ar21.svg';
import budgetUrl from '../../images/budgetscreen.png';
import plantationUrl from "../../images/plantationscreen.png";
import htmlLogo from '../../images/html.png';
import alex from "../../images/alexsmith.png";
import winter from '../../images/winterscreen.png';
import pofo2 from '../../images/pofo2screen.png';
import pofo1 from "../../images/pofo1screen.png";
import beautyLine from '../../images/beautylinescreen.png';
import blog from "../../images/blogscreen.png";
import django from '../../images/django.png';
import drf from '../../images/djangorest.png';
import budgetApi from '../../images/budgetApiScreen.png';
import plantsApi from'../../images/plantsApiScreen.png';


const Projects = () => {
    const text = "onClick={clickHereToOpenGithub}";

    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='description'>
                                <div className="description-text">
                                    <h2>My training projects</h2>
                                    <div className='projects-wrapper'>
                                        <ProjectSiteItem
                                        techLogo={reactLogo}
                                        url={budgetUrl}
                                        siteTitle="Home Budget"
                                        siteUrl={ROUTE_BUDGET}
                                        linkType="linkReact"
                                        />
                                            <ProjectSiteItem
                                        techLogo={reactLogo}
                                        url={plantationUrl}
                                        siteTitle="Plantation"
                                        siteUrl={ROUTE_PLANTATION}
                                        linkType="linkReact"
                                        />
                                             <ProjectSiteItem
                                        techLogo={htmlLogo}
                                        url={alex}
                                        siteTitle="Alex Smith"
                                        siteUrl="https://alexresumesite.netlify.app/"
                                        linkType="linkHref"
                                        />
                                                 <ProjectSiteItem
                                        techLogo={htmlLogo}
                                        url={winter}
                                        siteTitle="Winter"
                                        siteUrl="https://winterphotography.netlify.app/"
                                        linkType="linkHref"
                                        />
                                                   <ProjectSiteItem
                                        techLogo={htmlLogo}
                                        url={pofo1}
                                        siteTitle="POFO"
                                        siteUrl="https://pofo-first.netlify.app/"
                                        linkType="linkHref"
                                        />
                                                       <ProjectSiteItem
                                        techLogo={htmlLogo}
                                        url={pofo2}
                                        siteTitle="POFO Corousel"
                                        siteUrl="https://pofo-carousel.netlify.app/"
                                        linkType="linkHref"
                                        />
                                                           <ProjectSiteItem
                                        techLogo={django}
                                        url={beautyLine}
                                        siteTitle="Reservation system"
                                        siteUrl={ROUTE_BEAUTYLINE}
                                        linkType="linkReact"
                                        />
                                                           <ProjectSiteItem
                                        techLogo={django}
                                        url={blog}
                                        siteTitle="Blog"
                                        siteUrl={ROUTE_BLOG}
                                        linkType="linkReact"
                                        />
                                                              <ProjectSiteItem
                                        techLogo={drf}
                                        url={budgetApi}
                                        siteTitle="Budget API"
                                        siteUrl="https://fast-dawn-10983.herokuapp.com/"
                                        linkType="linkHref"
                                        />
                                                              <ProjectSiteItem
                                        techLogo={drf}
                                        url={plantsApi}
                                        siteTitle="Plantation API"
                                        siteUrl="https://still-fortress-69660.herokuapp.com/"
                                        linkType="linkHref"
                                        />
                                    </div>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska"
                                           target="_blank">{text}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
)
}
export default Projects;