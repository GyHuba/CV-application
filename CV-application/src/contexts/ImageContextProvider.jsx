/* eslint-disable react/prop-types */
import { useState } from "react"
import { ImageContext } from "./ImageContext"


export const ImageContextProvider = (props) =>{
    const [imageUpload, setImageUpload] = useState(null)

    return(
        <>
        <ImageContext.Provider value={[imageUpload, setImageUpload]}>
            {props.children}
        </ImageContext.Provider>
        </>
    )
}