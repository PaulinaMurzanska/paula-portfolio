import React from "react";
import "./DrfSingleCard.scss"
import {GoMarkGithub} from "react-icons/go";

const DrfSingleProjectCard = ({login, drfScreen, drfUrl, drfGithub}) => {
    return (
        <React.Fragment>
            <div className="drf-card-wrapper">
                <a href={drfUrl} target="_blank">
                    <div className="drf-card">
                        <div className='login-title'>
                            <img src={login}/>
                        </div>
                        <div className='drf-screen'>
                            <img src={drfScreen}/>
                        </div>
                    </div>
                </a>
                <div className='drf-github'>
                    <a href={drfGithub} target="_blank">
                        <GoMarkGithub/>
                    </a>
                </div>
            </div>


        </React.Fragment>

    )
}
export default DrfSingleProjectCard;