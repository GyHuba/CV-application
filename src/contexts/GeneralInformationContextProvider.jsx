/* eslint-disable react/prop-types */
import { useState } from "react"
import { GeneralInformationContext } from "./GeneralInformatioContext"

export const GeneralInformationContextProvider = (props) => {
    const [formData, setFormData] = useState({})

    return(
        <GeneralInformationContext.Provider value={[formData, setFormData]}>
            {props.children}
        </GeneralInformationContext.Provider>
    )
}