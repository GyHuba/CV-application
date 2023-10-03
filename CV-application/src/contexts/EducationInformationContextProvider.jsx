/* eslint-disable react/prop-types */

import { useState } from "react"
import { EducationInformationContext } from "./EducationInformationContext"

export const EducationInformationContextProvider = (props) => {
    const [formDatas, setFormDatas] = useState([])

    return(
        <EducationInformationContext.Provider value={[formDatas, setFormDatas]}>
            {props.children}
        </EducationInformationContext.Provider>
    )
}
