import { useState } from "react";
import {useContext} from "react";
import {EducationInformationContext} from "../contexts/EducationInformationContext.jsx"
import { v4 as uuidv4 } from 'uuid';

export default function EducationComponent() {
  
  const [educationData, setEducationData] = useState({
    schoolName: "",
    titleOfStudy: "",
    beginingOfStudies: "",
    endOfStudies: "",
  });
  
  const [educationDatas, setEducationDatas] = useContext(EducationInformationContext)
  
  function handleSubmit(e){
    e.preventDefault();
      setEducationDatas([...educationDatas, educationData])
      setEducationData({
        schoolName: "",
        titleOfStudy: "",
        beginingOfStudies: "",
        endOfStudies: "",
      })
  }


  return (
    <>
      <div className="form-container">
        <form onSubmit ={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="school-name"
              id="school-name"
              placeholder="School name"
              value={educationData.schoolName}
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  schoolName: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="title-of-study"
              id="title-of-study"
              placeholder="Title of study"
              value={educationData.titleOfStudy}
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  titleOfStudy: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="date-container">
            <div className="input-container">
              <label htmlFor="start-date">Begining of studies</label>
              <input
                type="date"
                id="start-date"
                name="start-date"
              value={educationData.beginingOfStudies}
                onChange={(e) =>
                  setEducationData({
                    ...educationData,
                    beginingOfStudies: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-container">
              <label htmlFor="end-date">End of studies</label>
              <input
                type="date"
                id="end-date"
                name="end-date"
              value={educationData.endOfStudies}
                onChange={(e) =>
                  setEducationData({
                    ...educationData,
                    endOfStudies: e.target.value,
                })
                }
              />
            </div>
              <button type="submit" onClick={()=>setEducationData({...educationData, id:uuidv4()})} >Add education</button>
          </div>
        </form>
      </div>
    </>
  );
}
