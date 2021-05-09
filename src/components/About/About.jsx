import React from "react";
import "./About.scss";
import "../Skills/Skills.scss";
import {Container} from "reactstrap";
import {ROUTE_SKILLS} from "Constants/Routes";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

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
                            <h1>I'm junior skilled Front End developer,
                                dreaming to explore and master the World of Codes...</h1>
                            <hr/>
                            <p>
                                I'm currently based in Krakow junior Front End developer with
                                a little bit of Back End coding experience.
                            </p>
                            <p> Even though for many years my
                                professional life has been connected to hospitality business,
                                HR and properties management, I'm very exited to start new career
                                in IT.
                            </p>
                            <p>
                                It's time for change! Someone told me once, that to become a good developer you
                                need
                                to
                                make
                                coding become your passion. It worked that way for me! Damn, it requires a lot
                                of
                                digging,
                                reading,
                                searching, failing to finally find the solutions for problems, that actually
                                work...what a great satisfaction that is!
                            </p>
                            <p>
                                I had finished a full stack developer bootcamp, where I had learned technologies
                                from
                                back
                                end
                                as well as front end development.
                                I know now, that I want to develop my skills within front end . Currently I'm
                                mostly
                                focused
                                on React SPA for desktop and mobiles app. </p>

                            <p> So what actually are my skills?</p>
                            <Link to={ROUTE_SKILLS}>
                                 <span className='clickable'>{text}</span>
                            </Link>
                        </div>
                    </div>

                </Container>
            </motion.div>
        </React.Fragment>
    )
}
export default About;



