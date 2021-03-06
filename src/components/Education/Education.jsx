import React from "react";
import '../../scss/pageContainer.scss';
import SchoolBlock from "components/Education/SchoolBlock";
import uek from '../../images/ueknew.jpg';
import codeb from "../../images/logoCB.png";
import lo from "../../images/lo.jpeg";
import {motion} from "framer-motion";
import ScrollToTop from "react-scroll-to-top";

const Education = () => {
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
            x: "100vw"
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
                                    imageUlr={codeb}
                                    schoolName=""
                                    reversed={true}
                                    schoolNameText="CodeBrainers Bootcamp"
                                    degree1="Fullstack Developer | 2020 - 2021"
                                    subject1=''
                                    degree2=""
                                    subject2=''
                                    additionalClass="codebr"
                                    workList={[]}

                                />
                                <SchoolBlock
                                    imageUlr={uek}
                                    schoolName="Cracow University of Economics"
                                    reversed={false}
                                    schoolNameText="Cracow University of Economics"
                                    schoolNameText2="Cracow University of Economics"
                                    degree1="Master of Economics | 2010 - 2013"
                                    subject1='Specialization: HR Management and Consulting'
                                    degree2="Bachelor of Economics | 2006 - 2010"
                                    subject2='Specialization: International Economic Relations'
                                    additionalClass=""
                                    workList={[]}


                                />
                                <SchoolBlock
                                    imageUlr={lo}
                                    schoolName="I LO im. T.Ko??ciuszki in My??lenice"
                                    reversed={true}
                                    schoolNameText="I LO im. T.Ko??ciuszki in My??lenice"
                                    schoolNameText2=""
                                    degree1="Math - Phys profile class | 2003 - 2006"
                                    subject1=''
                                    degree2=""
                                    subject2=''
                                    additionalClass=""
                                    workList={[]}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    )
}
export default Education;