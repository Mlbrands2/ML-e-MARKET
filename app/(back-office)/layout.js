"use client";
import Navbar from "@/components/backstore/Navbar";
import Sidebar from "@/components/backstore/Sidebar";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
       <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Main Content Area */}
      <div
        className={`flex-grow bg-slate-100 min-h-screen transition-all duration-300 ${
          showSidebar ?  "w-full" :"lg:ml-64"
        }`}
      >
        {/* Header */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        {/* Main Content */}
        <main className="p-8 bg-slate-100 mt-20 dark:bg-slate-900 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}