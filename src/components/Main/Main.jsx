import React from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import {
    ROUTE_ABOUT, ROUTE_BUDGET,
    ROUTE_CONTACT,
    ROUTE_EDUCATION, ROUTE_JS,
    ROUTE_MAIN, ROUTE_PLANTATION,
    ROUTE_PROJECTS, ROUTE_REACT,
    ROUTE_SKILLS,
    ROUTE_WORK
} from "Constants/Routes";
import HeaderBar from "components/Header/Header";
import Projects from "components/Projects/Projects";
// import Resume from "components/Resume/Resume";
import Contact from "components/Contact/Contact";
import "../Header/Header.scss";
import About from "components/About/About";
import WelcomePage from "components/WelcomePage/WelcomePage";
import WorkExperience from "components/WorkExperience/WorkExperience";
import Education from "components/Education/Education";
import NavLeft from "components/NavLeft/NavLeft";
import SkillDetail from "components/Skills/SkillDetail";
import AboutReact from "components/Technologies/React";
import Budget from "components/ProjectsPages/ReactProjects/Budget";
import Plantation from "components/ProjectsPages/ReactProjects/Plantation";
import JavaScript from "components/Technologies/JavaScript";

class Main extends React.PureComponent {
    render() {
        return (

            <Switch>
                <Route exact path={ROUTE_MAIN}>
                    <NavLeft/>
                    <WelcomePage/>
                </Route>
                <Route exact path={ROUTE_ABOUT}>
                    <NavLeft/>
                    {/*<HeaderBar/>*/}
                    <About/>
                </Route>
                <Route exact path={ROUTE_PROJECTS}>
                    <NavLeft/>
                    {/*<HeaderBar/>*/}
                    <Projects/>
                </Route>
                <Route exact path={ROUTE_WORK}>
                    {/*<HeaderBar/>*/}
                    <NavLeft/>
                    {/*<WorkExperience/>*/}
                    <About/>
                </Route>
                <Route exact path={ROUTE_EDUCATION}>
                    {/*<HeaderBar/>*/}
                    <NavLeft/>
                    <Education/>
                </Route>
                <Route exact path={ROUTE_CONTACT}>
                    {/*<HeaderBar/>*/}
                    <NavLeft/>
                    <Contact/>
                </Route>
                 <Route exact path={ROUTE_SKILLS}>
                    <NavLeft/>
                    <SkillDetail/>
                </Route>
                <Route exact path={ROUTE_REACT}>
                    <NavLeft/>
                    <AboutReact/>
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
            </Switch>

        )
    }
}

export default Main;