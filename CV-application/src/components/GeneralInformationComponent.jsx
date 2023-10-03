import {useContext} from "react";
import { GeneralInformationContext } from "../contexts/GeneralInformatioContext";

export default function GeneralInformationComponent() {

  const [formData, setFormData] = useContext(GeneralInformationContext);

  return (
    <>
      <div className="form-container">
        <h2>General informations</h2>
        <form>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Huba Gyihor"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="adress">Adress</label>
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Andrassy street 42."
              onChange={(e) =>
                setFormData({ ...formData, adress: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="fakeemail@fakeemail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="+46706539424"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              id="website"
              placeholder="randomwebsite.com"
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="date-of-birth">Date of birth</label>
            <input
              type="date"
              name="date-of-birth"
              id="date-of-birth"
              placeholder="1999.06.15"
              onChange={(e) =>
                setFormData({ ...formData, dateOfirth: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="about-you">About you</label>
            <input
              type="textarea"
              name="about-you"
              id="about-you"
              placeholder="My name is Huba Gyihor. I'm a junior frotnend developer..."
              rows="5"
              cols="33"
              onChange={(e) =>
                setFormData({ ...formData, aboutYou: e.target.value })}              
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}
