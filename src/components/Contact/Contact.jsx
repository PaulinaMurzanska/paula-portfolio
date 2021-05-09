import React from 'react';
import './Contact.scss';
import {motion} from "framer-motion";


const Contact = () => {

    const pageVariants = {
        initial: {
            opacity: 0,
            x: 0
        },
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 0
        },
    };
    const pageTransition = {
        duration: .6,
        stiffness: 100,
    };

    return (
        <React.Fragment>
            <motion.div
                variants={pageVariants}
                exit="out"
                animate="in"
                initial="initial"
                transition={pageTransition}
            >
                <div
                    className='contact-page'
                >
                    <div className="details">
                        <h2>Paulina Murzańska</h2>
                        <h3> - junior front end developer - </h3>
                        <h4>cell:<a href="tel:0048-514-132-314">+48 514 132 314</a></h4>
                        <h4>email: <a href="mailto:p.murzanska@gmail.com">p.murzanska@gmail.com</a></h4>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>

    )
}
export default Contact;