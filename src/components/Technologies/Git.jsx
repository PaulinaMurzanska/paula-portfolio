import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutGit} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT, ROUTE_SKILLS} from "Constants/Routes";
import gitLogo from "../../images/git2.svg";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";


const Git = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='details-logo'>
                                <img src={gitLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutGit}
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
export default Git;