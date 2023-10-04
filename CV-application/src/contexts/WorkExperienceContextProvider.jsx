/* eslint-disable react/prop-types */
import { useState } from "react"
import {WorkExperienceContext} from "./WorkExperienceContext"


export const WorkExperienceContextProvider = (props) =>{
    const [workContext, setWorkContext] = useState([])

    return (
        <>
        <WorkExperienceContext value={[workContext, setWorkContext]}>
            {props.children}
        </WorkExperienceContext>
        </>
    )
}