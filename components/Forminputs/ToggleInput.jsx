"use client";
import React, { useState } from "react";

export default function ToggleInput({
  label,
  name,
  trueTitle = "Active",
  falseTitle = "Draft",
  register,
  className = "sm:col-span-2 items-center justify-between",
}) {
  const [isChecked, setIsChecked] = useState(false); // Track toggle state

  return (
    <div className={`${className}`}>
      <label className="block text-sm font-medium text-gray-900 dark:text-slate-50">
        {label}
      </label>
      <label className="relative inline-flex items-center cursor-pointer">
        {/* Hidden Input */}
        <input
          {...register(name)}
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)} // Toggle the state
        />
        {/* Toggle Background */}
        <div
          className={`w-14 h-8 rounded-full transition-all duration-300 ${
            isChecked
              ? "bg-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 shadow-lg"
              : "bg-gray-300 dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-gray-400"
          }`}
        >
          {/* Toggle Button */}
          <div
            className={`absolute top-1 left-1 h-6 w-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
              isChecked ? "translate-x-6" : ""
            }`}
          />
        </div>
        {/* Toggle Text */}
        <span className="ml-4 text-sm font-semibold text-gray-900 dark:text-gray-300">
          {isChecked ? trueTitle : falseTitle}
        </span>
      </label>
    </div>
  );
}
