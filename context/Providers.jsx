"use client"
import { ThemeProvider  } from "next-themes"
import { Toaster } from 'react-hot-toast'; // Import Toaster
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import React from "react"
export default function({children}){
    return <ThemeProvider attribute="class" defaultTheme="dark" >
               <NextSSRPlugin
     
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <Toaster position="top-center" reverseOrder={false}/>
        {children}</ThemeProvider>;
    
}
