import React from "react";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutPython, aboutPythonSecond} from "Constants/Descriptions";
import '../../scss/pageContainer.scss';
import './React.scss';
import {ROUTE_ABOUT} from "Constants/Routes";
import pythonLogo from "../../images/python.png";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";

const Python= () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='details-logo'>
                                <img src={pythonLogo}/>
                            </div>
                            <SkillDetail
                                intro={aboutPython}
                                content={aboutPythonSecond}
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
export default Python;
