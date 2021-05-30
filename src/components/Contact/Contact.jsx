import React from 'react';
import './Contact.scss';
import '../../scss/pageContainer.scss';
import {motion} from "framer-motion";
import {GoMarkGithub} from "react-icons/go";
import {FaPhone} from "react-icons/fa";
import {AiTwotoneMail} from "react-icons/ai";

const Contact = () => {

    const pageVariants = {
        initial: {
            opacity: 0,
            x: 0
        },
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 0
        },
    };
    const pageTransition = {
        duration: .6,
        stiffness: 0,
    };

    return (
        <React.Fragment>
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
                            <div className="details">
                                <h2>Paulina Murzańska</h2>
                                <h3> - junior frontend developer - </h3>

                                <h4><FaPhone style={{marginRight: "10px"}}/><a href="tel:0048-514-132-314"
                                                                               target="_blank">+48 514-132-314</a></h4>
                                <h4><AiTwotoneMail style={{marginRight: "10px"}}/> <a
                                    href="mailto:p.murzanska@gmail.com"
                                    target="_blank">p.murzanska@gmail.com</a>
                                </h4>
                                <h4>
                                    <a href="https://paulinamurzanska.eu/" target='_blank'>www.paulinamurzanska.eu</a>
                                </h4>
                                <h4>
                                    <GoMarkGithub style={{marginRight: "15px"}}/>
                                    <a href="https://github.com/PaulinaMurzanska" target="_blank">GitHub</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>

    )
}
export default Contact;