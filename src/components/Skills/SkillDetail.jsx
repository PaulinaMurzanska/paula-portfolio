import React from "react";
import './SkillDetail.scss';
import DetailsList from "components/Skills/DetailsList";
import './ProjectItem.scss'


const SkillDetail = ({intro, list, content}) => {
    return (
        <React.Fragment>
                            <p>{intro}</p>
                            {
                                list.length > 0 &&
                                <ul>{
                                    list.map((item, index) =>
                                        <DetailsList
                                            item={item}
                                        />
                                    )
                                }
                                </ul>
                            }
                            <p>{content}</p>

        </React.Fragment>

    )
}
export default SkillDetail;