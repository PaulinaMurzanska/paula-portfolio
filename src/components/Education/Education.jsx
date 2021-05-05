import React from "react";
import '../../scss/pageContainer.scss';
import SchoolBlock from "components/Education/SchoolBlock";
import uek from '../../images/ueknew.jpg';
import codeb from "../../images/yellow bus.png";
import lo from "../../images/lo.jpeg";

const Education = () => {
    return (
        <React.Fragment>
            <div className="pages">
                <div className="pages-container">
                    <div className="container-text">
                        <div className="inner-container education">
                            <div className="education-site-wrapper">
                                <SchoolBlock
                                    imageUlr={codeb}
                                    schoolName="CodeBrainers"
                                    reversed={true}
                                    schoolNameText="CodeBrainers bootcamp"
                                    degree1="Full stack developer | 2020 - 2021"
                                    subject1=''
                                    degree2=""
                                    subject2=''
                                    additionalClass="codebr"
                                    workList={[]}

                                />
                                <SchoolBlock
                                    imageUlr={uek}
                                    schoolName="Cracow University of Economics"
                                    reversed={false}
                                    schoolNameText="Cracow University of Economics"
                                    schoolNameText2="Cracow University of Economics"
                                    degree1="Master of Economics | 2010 - 2013"
                                    subject1='Specialization: HR Management and Consulting'
                                    degree2="Bachelor of Economics | 2006 - 2010"
                                    subject2='Specialization: International Economic Relations'
                                    additionalClass=""
                                    workList={[]}


                                />
                                <SchoolBlock
                                    imageUlr={lo}
                                    schoolName="I LO im. T.Kościuszki in Myślenice"
                                    reversed={true}
                                    schoolNameText="I LO im. T.Kościuszki in Myślenice"
                                    schoolNameText2=""
                                    degree1="Math - Phys profile class | 2003 - 2006"
                                    subject1=''
                                    degree2=""
                                    subject2=''
                                    additionalClass=""
                                    workList={[]}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Education;