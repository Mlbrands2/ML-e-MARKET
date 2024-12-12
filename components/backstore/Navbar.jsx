"use client"
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn"
import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, SunIcon, User, X } from 'lucide-react'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from 'react'
import Link from "next/link";

export default function Navbar({setShowSidebar,showSidebar}) {
    return (
        <div className={showSidebar ? 'flex items-center  justify-between bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 h-20 px-8 py-8  fixed top-0 w-full  z-50 ' :
            'flex items-center  justify-between bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 h-20 px-8 py-8  fixed top-0 w-full  z-50 sm:pr-[20rem]'
        }>
            {/*Icons */}
            <Link href={"/dashboard"} className="sm:hidden">
                Logo
            </Link>
            <button onClick={() => setShowSidebar(!showSidebar)} className="text-lime-700 dark:text-lime-500">
                <AlignJustify />
            </button>
            {/*3 Icons */}
            <div className="flex space-x-3 ">
                <ThemeSwitcherBtn />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent-700 rounded-lg   dark:bg-transparent-600 ">
                            <Bell className='text-green-600' />
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold  bg-red-500   rounded-full -top-0 end-6 dark:border-gray-900">20</div>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='px-4 py-2 pr-8'>
                        <DropdownMenuLabel>Notefictions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className='flex items-center space-x-2'>
                                <Image src='/profile.jpg' alt='user profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                                <div className="flex flex-col">
                                    <p className='flex items-center'>have been sold out</p>
                                    <div className="flex items-center space-x-2">
                                        <p className='py-.5 px- bg-red-600 text-white rounded-full text-sm'>stock out</p>
                                        <p>12 dec 2025 12:00Am</p>
                                    </div>
                                </div>
                                <button>
                                    <X />
                                </button>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className='flex items-center space-x-2'>
                                <Image src='/profile.jpg' alt='user profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                                <div className="flex flex-col">
                                    <p className='flex items-center'>have been sold out</p>
                                    <div className="flex items-center space-x-2">
                                        <p className='py-.5 px- bg-red-600 text-white rounded-full text-sm'>stock out</p>
                                        <p>12 dec 2025 12:00Am</p>
                                    </div>
                                </div>
                                <button>
                                    <X />
                                </button>
</div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <div className='flex items-center space-x-2'>
                                <Image src='/profile.jpg' alt='user profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                                <div className="flex flex-col">
                                    <p className='flex items-center'>have been sold out</p>
                                    <div className="flex items-center space-x-2">
                                        <p className='py-.5 px- bg-red-600 text-white rounded-full text-sm'>stock out</p>
                                        <p>12 dec 2025 12:00Am</p>
                                    </div>
                                </div>
                                <button>
                                    <X />
                                </button>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>


                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button>
                            <Image src='/profile.jpg' alt='user profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='px-4 py-2 pr-8'>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <button type="button" className='flex items-center space-x-2'>
                                <LayoutDashboard className='mr-2 h-4 w-4' />
                                <span>Dashboard</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button type="button" className='flex items-center space-x-2'>
                                <Settings className='mr-2 h-4 w-4' />
                                <span>Edit Profile</span>
                            </button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className='flex items-center space-x-2'>
                                <LogOut className='mr-2 h-4 w-4' />
                                <span>Log out</span>
                            </button>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>



            </div>
        </div>
    )
}
