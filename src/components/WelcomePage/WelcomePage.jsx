import React from 'react';
import './WelcomePage.scss';
import react from "images/react.png";
import js from "images/js.png";
import sass from "images/sass.png";
import drf from 'images/drf icon.png';
import python from "images/python.png";
import django from 'images/django.png';
import html from "images/html.png";
import css from "images/css.png";
import {Container} from "reactstrap";


const WelcomePage = () => {
    return (
        <Container className='welcome-container'>

            <div className='welcome-first-section'>
                <div className='photo-section'>
                    <p>pphoto</p>
                </div>
                <div className='circle-codes'>
                    <ul className='circle'>
                        <li>
                            <img src={react}/>
                        </li>
                        <li>
                            <img src={js}/>
                        </li>
                        <li>
                            <img src={sass}/>
                        </li>
                        <li>
                            <img src={drf}/>
                        </li>
                        <li>
                            <img src={python}/>
                        </li>
                        <li>
                            <img src={django}/>
                        </li>
                        <li>
                            <img src={html}/>
                        </li>
                        <li>
                            <img src={css}/>
                        </li>
                        <li className='hello'>
                            <h3><i>&lt;h1&gt; Hello World! &lt;/h1&gt;</i></h3>
                        </li>



                    </ul>

                </div>
            </div>


        </Container>
    )
}
export default WelcomePage;