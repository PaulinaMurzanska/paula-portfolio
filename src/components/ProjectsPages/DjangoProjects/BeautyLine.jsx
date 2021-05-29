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
import ButtonParallel from "components/SharedComponents/ButtonParallel";


const BeautyLine = ({path}) => {

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
                                    <p>This application is a reservation system that can be applied to any website. In
                                        this particular case, it works as a beauty studio, but this is only a matter of
                                        styling. The code beneath gives a possibility to use it across many other
                                        businesses.
                                    </p>
                                    <p>
                                        The app is a working solution for making a reservation for a specific date,
                                        specific service and a specific employee. After placing a booking, the user
                                        receives a unique code confirming that it’s been completed successfully.
                                        Reservation is automatically placed in the calendar of the employee picked for a
                                        selected service as the app includes an employee webpage as well.
                                    </p>
                                    <p>
                                        Employees are added to the system by the admin. After logging in, an employee
                                        can see all the upcoming appointments that have been booked under his name. The
                                        admin has access to all reservations.
                                    </p>
                                    <p>
                                        The Django code solutions is a result of teamwork. All visuals are entirely my
                                        work. The main aim of creating this app was the calendar, while the welcome page
                                        and navigation work simply as frames in which I placed the reservation system.
                                    </p>
                                    <span> To see how the system works, please go to the website and make several
                                        reservations for different services and different employees. When you do that,
                                        please log in to the employee account using credentials given in the demo image
                                        on the side. You will find three different user accounts. You can use any of
                                        the following names as a username: Meg, Kate, Eva. The password for all is
                                        the same.
                                     </span>
                                    <span>The  Source code of the application is available on my GitHub.sssss</span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/Salon_kosmetyczny_heroku_version.git"
                                           target="_blank">
                                            <ButtonParallel buttonText="GitHub"/>
                                        </a>
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