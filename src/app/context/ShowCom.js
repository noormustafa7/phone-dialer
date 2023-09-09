"use client"
import {createContext, useState} from "react";

export const ShowComContext = createContext(null);

export const ComProvider = (props) => {
    const [count, setCount] = useState(0)
    return<ShowComContext.Provider value={{count, name: "noor"}}
    >{props.children}</ShowComContext.Provider>
};


