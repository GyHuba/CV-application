/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { GeneralInformationContext } from "../contexts/GeneralInformatioContext";
import { ImageContext } from "../contexts/ImageContext";

export default function GeneralInformationComponent() {
  const [formData, setFormData] = useContext(GeneralInformationContext);
  const [imageUpload, setImageUpload] = useContext(ImageContext);

  return (
    <>
      <div className="form-container-wraper">
        <h2 className="title"><i className="fa fa-id-card"></i> Personal data</h2>
        <form>
          <div className="input-container">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Address"
              maxLength={30}
              onChange={(e) =>
                setFormData({ ...formData, adress: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              maxLength={30}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone number"
              maxLength={30}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="website"
              id="website"
              placeholder="Website link"
              maxLength={50}
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
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="img">Upload image</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/jpeg, image/png, image/jpg"
              onChange={(e) => {
                {
                  if(e.target.files[0] !== undefined)
                  setImageUpload(e.target.files[0]);
                }
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
