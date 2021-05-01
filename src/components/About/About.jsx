import React, {useState} from 'react';
import "./About.scss";
import "../Skills/Skills.scss";
import {Container} from "reactstrap";
import SkillsSmall from "components/Skills/Sklills";
import react from "../../images/react.png";
import js from "../../images/js.png";
import sass from "../../images/sass.png";
import html from "../../images/html.png";
import django from "../../images/django.png";
import drf from "../../images/djangorest.png";
import python from "../../images/python.png";
import css from "../../images/css.png"
import {ImCross} from "react-icons/im";
import {Link} from "react-router-dom";
import {
    ROUTE_CSS,
    ROUTE_DJANGO,
    ROUTE_DRF,
    ROUTE_HTML,
    ROUTE_JS, ROUTE_PYTHON,
    ROUTE_REACT,
    ROUTE_SASS,
    ROUTE_SKILLS
} from "Constants/Routes";

class About extends React.Component {

    render() {
        const{skillOpen,handleClick,handleCLose}=this.props;
        const text = "onClick={clickHereToOpen}";

        return (
            <React.Fragment>
                <div className='about-page'>
                    <Container className='container-about'>
                        <div className={`about-text ${skillOpen ? "hidden" : ""}`}>
                            <div className='about-inner-container-text'>
                                <span>&lt;h1&gt; Hello Visitor! &lt;/h1&gt;</span>
                                <h1>I'm junior skilled Front End developer,
                                    dreaming to explore and master the World of Codes...</h1>
                                <hr/>
                                <p>
                                    I'm currently based in Krakow junior Front End developer with
                                    a little bit of Back End coding experience.
                                </p>
                                <p> Even though for many years my
                                    professional life has been connected to hospitality business,
                                    HR and properties management, I'm very exited to start new career
                                    in IT.
                                </p>
                                <p>
                                    It's time for change! Someone told me once, that to become a good developer you need
                                    to
                                    make
                                    coding become your passion. It worked that way for me! Damn, it requires a lot of
                                    digging,
                                    reading,
                                    searching, failing to finally find the solutions for problems, that actually
                                    work...what a great satisfaction that is!
                                </p>
                                <p>
                                    I had finished a full stack developer bootcamp, where I had learned technologies
                                    from
                                    back
                                    end
                                    as well as front end development.
                                    I know now, that I want to develop my skills within front end . Currently I'm mostly
                                    focused
                                    on React SPA for desktop and mobiles app. </p>

                                <p> So what actually are my skills?</p>
                                <span className='clickable'
                                      onClick={handleClick}
                                >{text}</span>


                            </div>
                        </div>
                        <div className={`skills ${skillOpen ? "active" : ""}`}>
                            <div className='about-inner-container-skills'>
                                <SkillsSmall icon={react}
                                             path={ROUTE_REACT}
                                />
                                <SkillsSmall icon={js}
                                             path={ROUTE_JS}

                                />
                                <SkillsSmall icon={sass}
                                             path={ROUTE_SASS}

                                />
                                <SkillsSmall icon={html}
                                             path={ROUTE_HTML}

                                />
                                <SkillsSmall icon={django}
                                path={ROUTE_DJANGO}
                                />
                                <SkillsSmall icon={drf}
                                path={ROUTE_DRF}
                                />
                                <SkillsSmall icon={python}
                                path={ROUTE_PYTHON}
                                />
                                <SkillsSmall icon={css}
                                path={ROUTE_CSS}
                                />
                                <div className="ex">
                                    <ImCross
                                        onClick={handleCLose}
                                    />
                                </div>
                            </div>


                        </div>
                    </Container>
                </div>

            </React.Fragment>

        )
    }
}

export default About;