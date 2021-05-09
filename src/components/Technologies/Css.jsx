import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutCss} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_SKILLS} from "Constants/Routes";
import cssLogo from "../../images/css.png";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";

const Css = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='details-logo'>
                                <img src={cssLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutCss}
                                content=""
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
            </div>
        </React.Fragment>
    )
}
export default Css;