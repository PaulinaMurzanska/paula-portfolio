import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutDjango, aboutDjangoSecond, djangoList,} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_BEAUTYLINE, ROUTE_BLOG,} from "Constants/Routes";
import djangoLogo from "../../images/django.png";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";
import ProjectItem from "components/Skills/ProjectItem";
import beautyLineLogo from '../../images/beauty-line.svg';
import beautyScreen  from '../../images/beautylinescreen.png';
import blogScreen from '../../images/blogscreen.png';
import blogLogo from '../../images/bloglogo.png';

const Django = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='details-logo'>
                                <img src={djangoLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutDjango}
                                content={aboutDjangoSecond}
                                list={djangoList}
                            />
                            <div className='projects-wrapper'>
                               <ProjectItem
                                    title='Beauty Line'
                                    projectLogo={beautyLineLogo}
                                    projectScreen={beautyScreen}
                                    path={ROUTE_BEAUTYLINE}
                                />
                                 <ProjectItem
                                    title='Enjoy Your Stay'
                                    projectLogo={blogLogo}
                                    projectScreen={blogScreen}
                                    path={ROUTE_BLOG}
                                />
                                {/*<ProjectItem*/}
                                {/*    title='Home Plantation'*/}
                                {/*    projectLogo={plantationLogo}*/}
                                {/*    projectScreen={plantationScreen}*/}
                                {/*    path={ROUTE_PLANTATION}*/}

                                {/*/>*/}
                                {/*<ProjectItem*/}
                                {/*    title='Home Budget'*/}
                                {/*    projectLogo={""}*/}
                                {/*    projectScreen={""}*/}
                                {/*    path={ROUTE_BUDGET}*/}

                                {/*/>*/}



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
export default Django;