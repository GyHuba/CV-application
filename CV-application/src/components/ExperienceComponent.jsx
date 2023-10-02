export default function ExperienceComponent(){

    return(
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
            ></input>
          </div>
          <div className="position-title">
            <label htmlFor="adress">Position title</label>
            <input
              type="text"
              name="position-title"
              id="position-title"
              placeholder="Electrician technican"
            ></input>
          </div>
          <div className="responsibilities">
            <label htmlFor="about-you">Main responsibilities of your jobs</label>
            <input
              type="textarea"
              name="responsibilities"
              id="responsibilities"
              placeholder="Blueprint reading, build. Electrical installation of silicon measuring devices... "
              rows="5"
              cols="33"
            ></input>
          </div>
          <div className="work-date-container">
            <div className="date-container">
                <label htmlFor="start-date">Begining of work</label>
                <input type="date" id="start-date" name="start-date"/>
            </div>
            <div className="input container">
                <label htmlFor="end-date">End of work</label>
                <input type="date" id="end-date" name="end-date"/>
            </div>
          </div>
        </form>
      </div>
        </>
    )
}