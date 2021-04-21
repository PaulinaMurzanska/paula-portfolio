import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutReact, reactList, aboutReactSecond} from "Constants/Descriptions";
import plantationLogo from "../../images/Plantation-Logo-layout-1.jpg";
import plantationScreen from "../../images/plantationscreen.png";
import budgetLogo from "../../images/homebudgetlogo.png";
import budgetScreen from "../../images/budgetscreen.png";
import ProjectItem from "components/Skills/ProjectItem";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_BUDGET, ROUTE_PLANTATION, ROUTE_REACT} from "Constants/Routes";
import reactLogo from "../../images/reactjs-ar21.svg";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";

const AboutReact = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='react-logo'>
                                <img src={reactLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutReact}
                                content={aboutReactSecond}
                                list={reactList}
                            />
                            <div className='projects-wrapper'>
                                <ProjectItem
                                    title='Home Budget'
                                    projectLogo={budgetLogo}
                                    projectScreen={budgetScreen}
                                    path={ROUTE_BUDGET}
                                />
                                <ProjectItem
                                    title='Home Plantation'
                                    projectLogo={plantationLogo}
                                    projectScreen={plantationScreen}
                                    path={ROUTE_PLANTATION}

                                />
                                <ProjectItem
                                    title='Home Budget'
                                    projectLogo={""}
                                    projectScreen={""}
                                    path={ROUTE_BUDGET}

                                />
                            </div>
                            <div className="ex">
                                <Link to={ROUTE_ABOUT}>
                                    <ImCross/>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AboutReact;