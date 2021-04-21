import React from "react";
import "./HtmlSingleProject.scss";
import {AiFillGithub} from "react-icons/ai";

const HtmlSingleProject = ({
                               siteTitle, myLink, linkStyles,
                               fontStyles, originalLink, githubLink, backgroundImage
                           }) => {

    return (
        <React.Fragment>
            <div className='html-project-card'
                 style={{backgroundImage: `url(${backgroundImage})`}}>
                <div className='card-title' style={fontStyles}>
                    {siteTitle}
                </div>
                <div className="versions-card">
                    <div className="my-version">
                        <a href={myLink} target='_blank'
                           style={linkStyles}

                        > my version of site</a>
                    </div>

                    <div className='original-version'>
                        <a href={originalLink}
                           target='_blank'
                           style={linkStyles}>
                            {
                                originalLink === "#" && ("site no longer exist")
                            }
                            {
                                originalLink !== "#" && (' original site')
                            }
                        </a>
                    </div>

                </div>
                <div className='github'>
                    <a href={githubLink} target='_blank'>
                        <AiFillGithub/>
                    </a>
                </div>

            </div>
        </React.Fragment>
    )
}
export default HtmlSingleProject;