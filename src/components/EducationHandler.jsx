/* eslint-disable no-unused-vars */
import EducationComponent from "./EducationComponent";
import { useContext } from "react";
import { EducationInformationContext } from "../contexts/EducationInformationContext";

export default function EducationHandler(){

    const [educationDatas, setEducationDatas] = useContext(EducationInformationContext);
    function deleteEducation(idx) {
        const newArray = educationDatas.filter((data) => data.id != idx);
        setEducationDatas(newArray);
      }

    return(
        <>
        <div className="form-container-wraper">
            <h2 className="title"><i className="	fas fa-graduation-cap"></i> Education</h2>
            {educationDatas.map((data)=>(
                <div key={data.id} className="data-card">
              <h3>{data.titleOfStudy}</h3>
              <span>School: {data.schoolName}</span>
                <span>Begining of studies: {data.beginingOfStudies}</span>
                <span>End of studies: {data.endOfStudies}</span>
              <button className="delete-btn"
                onClick={() => {
                  deleteEducation(data.id);
                }}
              >
                Delete
              </button>
            </div>
            ))}
            <EducationComponent />
        </div>
        </>
    )
}