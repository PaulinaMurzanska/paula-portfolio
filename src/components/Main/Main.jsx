import React from 'react';
import {BrowserRouter, Switch, Route,} from "react-router-dom";
import {
    ROUTE_ABOUT, ROUTE_BEAUTYLINE, ROUTE_BLOG, ROUTE_BUDGET,
    ROUTE_CONTACT, ROUTE_DJANGO, ROUTE_DRF,
    ROUTE_EDUCATION, ROUTE_HTML, ROUTE_JS,
    ROUTE_MAIN, ROUTE_PLANTATION,
    ROUTE_PROJECTS, ROUTE_REACT, ROUTE_SASS,
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
import Sass from "components/Technologies/Sass";
import Html from "components/Technologies/Html";
import Django from "components/Technologies/Django";
import BeautyLine from "components/ProjectsPages/DjangoProjects/BeautyLine";
import Blog from "components/ProjectsPages/DjangoProjects/Blog";
import Drf from "components/Technologies/Drf";

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            skillOpen: false,

        }
    }

    handleCloseDetails = () => {
        this.setState({
            skillOpen: true,
        })
    }
      handleClick = () => {
        this.setState({
            skillOpen: true,
        });
    }
    handleClose = () => {
        console.log("close trigerred");
        this.setState({
            skillOpen: false,
        });
    }

    render() {
        const{skillOpen}=this.state;
        console.log(skillOpen);
        return (

            <Switch>
                <Route exact path={ROUTE_MAIN}>
                    <NavLeft/>
                    <WelcomePage/>
                </Route>
                <Route exact path={ROUTE_ABOUT}>
                    <NavLeft/>
                    <About
                    handleClick={this.handleClick}
                    skillOpen={skillOpen}
                    handleCLose={this.handleClose}
                    />
                </Route>
                <Route exact path={ROUTE_PROJECTS}>
                    <NavLeft/>
                    <Projects/>
                </Route>
                <Route exact path={ROUTE_WORK}>
                    <NavLeft/>
                    <About/>
                </Route>
                <Route exact path={ROUTE_EDUCATION}>
                    <NavLeft/>
                    <Education/>
                </Route>
                <Route exact path={ROUTE_CONTACT}>
                    <NavLeft/>
                    <Contact/>
                </Route>
                <Route exact path={ROUTE_SKILLS}>
                    <NavLeft/>
                    <SkillDetail/>
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
            </Switch>

        )
    }
}

export default Main;