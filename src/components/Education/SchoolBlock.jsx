import React from "react";
import './SchoolBlock.scss';
import DetailsList from "components/Skills/DetailsList";

const SchoolBlock = ({imageUlr,schoolNameText, additionalClass,schoolNameText2,schoolName, reversed, degree1, subject1,
                         workList,degree2, subject2}) => {
    return (
        <React.Fragment>

            <div
                className={`school-block ${reversed ? "reversed" : ""}`}
            >
                <div className={`image-block ${additionalClass}`}
                     style={{backgroundImage: `url(${imageUlr})`}}
                >
                    <p>{schoolName}</p>
                </div>
                <div className="details-block">
                    <div className="edu-block">
                        <h2>{schoolNameText}</h2>
                        <h3>{degree1}</h3>
                        <h4>{subject1}</h4>
                    </div>
                    <div className="edu-block">
                        <h2>{schoolNameText2}</h2>
                        <h3>{degree2}</h3>
                        <h4>{subject2}</h4>
                    </div>
                    {
                        workList.length > 0 &&
                        (
                            <ul>
                                {
                                    workList.map((item,index)=>
                                    <DetailsList
                                        item={item}/>
                                    )
                                }

                            </ul>
                        )
                    }

                </div>
            </div>


        </React.Fragment>

    )
}
export default SchoolBlock;