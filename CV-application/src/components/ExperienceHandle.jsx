import { useContext } from "react";
import { ExperienceContext } from "../contexts/ExperienceContext";
import ExperienceComponent from "./ExperienceComponent";

export default function ExperienceHandle() {

  const [experienceData, setExperienceData] = useContext(ExperienceContext);

  function deleteExperience(idx) {
    const newArray = experienceData.filter((data) => data.id != idx);
    setExperienceData(newArray);
  }

  return (
    <>
      <div className="form-container-wraper">
      <h2 className="title"><i className="fas fa-business-time"></i> Work experience</h2>
      {experienceData.map((data)=>(
          <div key={data.id} className="data-card">
            <h3>{data.positionTitle}</h3>
              <span>Company: {data.companyName}</span>
              <div className="responsibilities">{data.responsibilities}</div>
              <div className="time-wraper">
                <span>Begining of work: {data.beginingOfWork}</span>
                <span>End of work: {data.endOfWork}</span>
              </div>
            <button
              onClick={() => {
                deleteExperience(data.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <ExperienceComponent />
      </div>
    </>
  );
}
