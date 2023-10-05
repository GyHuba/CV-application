/* eslint-disable react/prop-types */

import { useState } from "react"
import { EducationInformationContext } from "./EducationInformationContext"

export const EducationInformationContextProvider = (props) => {
    const [educationDatas, setEducationDatas] = useState([])

    return(
        <EducationInformationContext.Provider value={[educationDatas, setEducationDatas]}>
            {props.children}
        </EducationInformationContext.Provider>
    )
}
