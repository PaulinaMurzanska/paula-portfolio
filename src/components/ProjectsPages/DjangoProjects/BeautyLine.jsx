import React from 'react';
import 'scss/pageContainer.scss';
// import './Budget.scss';
import demoImage from "../../../images/loginscreen.png";
import {GoMarkGithub} from "react-icons/go";
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {ROUTE_DJANGO, ROUTE_REACT} from "Constants/Routes";
import ScrollToTop from "react-scroll-to-top";
import {motion} from "framer-motion";


const BeautyLine = ({path}) => {
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
                                    <h2>Beauty line - reservation system</h2>
                                    <p>This application works as a reservation system that can be used in any website.
                                        In this particular
                                        case, it is dedicated for a beauty studio, but this is only matter of styling.
                                        The code beneath gives possibility to use it
                                        across many businesses that could benefit from that kind of booking system.
                                    </p>
                                    <p>
                                        The App is a working solution for making reservation for specific date, specific
                                        service and for specific employee. After making
                                        reservation, user receive an unique code as a confirmation that booking process
                                        went successfully. Reservation is automatically
                                        placed in selected for chosen service, employee calendar. As the app has also an
                                        employee site.
                                    </p>
                                    <p>
                                        Employee, is added to the system by admin. After signing in to his account,
                                        employee can see all upcoming appointments
                                        that have been made for his name. Admin can see all reservations.
                                    </p>
                                    <p>
                                        The Django code solutions are a teamwork effect. All the visual effects are 100%
                                        my development. The app was about the calendar,
                                        the welcome site and navigation are just simple frames just I had a place to put
                                        the reservation system to.
                                    </p>
                                    <span> To see how the system works, please go to the website, make several reservations for different services and
                                        different employees. When you do that, please log in to the employee account using credentials given in the demo image aside.
                                        There are 3 different users accounts, use any of the following names as a username: Meg, Kate, Eva. Password for all remains the same.
                                     </span>
                                    <span>The  Source code of the application is available on my <GoMarkGithub/></span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/Salon_kosmetyczny_heroku_version.git"
                                           target="_blank">{text}</a>
                                    </div>
                                </div>
                                <div className='demo-image'>
                                    <a href='https://secure-stream-31807.herokuapp.com/' target="_blank">
                                        <div className="demo-image-wrapper">
                                            <img src={demoImage}/>
                                        </div>
                                    </a>

                                </div>
                                <div className="ex">
                                    <Link to={ROUTE_DJANGO}>
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
export default BeautyLine;