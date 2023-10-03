import { useState } from "react";

export default function ExperienceComponent() {
  const [experienceForm, setExperienceForm] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    beginingOfWork: "",
    endOfWork: "",
  });

  return (
    <>
      <div className="form-container">
        <h2>Work experience</h2>
        <form>
          <div className="company-name">
            <label htmlFor="name">Company name</label>
            <input
              type="text"
              name="company-name"
              id="company-name"
              placeholder="Semilab"
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  companyName: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="position-title">
            <label htmlFor="adress">Position title</label>
            <input
              type="text"
              name="position-title"
              id="position-title"
              placeholder="Electrician technican"
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  positionTitle: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="responsibilities">
            <label htmlFor="about-you">
              Main responsibilities of your jobs
            </label>
            <input
              type="textarea"
              name="responsibilities"
              id="responsibilities"
              placeholder="Blueprint reading, build. Electrical installation of silicon measuring devices... "
              rows="5"
              cols="33"
              onChange={(e) =>
                setExperienceForm({
                  ...experienceForm,
                  responsibilities: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="work-date-container">
            <div className="date-container">
              <label htmlFor="start-date">Begining of work</label>
              <input
                type="date"
                id="start-date"
                name="start-date"
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    beginingOfWork: e.target.value,
                  })
                }
              />
            </div>
            <div className="input container">
              <label htmlFor="end-date">End of work</label>
              <input
                type="date"
                id="end-date"
                name="end-date"
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    endOfWork: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
