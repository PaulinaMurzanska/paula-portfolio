import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutHtml, htmlDisclaimer} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_SKILLS} from "Constants/Routes";
import htmlLogo from "../../images/html.png";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";
import HtmlSingleProject from "components/Technologies/HtmlSingleProject";
import alex from '../../images/alexsmith.png';
import winter from "../../images/winterscreen.png";
import pofo2 from '../../images/pofo2screen.png';
import pofo1 from '../../images/pofoFirst.png';
import {motion} from "framer-motion";
import ScrollToTop from "react-scroll-to-top";


const Html = () => {
    const pageVariants = {
        initial: {
            opacity: 0,

            y: "-100vw"
        },
        in: {
            opacity: 1,

            y: 0
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
                                <img src={htmlLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutHtml}
                                content={htmlDisclaimer}
                                list={[]}
                            />
                            <div className='projects-wrapper'>
                                <HtmlSingleProject
                                    fontStyles={{
                                        fontSize: "1.5rem",
                                        fontFamily: "Oxygen, sans-serif",
                                        color: "#ff724c",
                                        fontWeight: "700"
                                    }}
                                    linkStyles={{
                                        fontSize: "1rem",
                                        fontFamily: "Oxygen, sans-serif",
                                        fontWeight: "700"
                                    }}

                                    backgroundImage={alex}
                                    siteTitle="alex smith"
                                    myLink="https://alexresumesite.netlify.app/"
                                    originalLink="#"
                                    githubLink="https://github.com/PaulinaMurzanska/Alex-Smith-Cv-project.git"
                                />
                                <HtmlSingleProject
                                    fontStyles={{
                                        fontSize: "1.5rem",
                                        fontFamily: "Montserrat",
                                        color: "rgba(5,5,5,0.77)",
                                        fontWeight: "700"
                                    }}
                                    linkStyles={{
                                        fontSize: "1rem",
                                        fontFamily: "Oxygen, sans-serif",
                                        fontWeight: "700"
                                    }}

                                    backgroundImage={winter}
                                    siteTitle="Winter Photographer"
                                    myLink="https://winterphotography.netlify.app/"
                                    originalLink='https://www.site123.com/templates/preview/1223613?aff=248686&sid=wbtemplates'
                                    githubLink="https://github.com/PaulinaMurzanska/Winter-Photography.git"
                                />
                                <HtmlSingleProject
                                    fontStyles={{
                                        fontSize: "1.5rem",
                                        fontFamily: "Roboto",
                                        color: "#ffffff",
                                        fontWeight: "700"
                                    }}
                                    linkStyles={{
                                        fontSize: "1rem",
                                        fontFamily: "Oxygen, sans-serif",
                                        fontWeight: "700"
                                    }}

                                    backgroundImage={pofo2}
                                    siteTitle="POFO carousel"
                                    myLink="https://pofo-carousel.netlify.app/"
                                    originalLink='http://www.themezaa.com/html/pofo/home-portfolio-multiple-carousel.html'
                                    githubLink="https://github.com/PaulinaMurzanska/POFO2-project.git"
                                />
                                <HtmlSingleProject
                                    fontStyles={{
                                        fontSize: "1.5rem",
                                        fontFamily: "Roboto",
                                        color: "rgba(5,5,5,0.77)",
                                        fontWeight: "700"
                                    }}
                                    linkStyles={{
                                        fontSize: "1rem",
                                        fontFamily: "Oxygen, sans-serif",
                                        fontWeight: "700"
                                    }}

                                    backgroundImage={pofo1}
                                    siteTitle="POFO first project"
                                    myLink="https://pofo-first.netlify.app/"
                                    originalLink='http://www.themezaa.com/html/pofo/home-classic-digital-agency.html'
                                    githubLink="https://github.com/PaulinaMurzanska/Pofo1.git"
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
export default Html;