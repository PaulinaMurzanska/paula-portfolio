import React from "react";
import '../../scss/pageContainer.scss';
import SchoolBlock from "components/Education/SchoolBlock";
import zulian from '../../images/zul.jpg';
import yarden from "../../images/yard.jpg";
import daniel from "../../images/daniel.jpg";
import {bbList, yardenList, zulList} from "Constants/Descriptions";
import {motion} from "framer-motion";
import ScrollToTop from "react-scroll-to-top";

const Work = () => {
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
            y: "100vh"
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
                exit="out" animate="in"
                initial="initial"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container education">
                            <div className="education-site-wrapper">
                                <SchoolBlock
                                    imageUlr={zulian}
                                    schoolName="Zulian Aparthotel"
                                    reversed={true}
                                    schoolNameText="Apartments Group"
                                    degree1="Hotel manager | April 2021 - Present"
                                    subject1='Zulian Aparthotel'
                                    degree2=""
                                    subject2=''
                                    additionalClass=""
                                    workList={zulList}

                                />
                                <SchoolBlock
                                    imageUlr={yarden}
                                    schoolName="Yarden Hotel"
                                    reversed={false}
                                    schoolNameText="Apartments Group"
                                    schoolNameText2=""
                                    degree1="Hotel manager | 2013 - Present"
                                    subject1='Yarden Hotel'
                                    degree2=""
                                    subject2=''
                                    additionalClass=""
                                    workList={yardenList}

                                />
                                <SchoolBlock
                                    imageUlr={daniel}
                                    schoolName="Blue Bells Apartments"
                                    reversed={true}
                                    schoolNameText="Apartments Group"
                                    schoolNameText2=""
                                    degree1="Apartments manager | 2010 - 2013"
                                    subject1='Blue Bells Apartments'
                                    degree2=""
                                    subject2=''
                                    additionalClass=""
                                    workList={bbList}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
export default Work;