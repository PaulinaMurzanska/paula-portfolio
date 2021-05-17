import React from 'react';
import 'scss/pageContainer.scss';
import './Budget.scss';
import demoImage from "../../../images/plantationDemo.png";
import {GoMarkGithub} from "react-icons/go";
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {ROUTE_REACT} from "Constants/Routes";
import ScrollToTop from "react-scroll-to-top";
import {motion} from "framer-motion";


const Plantation = ({path}) => {
    const text = "onClick={clickHereToOpenGithub}";

    return (
        <React.Fragment>
            <ScrollToTop smooth color="rgba(231, 130, 0, 0.91)"
                         style={{
                             right: "2px",
                             bottom: "30px",
                             backgroundColor: "rgba(41, 36, 66, 0.95)"
                         }}/>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='description'>
                                <div className="description-text">
                                    <h2>Plantation</h2>
                                    <p>This was my first React App, that I had created as my final project of the
                                        Codebrainers Bootcamp.
                                        It contains functionalities like data fetching from external DRF API, sorting,
                                        filtering and mapping.
                                        The purpose of building this sort of app, was to practice features that React
                                        has to offer.
                                    </p>
                                    <p>
                                        Data source comes from written by myself during the course Django Restful API.
                                        This App gives user possibility
                                        to add new items, update and remove them.
                                    </p>
                                    <p>
                                        The App is designed to manage user's plant that he has at home based on default
                                        types of plants.
                                        User can customize names, requirements and pictures. For this app user
                                        registration function
                                        has not been implemented.
                                    </p>
                                    <span>To check the client side version of the app, please use given in demo image
                                        login details for existing user.
                                     </span>
                                    <span>The  Source code of the application is available on my <GoMarkGithub/></span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/plantation.git"
                                           target="_blank">{text}</a>
                                    </div>
                                </div>
                                <div className='demo-image'>
                                    <a href='https://plantation-display.netlify.app/' target="_blank">
                                        <div className="demo-image-wrapper">
                                            <img src={demoImage}/>
                                        </div>
                                    </a>

                                </div>
                                <div className="ex">
                                    <Link to={ROUTE_REACT}>
                                        <ImCross/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Plantation;