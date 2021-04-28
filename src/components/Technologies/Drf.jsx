import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutDjango, aboutDjangoSecond, djangoList,} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT} from "Constants/Routes";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";
import drfLogo from '../../images/drf icon.png';
import HtmlSingleProject from "components/Technologies/HtmlSingleProject";
import winter from "images/winterscreen.png";


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
                                intro={aboutDjango}
                                content={aboutDjangoSecond}
                                list={djangoList}
                            />
                            <div className='projects-wrapper'>
                                  <HtmlSingleProject
                                    fontStyles={{
                                        fontSize: "1.5rem",
                                        fontFamily: "Montserrat",
                                        color: "rgba(5,5,5,0.77)",
                                        fontWeight: "700"
                                    }}
                                    linkStyles={{
                                        fontSize: "1rem",
                                        fontFamily: "Oxygen, sans-serif",
                                        fontWeight: "700"
                                    }}

                                    backgroundImage={winter}
                                    siteTitle="Home budget"
                                    myLink="https://fast-dawn-10983.herokuapp.com/"
                                    originalLink='https://www.site123.com/templates/preview/1223613?aff=248686&sid=wbtemplates'
                                    githubLink="https://github.com/PaulinaMurzanska/BudgetDRF"
                                />
                                   <HtmlSingleProject
                                    fontStyles={{
                                        fontSize: "1.5rem",
                                        fontFamily: "Montserrat",
                                        color: "rgba(5,5,5,0.77)",
                                        fontWeight: "700"
                                    }}
                                    linkStyles={{
                                        fontSize: "1rem",
                                        fontFamily: "Oxygen, sans-serif",
                                        fontWeight: "700"
                                    }}

                                    backgroundImage={winter}
                                    siteTitle="Winter Photographer"
                                    myLink="https://still-fortress-69660.herokuapp.com/"
                                    originalLink='https://www.site123.com/templates/preview/1223613?aff=248686&sid=wbtemplates'
                                    githubLink="https://github.com/PaulinaMurzanska/PlantationDRF"
                                />
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