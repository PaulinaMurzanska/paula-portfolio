import React from 'react';
import './Contact.scss';
import paula from '../../images/paula.jpg';

const Contact = ()=>{
    return(
        <div className='contact-page'>

            <div className="details">
                <h2>Paulina Murzańska</h2>
                <h3> - junior front end developer - </h3>
                <h4>cell:<a href="tel:0048-514-132-314">+48 514 132 314</a> </h4>
                <h4>email: <a href="mailto:p.murzanska@gmail.com">p.murzanska@gmail.com</a></h4>
            </div>
            {/*<div className="photo">*/}
            {/*    <img src={paula}/>*/}
            {/*</div>*/}


        </div>
    )
}
export default Contact;