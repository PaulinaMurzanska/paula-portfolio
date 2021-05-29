import React from "react";
import "./About.scss";
import "../Skills/Skills.scss";
import {Container} from "reactstrap";
import {ROUTE_SKILLS} from "Constants/Routes";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import ButtonParallel from "components/SharedComponents/ButtonParallel";

const About = () => {
    const text = "onClick={clickHereToOpen}";
    const pageVariants = {
        initial: {
            opacity: 0,
            y: "-100vh"
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
        stiffness: 100,
    };


    return (
        <React.Fragment>

            <motion.div
                className='about-page'
                exit="out" animate="in"
                initial="initial"
                transition={pageTransition}
                variants={pageVariants}
            >


                <Container className='container-about'>


                    <div className="about-text">


                        <div className='about-inner-container-text '>
                            <span>&lt;h1&gt; Hello Visitor! &lt;/h1&gt;</span>
                            <h1>So I’m a developer...</h1>
                            <hr/>
                            <p>
                                I'm a Junior Frontend Developer based in Krakow with some Backend coding experience.
                            </p>
                            <p> I have recently completed a full stack developer bootcamp at Codebrainers Bootcamp where
                                I’ve learned Backend and Frontend development technologies. But most of my current
                                skills come from hundreds of hours of my daily work. I constantly learn and work on new
                                projects that increase my knowledge and skills every day.
                            </p>
                            <p>
                                All the content that you will see on this website is a result of nine months of intense learning.
                            </p>
                            <p>
                               I want to further develop my skills in Front End. Currently, I'm mostly focused on React SPA for desktop and mobile applications. </p>

                            <p> A few words about my skills.</p>
                            <Link to={ROUTE_SKILLS}>
                                {/*<span className='clickable'>{text}</span>*/}
                                <ButtonParallel
                                    buttonText="show skills"
                                />
                            </Link>
                        </div>
                    </div>

                </Container>
            </motion.div>
        </React.Fragment>
    )
}
export default About;



