import React, {useState} from 'react';
import './WelcomePage.scss';
import "../../scss/pageContainer.scss";
import paula from '../../images/paulaFrontPhoto.jpg';
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import jsLogo from "images/js.png";
import SkillDetail from "components/Skills/SkillDetail";
import {aboutJavaScript, jsList} from "Constants/Descriptions";
import {ROUTE_SKILLS} from "Constants/Routes";
import {motion} from "framer-motion";

const WelcomePage = () => {


    return (
        <React.Fragment>


            <div className="welcome">
                {/*<img src={paula}/>*/}

                <div className="intro-welcome">
                    <div className="header-welcome">
                        <h1>&lt;h1&gt; Hello Visitor! &lt;/h1&gt;</h1>

                    </div>
                    <div className='sub-header'>
                        <h3>
                            I'm junior Front End developer,
                            dreaming to explore and master the World of Codes...
                        </h3>
                    </div>

                    <div className='text-about'>
                        <p> For many years my
                            professional life has been connected to hospitality business,
                            HR and properties management. </p>
                        <p>
                            Even though I have pretty successful career within
                            hotels management I felt I can't develop myself any more and simply needed a change.
                        </p>
                        <p> I searched for activities that would be intellectually challenging for me.
                            And that's how my journey with coding started. Surprisingly, I found myself very drawn to
                            it.
                            Working with code gives me a lot of satisfaction and I'm spending every possible minute to
                            improve my
                            knowledge and skills, to become a professional programmer.</p>

                    </div>
                </div>

                {/*    <h3>*/}
                {/*        I'm junior Front End developer,*/}
                {/*        dreaming to explore and master the World of Codes...*/}
                {/*    </h3>*/}
                {/*    <div className='text-about'>*/}
                {/*        <p> For many years my*/}
                {/*            professional life has been connected to hospitality business,*/}
                {/*            HR and properties management. </p>*/}
                {/*            <p>*/}
                {/*                   Even though I have pretty successful career within*/}
                {/*            hotels management I felt I can't develop myself any more and simply needed a change.*/}
                {/*            </p>*/}
                {/*        <p>    I searched for activities that would be intellectually challenging for me.*/}
                {/*            And that's how I started my journey with coding. Surprisingly, I found myself very drawn to it.*/}
                {/*            Working with code gives me a lot of satisfaction and I'm spending every possible minute to improve my*/}
                {/*            knowledge and skills, to become a professional programmer.</p>*/}

                {/*    </div>*/}


                {/*</div>*/}
            </div>


        </React.Fragment>
    )
}
export default WelcomePage;