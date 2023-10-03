import { EducationInformationContext } from "../contexts/EducationInformationContext";
import { GeneralInformationContext } from "../contexts/GeneralInformatioContext";
import { useContext } from "react";

export default function Preview() {

   const [formData] = useContext(GeneralInformationContext)
   const [educationDatas] = useContext(EducationInformationContext)


  return (
    <>
      <div className="preview-page">
        <div className="header">
          <div className="profile-pics"></div>
          <div className="personal-informations">
            <span className="personal-info name">{formData.name}</span>
            <div className="data-container">
              <i className="fa fa-home"></i>
              <span>{formData.adress}</span>
            </div>
            <div className="personal-info">
              <div className="data-container">
                <i className="fa fa-envelope"></i>
                <span>{formData.email}</span>
              </div>
              <div className="data-container">
                <i className="fa fa-mobile-phone"></i>
                <span>{formData.phone}</span>
              </div>
            </div>
            <div className="personal-info">
              <div className="data-container">
                <i className="fa fa-globe"></i>
                <span>{formData.webpage}</span>
              </div>
              <div className="data-container">
                <i className="fas fa-calendar"></i>
                <span>{formData.dateOfirth}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-you">
            <span className="title"></span>
            <div className="information">
                {formData.aboutYou}
            </div>
        </div>
        <div className="education">
        <span className="title">Education</span>
        {educationDatas.map(data =>(
            <div key={data.id}>
                <h3>{data.titleOfStudy}</h3>
                <span>School: {data.schoolName}</span>
                <div className="time-wraper">
                    <span>Begining of studies: {data.beginingOfStudies}</span>
                    <span>End of studies: {data.endOfStudies}</span>
                </div>
            </div>
        ))}
        </div>
        <div className="work-experience">
        <span className="title">Work experience</span>

        </div>
      </div>
    </>
  );
}
