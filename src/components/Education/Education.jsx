import React from "react";
import '../../scss/pageContainer.scss';
import {ROUTE_ABOUT} from "Constants/Routes";
import {Link} from "react-router-dom";
import {ImCross} from "react-icons/im";

const Education = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <p>education</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Education;