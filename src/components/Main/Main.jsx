import React from 'react';
import {BrowserRouter, Switch, Route,useLocation} from "react-router-dom";
import {
    ROUTE_ABOUT, ROUTE_ABOUT_SKILLS, ROUTE_BEAUTYLINE, ROUTE_BLOG, ROUTE_BUDGET,
    ROUTE_CONTACT, ROUTE_CSS, ROUTE_DJANGO, ROUTE_DRF, ROUTE_EDITOR,
    ROUTE_EDUCATION, ROUTE_GIT, ROUTE_HTML, ROUTE_JS,
    ROUTE_MAIN, ROUTE_PLANTATION,
    ROUTE_PROJECTS, ROUTE_PYTHON, ROUTE_REACT, ROUTE_SASS, ROUTE_SKILLS,
    ROUTE_WORK
} from "Constants/Routes";
import Projects from "components/Projects/Projects";
import Contact from "components/Contact/Contact";
import "../Header/Header.scss";
import About from "components/About/About";
import WelcomePage from "components/WelcomePage/WelcomePage";
import Education from "components/Education/Education";
import NavLeft from "components/NavLeft/NavLeft";
import AboutReact from "components/Technologies/React";
import Budget from "components/ProjectsPages/ReactProjects/Budget";
import Plantation from "components/ProjectsPages/ReactProjects/Plantation";
import JavaScript from "components/Technologies/JavaScript";
import Sass from "components/Technologies/Sass";
import Html from "components/Technologies/Html";
import Django from "components/Technologies/Django";
import BeautyLine from "components/ProjectsPages/DjangoProjects/BeautyLine";
import Blog from "components/ProjectsPages/DjangoProjects/Blog";
import Drf from "components/Technologies/Drf";
import Css from "components/Technologies/Css";
import Python from "components/Technologies/Python";
import Git from "components/Technologies/Git";
import CodeEditor from "components/Technologies/CodeEditor";
import Work from "components/WorkExperience/WorkExperience";
import {AnimatePresence, motion} from "framer-motion";
import Skills from "components/About/SkillsCard";

const Main =()=> {
    const location = useLocation();
        return (
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path={ROUTE_MAIN}>
                        <NavLeft/>
                        <WelcomePage/>
                    </Route>
                    <Route exact path={ROUTE_ABOUT}>
                        <NavLeft/>
                        <WelcomePage/>
                    </Route>
                    <Route exact path={ROUTE_ABOUT_SKILLS}>
                        <NavLeft/>
                        <About/>
                    </Route>
                     <Route exact path={ROUTE_SKILLS}>
                        <NavLeft/>
                        <Skills/>
                    </Route>
                    <Route exact path={ROUTE_PROJECTS}>
                        <NavLeft/>
                        <Projects/>
                    </Route>
                    <Route exact path={ROUTE_WORK}>
                        <NavLeft/>
                        <Work/>
                    </Route>
                    <Route exact path={ROUTE_EDUCATION}>
                        <NavLeft/>
                        <Education
                        />
                    </Route>
                    <Route exact path={ROUTE_CONTACT}>
                        <NavLeft/>
                        <Contact/>
                    </Route>
                    <Route exact path={ROUTE_REACT}>
                        <NavLeft/>
                        <AboutReact
                        />
                    </Route>
                    <Route exact path={ROUTE_BUDGET}>
                        <NavLeft/>
                        <Budget/>
                    </Route>
                    <Route exact path={ROUTE_PLANTATION}>
                        <NavLeft/>
                        <Plantation/>
                    </Route>
                    <Route exact path={ROUTE_JS}>
                        <NavLeft/>
                        <JavaScript/>
                    </Route>
                    <Route exact path={ROUTE_SASS}>
                        <NavLeft/>
                        <Sass/>
                    </Route>
                    <Route exact path={ROUTE_HTML}>
                        <NavLeft/>
                        <Html/>
                    </Route>
                    <Route exact path={ROUTE_DJANGO}>
                        <NavLeft/>
                        <Django/>
                    </Route>
                    <Route exact path={ROUTE_BEAUTYLINE}>
                        <NavLeft/>
                        <BeautyLine/>
                    </Route>
                    <Route exact path={ROUTE_BLOG}>
                        <NavLeft/>
                        <Blog/>
                    </Route>
                    <Route exact path={ROUTE_DRF}>
                        <NavLeft/>
                        <Drf/>
                    </Route>
                    <Route exact path={ROUTE_CSS}>
                        <NavLeft/>
                        <Css/>
                    </Route>
                    <Route exact path={ROUTE_PYTHON}>
                        <NavLeft/>
                        <Python/>
                    </Route>

                    <Route exact path={ROUTE_GIT}>
                        <NavLeft/>
                        <Git/>
                    </Route>
                    <Route exact path={ROUTE_EDITOR}>
                        <NavLeft/>
                        <CodeEditor/>
                    </Route>
                </Switch>
            </AnimatePresence>
        )

}

export default Main;