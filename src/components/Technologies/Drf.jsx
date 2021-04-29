import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutDrfSecond, aboutDRF, drfList,} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT} from "Constants/Routes";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";
import drfLogo from '../../images/drf icon.png';
import plantation from "../../images/Plantation-Logo-layout-1.jpg";
import budget from '../../images/homebudgetlogo.png';
import plantationLogin from '../../images/PlantationLoginScreen.png';
import budgetLogin from '../../images/budgetLoginScreen.png';
import DrfSingleProjectCard from "components/Technologies/DrfSingleProjectCard";


const Drf = () => {
    return (
        <React.Fragment>
            <div className="pages">
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
                                {/*  <HtmlSingleProject*/}
                                {/*    fontStyles={{*/}
                                {/*        fontSize: "1.5rem",*/}
                                {/*        fontFamily: "Montserrat",*/}
                                {/*        color: "rgba(5,5,5,0.77)",*/}
                                {/*        fontWeight: "700"*/}
                                {/*    }}*/}
                                {/*    linkStyles={{*/}
                                {/*        fontSize: "1rem",*/}
                                {/*        fontFamily: "Oxygen, sans-serif",*/}
                                {/*        fontWeight: "700"*/}
                                {/*    }}*/}

                                {/*    backgroundImage={plantation}*/}
                                {/*    siteTitle="Home budget"*/}
                                {/*    myLink="https://fast-dawn-10983.herokuapp.com/"*/}
                                {/*    originalLink='https://www.site123.com/templates/preview/1223613?aff=248686&sid=wbtemplates'*/}
                                {/*    githubLink="https://github.com/PaulinaMurzanska/BudgetDRF"*/}
                                {/*/>*/}

                            </div>
                            <div className="ex">
                                <Link to={ROUTE_ABOUT}>
                                    <ImCross/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Drf;