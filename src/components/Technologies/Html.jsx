import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutHtml, htmlDisclaimer} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT} from "Constants/Routes";
import htmlLogo from "../../images/html.png";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";

const Html = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='react-logo'>
                                <img src={htmlLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutHtml}
                                content={htmlDisclaimer}
                                list={[]}
                            />
                            <div className='projects-wrapper'>
                                projects html
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
export default Html;