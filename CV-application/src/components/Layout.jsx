import GeneralInformationComponent from "./GeneralInformationComponent";
import Preview from "./Preview";
import "../css/global.css"
import EducationHandler from "./EducationHandler";
import ExperienceHandle from "./ExperienceHandle";

export default function Layout(){

    return(
        <>
        <div className="layout">
            <div className="form">
                <GeneralInformationComponent />
                <EducationHandler />
                <ExperienceHandle />
            </div>
            <div className="preview">
                <Preview />
            </div>
        </div>
        </>
    )
}