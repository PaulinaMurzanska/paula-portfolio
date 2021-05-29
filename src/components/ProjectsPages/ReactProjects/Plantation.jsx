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
import ButtonParallel from "components/SharedComponents/ButtonParallel";


const Plantation = ({path}) => {

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
                                    <p>This is the first React app that I created as the Codebrainers Bootcamp
                                        completion project. It contains functionalities such as data fetching from
                                        external DRF API, sorting, filtering and mapping. The purpose of building this
                                        app was to practice the React features.
                                    </p>
                                    <p>
                                        Data source comes from Django Restful API which I wrote during the course. This
                                        App gives a user the possibility to add new items, update and remove them.
                                    </p>
                                    <p>
                                        The App is designed to manage the user's home plants based on default types of
                                        plants. The user can customize names, requirements and pictures. The user
                                        registration function has not been implemented for this app.
                                    </p>
                                    <span>To check the user’s side version of the app, please use login details for an
                                        existing user provided in the demo image.
                                     </span>
                                    <span>The source code of the application is available on my GitHub</span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/plantation.git"
                                           target="_blank">
                                            <ButtonParallel buttonText="GitHub"/>
                                        </a>
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