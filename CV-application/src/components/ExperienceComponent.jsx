import { useContext, useState } from "react";
import { ExperienceContext } from "../contexts/ExperienceContext";
import { v4 as uuidv4 } from "uuid";

export default function ExperienceComponent() {
  const [experienceForm, setExperienceForm] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    beginingOfWork: "",
    endOfWork: "",
  });

  const [experienceData, setExperienceData] = useContext(ExperienceContext);

  function handleSubmit(e) {
    e.preventDefault();
    setExperienceData([...experienceData, experienceForm]);
    setExperienceForm({
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      beginingOfWork: "",
      endOfWork: "",
    });
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="company-name"
              id="company-name"
              placeholder="Company name"
              value={experienceForm.companyName}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  companyName: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="position-title"
              id="position-title"
              placeholder="Position title"
              value={experienceForm.positionTitle}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  positionTitle: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="input-container">
            <textarea
              type="textarea"
              name="responsibilities"
              id="responsibilities"
              rows={4}
              cols={40}
              placeholder="Main responsibilities of your jobs"
              value={experienceForm.responsibilities}
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  responsibilities: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="work-date-container">
            <div className="input-container">
              <label htmlFor="start-date">Begining of work</label>
              <input
                type="date"
                id="start-date"
                name="start-date"
                value={experienceForm.beginingOfWork}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    beginingOfWork: e.target.value,
                  })
                }
              />
            </div>
            <div className="input-container">
              <label htmlFor="end-date">End of work</label>
              <input
                type="date"
                id="end-date"
                name="end-date"
                value={experienceForm.endOfWork}
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    endOfWork: e.target.value,
                  })
                }
              />
            </div>
            <button
              type="submit"
              onClick={() =>
                setExperienceForm({ ...experienceForm, id: uuidv4() })
              }
            >
              Add experience
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
