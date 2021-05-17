import React, {useState} from "react";
import SkillsSmall from "components/Skills/Sklills";
// import "./About.scss";
import './SkillsCard.scss';
import "../../scss/pageContainer.scss";
import react from "images/react.png";
import {
    ROUTE_ABOUT, ROUTE_ABOUT_SKILLS,
    ROUTE_CSS,
    ROUTE_DJANGO,
    ROUTE_DRF, ROUTE_EDITOR, ROUTE_GIT,
    ROUTE_HTML,
    ROUTE_JS,
    ROUTE_PYTHON,
    ROUTE_REACT,
    ROUTE_SASS, ROUTE_SKILLS
} from "Constants/Routes";
import js from "images/js.png";
import sass from "images/sass.png";
import html from "images/html.png";
import django from "images/django.png";
import drf from "images/djangorest.png";
import python from "images/python.png";
import css from "images/css.png";
import git from "images/git2.svg";
import pycharm from "images/Pycharm-01.png";
import visual from "images/Visual-studio-code-02.png";
import ubuntu from "images/Ubuntu-03.png";
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion/dist/framer-motion";
import ScrollToTop from "react-scroll-to-top";


const Skills = () => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 0
        },
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: 0
        },
    };
    const pageTransition = {
        duration: .6,
        stiffness: 0,
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
                exit="out"
                animate="in"
                initial="initial"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='projects-wrapper'>
                                <AnimatePresence>


                                    <SkillsSmall icon={react}
                                                 path={ROUTE_REACT}
                                    />

                                    <SkillsSmall icon={js}
                                                 path={ROUTE_JS}

                                    />
                                    <SkillsSmall icon={sass}
                                                 path={ROUTE_SASS}

                                    />
                                    <SkillsSmall icon={html}
                                                 path={ROUTE_HTML}

                                    />
                                    <SkillsSmall icon={django}
                                                 path={ROUTE_DJANGO}
                                    />
                                    <SkillsSmall icon={drf}
                                                 path={ROUTE_DRF}
                                    />
                                    <SkillsSmall icon={python}
                                                 path={ROUTE_PYTHON}
                                    />
                                    <SkillsSmall icon={css}
                                                 path={ROUTE_CSS}
                                    />
                                    <SkillsSmall icon={git}
                                                 path={ROUTE_GIT}
                                    />
                                    <SkillsSmall icon={pycharm}
                                                 path={ROUTE_EDITOR}
                                    />
                                    <SkillsSmall icon={visual}
                                                 path={ROUTE_EDITOR}
                                    />
                                    <SkillsSmall icon={ubuntu}
                                                 path={ROUTE_EDITOR}
                                    />
                                </AnimatePresence>


                                <div className="ex">
                                    <Link to={ROUTE_ABOUT_SKILLS}>
                                        <ImCross/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>




        // <div
        //     className="skills"
        //
        // >
        //     <div className='about-inner-container-skills'>
        //         <SkillsSmall icon={react}
        //                      path={ROUTE_REACT}
        //         />
        //         <SkillsSmall icon={js}
        //                      path={ROUTE_JS}
        //
        //         />
        //         <SkillsSmall icon={sass}
        //                      path={ROUTE_SASS}
        //
        //         />
        //         <SkillsSmall icon={html}
        //                      path={ROUTE_HTML}
        //
        //         />
        //         <SkillsSmall icon={django}
        //                      path={ROUTE_DJANGO}
        //         />
        //         <SkillsSmall icon={drf}
        //                      path={ROUTE_DRF}
        //         />
        //         <SkillsSmall icon={python}
        //                      path={ROUTE_PYTHON}
        //         />
        //         <SkillsSmall icon={css}
        //                      path={ROUTE_CSS}
        //         />
        //         <SkillsSmall icon={git}
        //                      path={ROUTE_GIT}
        //         />
        //         <SkillsSmall icon={pycharm}
        //                      path={ROUTE_EDITOR}
        //         />
        //         <SkillsSmall icon={visual}
        //                      path={ROUTE_EDITOR}
        //         />
        //         <SkillsSmall icon={ubuntu}
        //                      path={ROUTE_EDITOR}
        //         />
        //         <div className="ex">
        //             <ImCross
        //             />
        //         </div>
        //     </div>
        //
        //
        // </div>
    )
}
export default Skills;