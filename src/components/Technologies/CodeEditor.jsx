import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutEditors, aboutEditorsSecond, aboutGit} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_SKILLS} from "Constants/Routes";
import pycharmLogo from "../../images/Pycharm-01.png";
import visual from "../../images/Visual-studio-code-02.png";
import ubuntu from '../../images/Ubuntu-03.png';
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";
import {motion} from "framer-motion";


const CodeEditor = () => {
    const pageVariants = {
        initial: {
            opacity: 0,

            x: "-100vw"
        },
        in: {
            opacity: 1,

            x: 0
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
                                <img className="editors-logos" src={visual} />
                                <img className="editors-logos" src={pycharmLogo}/>
                                <img className="editors-logos" src={ubuntu}/>
                            </div>
                            <SkillDetail
                                intro={aboutEditors}
                                content={aboutEditorsSecond}
                                list={[]}
                            />
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
export default CodeEditor;