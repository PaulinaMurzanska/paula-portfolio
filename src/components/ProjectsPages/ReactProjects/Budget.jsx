import React from 'react';
import 'scss/pageContainer.scss';
import './Budget.scss';
import demoImage from "../../../images/budgetdemo.png";
import {GoMarkGithub} from "react-icons/go";
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {ROUTE_REACT} from "Constants/Routes";
import ScrollToTop from "react-scroll-to-top";
import {motion} from "framer-motion";
import ButtonParallel from "components/SharedComponents/ButtonParallel";


const Budget = () => {

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
                                    <h2>Home Budget</h2>
                                    <p>This application is designed to manage a home budget. Users can create, edit and
                                        delete expenses, incomes and categories. It includes functions such as sorting
                                        or filtering available data. Data records are displayed on sortable tables and
                                        charts.
                                    </p>
                                    <p>
                                        The app is based on the external Django Restful API that I wrote. React app in
                                        combination with DRF allows creating new users.
                                    </p>
                                    <p>
                                        While working on this project, I was trying to predict the errors that could
                                        occur and implement solutions for scenarios other than "happy path". Data
                                        fetching is delayed in purpose to show the loaders behavior. The app is
                                        responsive to desktop and mobile devices.
                                    </p>
                                    <p>
                                        I have designed this app from scratch. Some of the solutions that I used were
                                        based on knowledge gained during the recently completed bootcamp.
                                    </p>
                                    <span>To check the user’s side version of the app, you can use login details
                                        provided in the demo image for an existing user or you can create a new user
                                        following the instruction displayed after visiting the site.
                                     </span>
                                    <span> The source code of
                                        the application is available on my GitHub.</span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/budget.git"
                                           target="_blank">
                                            <ButtonParallel buttonText="GitHub"/>
                                        </a>
                                    </div>
                                </div>
                                <div className='demo-image'>
                                    <a href='https://home-budget.netlify.app/' target="_blank">
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
export default Budget;