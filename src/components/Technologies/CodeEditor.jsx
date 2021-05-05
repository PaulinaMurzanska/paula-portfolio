import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutEditors, aboutEditorsSecond, aboutGit} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT} from "Constants/Routes";
import pycharmLogo from "../../images/Pycharm-01.png";
import visual from "../../images/Visual-studio-code-02.png";
import ubuntu from '../../images/Ubuntu-03.png';
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";


const CodeEditor = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='details-logo'>
                                <img src={visual}/>
                                <img src={pycharmLogo}/>
                                <img src={ubuntu}/>
                            </div>
                            <SkillDetail
                                intro={aboutEditors}
                                content={aboutEditorsSecond}
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
export default CodeEditor;