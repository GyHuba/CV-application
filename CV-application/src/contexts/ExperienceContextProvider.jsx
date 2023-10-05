/* eslint-disable react/prop-types */
import { useState } from "react"
import { ExperienceContext } from "./ExperienceContext"


export const ExperienceContextProvider = (props) =>{
    const [experienceData, setExperienceData] = useState([])

    return(
        <>
        <ExperienceContext.Provider value={[experienceData, setExperienceData]}>
            {props.children}
        </ExperienceContext.Provider>
        </>
    )
}