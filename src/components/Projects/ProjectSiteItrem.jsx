import React, {useState} from "react";
import "./ProjectSIteItem.scss";
import {Link} from "react-router-dom";


const ProjectSiteItem = ({techLogo, url, siteTitle, siteUrl, linkType}) => {
    const [addClass, setAddClass] = useState("");




    return (
        <React.Fragment>
            {
                linkType === "linkReact" && (
                    <Link to={siteUrl} target="_blank">
                        <div className='project-box'
                             onMouseOver={() => setAddClass("hide")}
                             onMouseLeave={()=>setAddClass("")}
                             style={{backgroundImage: `url(${url})`}}>
                            <div className={`title-bar ${addClass}`}>
                                <div className='tech-logo'>
                                    <img src={techLogo}/>
                                </div>
                                <h1> {siteTitle}</h1>
                            </div>
                        </div>
                    </Link>
                )
            }
            {
                linkType === "linkHref" && (
                    <a href={siteUrl} target="_blank">
                        <div className='project-box'
                              onMouseOver={() => setAddClass("hide")}
                             onMouseLeave={()=>setAddClass("")}
                             style={{backgroundImage: `url(${url})`}}>
                            <div className={`title-bar ${addClass}`}>
                                <div className='tech-logo'>
                                    <img src={techLogo}/>
                                </div>
                                <h1> {siteTitle}</h1>
                            </div>
                        </div>
                    </a>
                )
            }

        </React.Fragment>


    )
}
export default ProjectSiteItem;