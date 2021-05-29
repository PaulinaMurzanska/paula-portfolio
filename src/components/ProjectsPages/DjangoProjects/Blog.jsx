import React from 'react';
import 'scss/pageContainer.scss';
import demoImage from "../../../images/loginblog.png";
import {GoMarkGithub} from "react-icons/go";
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {ROUTE_DJANGO} from "Constants/Routes";
import ScrollToTop from "react-scroll-to-top";
import ButtonParallel from "components/SharedComponents/ButtonParallel";


const Blog = () => {

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
                                    <h2>Enjoy your stay! - blog site</h2>
                                    <p> I created this project on my own using knowledge gained during the bootcamp as
                                        well as resources from the Internet. It’s an example of a blog website.
                                    </p>
                                    <p>
                                        The app is a working solution for displaying articles for regular users while
                                        registered users can create, update and remove content.
                                    </p>
                                    <p>
                                        I chose hospitality as a blog topic as a reference to work I’ve been doing to
                                        date. Content has been "borrowed" from an existing blog as this project's
                                        purpose was to practice Django coding and its functions.
                                    </p>

                                    <span>  You can view the site as a non-registered user. But to see how the site
                                        works for CRUD functions, you need to register a new account or sign in using
                                        the credentials given in the demo image on the side.
                                     </span>
                                    <span>The  Source code of the application is available on my GitHub.</span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/EnjoyYourStayBlogFinal.git"
                                           target="_blank">
                                            <ButtonParallel buttonText="GitHub"/>
                                        </a>
                                    </div>
                                </div>
                                <div className='demo-image'>
                                    <a href='https://glacial-shelf-92369.herokuapp.com/' target="_blank">
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
export default Blog;