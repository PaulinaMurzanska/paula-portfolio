import React from "react";
import "./DrfSingleCard.scss"

const DrfSingleProjectCard = ({login, drfScreen, drfUrl, drfGithub}) => {
    return (
        <React.Fragment>

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
                <a href={drfGithub} target="_blank">github</a>
            </div>


        </React.Fragment>

    )
}
export default DrfSingleProjectCard;