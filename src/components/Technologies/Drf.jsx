import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutDrfSecond, aboutDRF, drfList,} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_SKILLS} from "Constants/Routes";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";
import drfLogo from '../../images/drf icon.png';
import plantation from "../../images/Plantation-Logo-layout-1.jpg";
import budget from '../../images/homebudgetlogo.png';
import plantationLogin from '../../images/PlantationLoginScreen.png';
import budgetLogin from '../../images/budgetLoginScreen.png';
import DrfSingleProjectCard from "components/Technologies/DrfSingleProjectCard";
import{motion} from "framer-motion";


const Drf = () => {
    const pageVariants = {
        initial: {
            opacity: 0,

            x: "100vw",

        },
        in: {
            opacity: 1,

            x: 0,

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
                                <img src={drfLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutDRF}
                                content={aboutDrfSecond}
                                list={drfList}
                            />
                            <div className='projects-wrapper'>
                                <DrfSingleProjectCard
                                    login={plantation}
                                    drfScreen={plantationLogin}
                                    drfUrl="https://still-fortress-69660.herokuapp.com/"
                                    drfGithub="https://github.com/PaulinaMurzanska/PlantationDRF"

                                />
                                <DrfSingleProjectCard
                                    login={budget}
                                    drfScreen={budgetLogin}
                                    drfUrl='https://fast-dawn-10983.herokuapp.com/'
                                    drfGithub="https://github.com/PaulinaMurzanska/BudgetDRF"

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
export default Drf;