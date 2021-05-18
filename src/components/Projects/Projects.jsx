import React from 'react';
import 'scss/pageContainer.scss';
import {ROUTE_BEAUTYLINE, ROUTE_BLOG, ROUTE_BUDGET, ROUTE_PLANTATION, ROUTE_PROJECTS} from "Constants/Routes";
import "../Technologies/React.scss"
// import "../About/About.scss";
import ProjectSiteItem from "components/Projects/ProjectSiteItrem";
import reactLogo from '../../images/reactjs-ar21.svg';
import budgetUrl from '../../images/budgetscreen.png';
import plantationUrl from "../../images/plantationscreen.png";
import htmlLogo from '../../images/html.png';
import alex from "../../images/alexsmith.png";
import winter from '../../images/winterscreen.png';
import pofo2 from '../../images/pofo2screen.png';
import pofo1 from "../../images/pofoFirst.png";
import beautyLine from '../../images/beautylinescreen.png';
import blog from "../../images/blogscreen.png";
import django from '../../images/django.png';
import drf from '../../images/djangorest.png';
import budgetApi from '../../images/budgetApiScreen.png';
import plantsApi from '../../images/plantsApiScreen.png';
import {motion, AnimatePresence} from "framer-motion/dist/framer-motion";
import ScrollToTop from "react-scroll-to-top";


const Projects = () => {
    const text = "onClick={clickHereToOpenGithub}";
    const pageVariants = {
        initial: {
            opacity: 0,
            y: "-100vh",
            x: "100vw"
        },
        in: {
            opacity: 1,
            y: 0,
            x: 0
        },
        out: {
            opacity: 0,
            y: "100vh"
        },
    };
    const pageTransition = {
        duration: 0.4,
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
                variants={pageVariants}
                exit="out"
                animate="in"
                initial="initial"
                transition={pageTransition}
            >

                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">


                            <div className='description'>
                                <div className="description-text">
                                    <h2>My training projects</h2>
                                    <AnimatePresence>
                                        <div className='projects-wrapper'>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .2}}
                                            >

                                                <ProjectSiteItem
                                                    rotate="360"
                                                    transition="duration: 2"
                                                    delay="{delay:3}"
                                                    techLogo={reactLogo}
                                                    url={budgetUrl}
                                                    siteTitle="Home Budget"
                                                    siteUrl={ROUTE_BUDGET}
                                                    linkType="linkReact"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .3}}
                                            >
                                                <ProjectSiteItem
                                                    techLogo={reactLogo}
                                                    url={plantationUrl}
                                                    siteTitle="Plantation"
                                                    siteUrl={ROUTE_PLANTATION}
                                                    linkType="linkReact"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .4}}
                                            >

                                                <ProjectSiteItem
                                                    techLogo={htmlLogo}
                                                    url={alex}
                                                    siteTitle="Alex Smith"
                                                    siteUrl="https://alexresumesite.netlify.app/"
                                                    linkType="linkHref"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .5}}
                                            >


                                                <ProjectSiteItem
                                                    techLogo={htmlLogo}
                                                    url={winter}
                                                    siteTitle="Winter"
                                                    siteUrl="https://winterphotography.netlify.app/"
                                                    linkType="linkHref"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .6}}
                                            >

                                                <ProjectSiteItem
                                                    techLogo={htmlLogo}
                                                    url={pofo1}
                                                    siteTitle="POFO"
                                                    siteUrl="https://pofo-first.netlify.app/"
                                                    linkType="linkHref"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .7}}
                                            >
                                                <ProjectSiteItem
                                                    techLogo={htmlLogo}
                                                    url={pofo2}
                                                    siteTitle="POFO Corousel"
                                                    siteUrl="https://pofo-carousel.netlify.app/"
                                                    linkType="linkHref"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .8}}
                                            >

                                                <ProjectSiteItem
                                                    techLogo={django}
                                                    url={beautyLine}
                                                    siteTitle="Reservation system"
                                                    siteUrl={ROUTE_BEAUTYLINE}
                                                    linkType="linkReact"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: .9}}
                                            >
                                                <ProjectSiteItem
                                                    techLogo={django}
                                                    url={blog}
                                                    siteTitle="Blog"
                                                    siteUrl={ROUTE_BLOG}
                                                    linkType="linkReact"
                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: 1}}
                                            >
                                                <ProjectSiteItem
                                                    techLogo={drf}
                                                    url={budgetApi}
                                                    siteTitle="Budget API"
                                                    siteUrl="https://fast-dawn-10983.herokuapp.com/"
                                                    linkType="linkHref"

                                                />
                                            </motion.div>
                                            <motion.div
                                                variants={pageVariants}
                                                exit="out"
                                                animate="in"
                                                initial="initial"
                                                transition={{duration: .5, delay: 1.1}}
                                            >
                                                <ProjectSiteItem
                                                    techLogo={drf}
                                                    url={plantsApi}
                                                    siteTitle="Plantation API"
                                                    siteUrl="https://still-fortress-69660.herokuapp.com/"
                                                    linkType="linkHref"
                                                />
                                            </motion.div>
                                        </div>
                                    </AnimatePresence>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska"
                                           target="_blank">{text}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
export default Projects;