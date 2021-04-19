import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutSass} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT} from "Constants/Routes";
import sassLogo from "../../images/sass.png";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";

const Sass = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='react-logo'>
                                <img src={sassLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutSass}
                                content=""
                                list={[]}
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
export default Sass;