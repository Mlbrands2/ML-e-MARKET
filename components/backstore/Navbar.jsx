"use client";

import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcherBtn } from "../ui/ThemeSwitcherBtn";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-200 dark:bg-slate-800 text-slate-50 h-20 py-8 fixed top-0 w-full px-8 z-50 pr-[20rem]">
      {/* Left Icon */}
      <button className="text-lime-400 hover:text-yellow-500 transition duration-300">
        <AlignJustify size={20} />
      </button>

      {/* Right Icons */}
      <div className="flex space-x-6 ">
        {/* Theme Toggle */}
                <ThemeSwitcherBtn/>
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium bg-transparent rounded-lg"
            >
              <Bell size={20} className="text-green-600" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-0 right-0">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mt-2 w-64 bg-white dark:bg-slate-900 border border-gray-200 rounded-lg shadow-lg z-50"
            side="bottom"
            align="start"
          >
            <DropdownMenuLabel className="dark:text-slate-50 text-slate-900  font-semibold px-4">
              Notifications
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-2 border-gray-200" />

            {/* Notification Items */}
            {Array.from({ length: 4 }).map((_, index) => (
              <DropdownMenuItem key={index}>
                <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 transition duration-300">
                  {/* User Avatar */}
                  <Image
                    src="/profile.jpg"
                    alt="user profile"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-green-500 shadow-lg"
                  />

                  {/* Notification Details */}
                  <div className="flex-1 ">
                    <p className="text-sm font-semibold dark:text-white text-gray-800">
                      Sukuma Stock
                    </p>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-full">
                        Stock out
                      </span>
                      <span className="text-xs text-gray-500">--date--</span>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-300 rounded-full transition duration-300"
                    aria-label="Close notification"
                  >
                    <X size={18} />
                  </button>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Menu */}
        {/* Profile Menu */}
<DropdownMenu>
  <DropdownMenuTrigger>
    <button
      aria-label="Open Profile Menu"
      className="text-slate-400 hover:text-yellow-500 transition duration-300"
    >
      <Image
        src="/profile.jpg"
        alt="User Profile Picture"
        width={200}
        height={200}
        className="w-8 h-8 rounded-full"
      />
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent
    className="mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
    side="bottom"
    align="start"
  >
    <DropdownMenuLabel className="text-gray-700 dark:text-gray-300">
      My Account
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    {/* Dashboard */}
    <DropdownMenuItem>
      <button
        onClick={() => console.log("Navigate to Dashboard")}
        className="flex items-center space-x-2 w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
      >
        <LayoutDashboard className="mr-2 h-4 w-4" />
        <span>Dashboard</span>
      </button>
    </DropdownMenuItem>
    {/* Edit Profile */}
    <DropdownMenuItem>
      <button
        onClick={() => console.log("Navigate to Edit Profile")}
        className="flex items-center space-x-2 w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
      >
        <Settings className="mr-2 h-4 w-4" />
        <span>Edit Profile</span>
      </button>
    </DropdownMenuItem>
    {/* Logout */}
    <DropdownMenuItem>
      <button
        onClick={() => console.log("Logout")}
        className="flex items-center space-x-2 w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Logout</span>
      </button>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      </div>
    </div>
  );
}
