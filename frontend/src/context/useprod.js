import React,{ useEffect,useState,createContext } from "react"

export const ProdContext=createContext()

export const ProdProvider=(props)=>{
    const [prod,setProd]=useState()
    return(
        <ProdContext.Provider value={[prod,setProd]}>
            {props.children}
        </ProdContext.Provider>
    )
}
