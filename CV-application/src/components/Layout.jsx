import GeneralInformationComponent from "./GeneralInformationComponent";
import Preview from "./Preview";
import ExperienceComponent from "./ExperienceComponent";
import "../css/global.css"
import EducationHandler from "./EducationHandler";

export default function Layout(){

    return(
        <>
        <div className="layout">
            <div className="form">
                <GeneralInformationComponent />
                <EducationHandler />
                <ExperienceComponent />
            </div>
            <div className="preview">
                <Preview />
            </div>
        </div>
        </>
    )
}