"use client"
import { ThemeProvider  } from "next-themes"
import { Toaster } from 'react-hot-toast'; // Import Toaster
import React from "react"
export default function({children}){
    return <ThemeProvider attribute="class" defaultTheme="dark" >
        <Toaster position="top-center" reverseOrder={false}/>
        {children}</ThemeProvider>;
    
}
