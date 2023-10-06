import { EducationInformationContext } from "../contexts/EducationInformationContext";
import { GeneralInformationContext } from "../contexts/GeneralInformatioContext";
import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";
import { ExperienceContext } from "../contexts/ExperienceContext";

export default function Preview() {
  const [formData] = useContext(GeneralInformationContext);
  const [educationDatas] = useContext(
    EducationInformationContext
  );
  const [experienceData] = useContext(ExperienceContext)
  const [imageUpload] = useContext(ImageContext);

  function formatImgUrl() {
    if (imageUpload !== null) {
      const url = URL.createObjectURL(imageUpload);
      return url;
    }
  }

  return (
    <>
      <div className="preview-page">
        <div className="header">
          <div
            className="profile-pics"
            style={{ backgroundImage: `url(${formatImgUrl()})` }}
          ></div>
          <div className="personal-informations">
            <h2 className="personal-info name">{formData.name}</h2>
            <div className="data-container">
              <i className="fa fa-home"></i>
              <span>{formData.adress}</span>
            </div>
            <div className="personal-info">
              <div className="data-container">
                <i className="fa fa-envelope"></i>
                <span>{formData.email}</span>
              </div>
              <div className="data-container time-data">
                <i className="fa fa-mobile-phone"></i>
                <span>+{formData.phone}</span>
              </div>
            </div>
            <div className="personal-info">
              <div className="data-container">
                <i className="fa fa-globe"></i>
                <span>{formData.website}</span>
              </div>
              <div className="data-container time-data">
                <i className="fas fa-calendar"></i>
                <span>{formData.dateOfBirth}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="education info-container">
          <h2 className="preview-title">Education</h2>
          {educationDatas.map((data) => (
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
        <div className="work-experience info-container">
          <h2 className="preview-title">Work experience</h2>
          {experienceData.map((data)=>(
            <div key={data.id}>
              <h3>{data.positionTitle}</h3>
              <span>Company: {data.companyName}</span>
              <div className="responsibilities">{data.responsibilities}</div>
              <div className="time-wraper">
                <span>Begining of work: {data.beginingOfWork}</span>
                <span>End of work: {data.endOfWork}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
