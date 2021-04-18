import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutJavaScript, jsList} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_BUDGET, ROUTE_PLANTATION, ROUTE_REACT} from "Constants/Routes";
import reactLogo from "../../images/js.png";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";

const JavaScript = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='react-logo'>
                                <img src={reactLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutJavaScript}
                                content=""
                                list={jsList}
                            />
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
export default JavaScript;