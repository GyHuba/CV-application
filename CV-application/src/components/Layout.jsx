import GeneralInformationComponent from "./GeneralInformationComponent";
import EducationComponent from "./EducationComponent";
import Preview from "./Preview";
import ExperienceComponent from "./ExperienceComponent";
import "../css/global.css"

export default function Layout(){

    return(
        <>
        <div className="layout">
            <div className="form">
                <GeneralInformationComponent />
                <EducationComponent />
                <ExperienceComponent />
            </div>
            <div className="preview">
                <Preview />
            </div>
        </div>
        </>
    )
}