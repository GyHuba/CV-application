export default function EducationComponent() {
  return (
    <>
      <div className="form-container">
        <h2>Education</h2>
        <form>
          <div className="input-container">
            <label htmlFor="school-name">School name</label>
            <input
              type="text"
              name="school-name"
              id="school-name"
              placeholder="Progmatic Academy"
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="title-of-study">Title of study</label>
            <input
              type="text"
              name="title-of-study"
              id="title-of-study"
              placeholder="Frontend developer"
            ></input>
          </div>
          <div className="date-container">
            <div className="input-container">
                <label htmlFor="start-date">Begining of studies</label>
                <input type="date" id="start-date" name="start-date"/>
            </div>
            <div className="input-container">
                <label htmlFor="end-date">End of studies</label>
                <input type="date" id="end-date" name="end-date"/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
