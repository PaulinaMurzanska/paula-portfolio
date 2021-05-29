import React, {useState} from 'react';
import './WelcomePage.scss';
import "../../scss/pageContainer.scss";
import {motion} from "framer-motion";
import {BsChevronDoubleDown} from "react-icons/bs"
import ScrollToTop from "react-scroll-to-top";

const WelcomePage = () => {
    const [showText, setShowText] = useState(false);
    // const [hideText, setHideText] = useState(true);

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
                className="welcome"
                exit="out"
                animate="in"
                initial="initial"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div className="intro-welcome slide-from-lef">
                    <div className="header-welcome">
                        <h1>&lt;h1&gt; Hello Visitor! &lt;/h1&gt;</h1>

                    </div>
                    <div className={`chevron-on ${showText ? "open-text" : ""}`}
                         onClick={() => setShowText(true)}
                    >
                        <BsChevronDoubleDown/>
                    </div>
                    <div className={`chevron-off ${showText ? "show-text" : ""}`}
                         onClick={() => setShowText(false)}
                    >
                        <BsChevronDoubleDown/>
                    </div>
                    <div className={`sub-header ${showText ? "show" : ""}`}>
                        <h3>
                            I'm a Junior Frontend Developer wanting to explore and master the World of Codes...
                        </h3>
                    </div>

                    <div className={`text-about ${showText ? "show" : ""}`}>
                        <p> For many years, my professional life has been connected to hospitality, HR and property
                            management. </p>
                        <p>
                            My career has been quite successful, but at some point I realized I couldn’t take it any
                            further and needed a change.
                        </p>
                        <p> I explored various activities that could challenge me intellectually. That’s how my journey
                            with coding began. Surprisingly, I became fascinated with it. Working with codes gives me a
                            lot of satisfaction and these days I spend most of my free time improving my knowledge and
                            skills on my way to becoming a professional programmer. I’m very excited to start a new
                            career in IT. </p>

                    </div>
                </div>
            </motion.div>


        </React.Fragment>
    )
}
export default WelcomePage;