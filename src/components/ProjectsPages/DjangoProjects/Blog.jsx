import React from 'react';
import 'scss/pageContainer.scss';
import demoImage from "../../../images/loginblog.png";
import {GoMarkGithub} from "react-icons/go";
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {ROUTE_DJANGO} from "Constants/Routes";
import ScrollToTop from "react-scroll-to-top";


const Blog = ({path}) => {
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
                                    <h2>Enjoy your stay! - blog site</h2>
                                    <p> This is project that I have created by my own, with all available knowledge that
                                        I gain
                                        during the bootcamp and resources in the Internet. It is an example of blog
                                        site.
                                    </p>
                                    <p>
                                        The App is a working solution for displaying articles for regular users, and for
                                        registered users it gives possibility
                                        to create, update and remove content.
                                    </p>
                                    <p>
                                        I've decided this blog topic to be hospitality business as a reference to my
                                        whole life work. Articles content
                                        has been "borrowed" from an existing blog, as this project's purpose was purely
                                        for practicing Django coding and
                                        its functions.
                                    </p>

                                    <span>  You can view this site as a non registered user. But to see how the site works for
                                        CRUD functions, you need to register
                                        new account or sign in using the credentials given in the demo image aside.
                                     </span>
                                    <span>The  Source code of the application is available on my <GoMarkGithub/></span>
                                    <div className="onclick">
                                        <a href="https://github.com/PaulinaMurzanska/EnjoyYourStayBlogFinal.git"
                                           target="_blank">{text}</a>
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