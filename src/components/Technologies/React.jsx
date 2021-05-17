import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutReact, reactList, aboutReactSecond} from "Constants/Descriptions";
import plantationLogo from "../../images/Plantation-Logo-layout-1.jpg";
import plantationScreen from "../../images/plantationscreen.png";
import budgetLogo from "../../images/homebudgetlogo.png";
import budgetScreen from "../../images/budgetscreen.png";
import ProjectItem, {ProjectItemPortfolio} from "components/Skills/ProjectItem";
import portfolioTheme from '../../images/milad-b-fakurian-2sICkGsJRQY-unsplash.jpg';
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_BUDGET, ROUTE_PLANTATION, ROUTE_REACT, ROUTE_SKILLS} from "Constants/Routes";
import reactLogo from "../../images/reactjs-ar21.svg";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";
import {motion} from "framer-motion";
import ScrollToTop from "react-scroll-to-top";


const AboutReact = () => {
    const pageVariants = {
        initial: {
            opacity: 0,

            x: "-100vw"
        },
        in: {
            opacity: 1,

            x: 0
        },
        out: {
            opacity: 0,
            y: "100vh"
        },
    };
    const pageTransition = {
        duration: 0.4,
        stiffness: 100,
    };

    return (
        <React.Fragment>
            <ScrollToTop smooth color="rgba(231, 130, 0, 0.91)"
                         style={{
                             right: "2px",
                             bottom: "30px",
                             backgroundColor: "rgba(41, 36, 66, 0.95)"
                         }}/>
            <motion.div
                className="pages"
                variants={pageVariants}
                exit="out"
                animate="in"
                initial="initial"
                transition={pageTransition}
            >
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='details-logo'>
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
                                <ProjectItemPortfolio
                                    title='My Portfolio Site'
                                    projectScreen={portfolioTheme}
                                    path={ROUTE_ABOUT}

                                />
                            </div>
                            <div className="ex">
                                <Link to={ROUTE_SKILLS}>
                                    <ImCross/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
export default AboutReact;