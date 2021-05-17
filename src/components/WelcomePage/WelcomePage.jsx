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
                            I'm junior Front End developer,
                            dreaming to explore and master the World of Codes...
                        </h3>
                    </div>

                    <div className={`text-about ${showText ? "show" : ""}`}>
                        <p> For many years my
                            professional life has been connected to hospitality business,
                            HR and properties management. </p>
                        <p>
                            Even though I have pretty successful career within
                            hotels management I felt I can't develop myself any more and simply needed a change.
                        </p>
                        <p> I searched for activities that would be intellectually challenging for me.
                            And that's how my journey with coding started. Surprisingly, I found myself very drawn to
                            it.
                            Working with code gives me a lot of satisfaction and I'm spending every possible minute to
                            improve my
                            knowledge and skills, to become a professional programmer.</p>

                    </div>
                </div>
            </motion.div>


        </React.Fragment>
    )
}
export default WelcomePage;