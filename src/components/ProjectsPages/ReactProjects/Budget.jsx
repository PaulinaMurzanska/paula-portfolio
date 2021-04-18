import React from 'react';
import 'scss/pageContainer.scss';
import './Budget.scss';
import demoImage from "../../../images/budgetdemo.png";
import {GoMarkGithub} from "react-icons/go";
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {ROUTE_REACT} from "Constants/Routes";


const Budget = ({path}) => {
    const text = "onClick={clickHereToOpenGithub}";

    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container">
                            <div className='description'>
                                <div className="description-text">
                                    <h2>Home Budget</h2>
                                    <p>The application is designed to manage home budget.
                                        User can create, edit and delete expenses, incomes and categories.
                                        It includes functions as sorting or filtering available data. Data records
                                        are displayed on sortable tables and charts.
                                    </p>
                                    <p>
                                        App works based on external Django Restful API, written by myself.
                                        React app altogether with DFF gives possibility to create new users.
                                    </p>
                                    <p>
                                        While creating this project, I was trying to predict what errors can occur,
                                        and implement solutions for other scenarios than "happy path". Data fetching is
                                        delayed
                                        in purpose, to show the loaders behavior.
                                        The app is responsive for desktop and mobile devices.
                                    </p>
                                    <p>
                                        The App has been designed and created from scratch by myself, without third
                                        party participation. Although,
                                        some solutions I used were based on the material
                                        I have gained during the bootcamp I was participating.
                                    </p>
                                    <span>To check the client side version of the app, you can use given in demo image
                                        login details for existing user or create new user,
                                        followed by instructions after visiting the site.
                                     </span>
                                    <span>The  Source code of the application is available on my <GoMarkGithub/></span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/budget.git"
                                           target="_blank">{text}</a>
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