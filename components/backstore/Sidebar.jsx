"use client"
import Link from 'next/link'
import logo from "../../public/logo-no-background.png";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Boxes, Briefcase, Building2, ChevronDown, ChevronRight, ExternalLink, Globe, LayoutDashboard, LayoutGrid, LogOut, MessageCircle, Monitor, Receipt, Settings, ShoppingBag, Slack, Sliders, Tag, Ticket, Truck, User2, Users2, UserSquare2, Wallet, Warehouse } from 'lucide-react'

export default function Sidebar({ showSidebar, setShowSidebar }) {
    const pathname = usePathname();
    const catalogueLinks = [
        {
            title: "Products",
            icon: ShoppingBag,
            href: "/dashboard/products",
        },

        {
            title: "Banners",
            icon: Monitor,
            href: "/dashboard/banners",
        },
        {
            title: "categories",
            icon: Boxes,
            href: "/dashboard/categories",
        },
        {
            title: "Coupons",
            icon: Ticket,
            href: "/dashboard/coupons",
        },
        {
            title: "Store banners",
            icon: Sliders,
            href: "/dashboard/banners",
        },
    ];
    const sidebarLinks = [
        {
            title: "customers",
            icon: User2,
            href: "/dashboard/customers",
        },
        {
            title: "markets",
            icon: Warehouse,
            href: "/dashboard/markets",
        },
        {
            title: "farmers",
            icon: UserSquare2,
            href: "/dashboard/farmers",
        },
        {
            title: "orders",
            icon: Receipt,
            href: "/dashboard/orders",
        },
        {
            title: "our staff",
            icon: Briefcase,
            href: "/dashboard/our-staff", // Ensure this path is correct
        },
        {
            title: "online store",
            icon: Globe,
            href: "/dashboard/0nline store",
        },
        {
            title: "Wallets",
            icon: Wallet,
            href: "/dashboard/wallet",
        },
        {
            title: "Mansour Community",
            icon: MessageCircle,
            href: "/dashboard/mansour-community",
        },
        {
            title: "Settings",
            icon: Settings,
            href: "/dashboard/setting",
        },
    ];
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={showSidebar ? " lg:onClick={()=>setShowSidebar(false)}  hidden sm:mt-20 md:mt-20 lg:mt-0 dark:bg-slate-700 overflow-y-scroll bg-slate-200 space-y-6 w-64 h-screen dark:text-slate-50 text-slate-900  fixed top-0 left-0" :
            " sm:block lg:mt-0 overflow-y-scroll md:mt-20 sm:mt-20 dark:bg-slate-700 bg-slate-200 space-y-6 w-64 h-screen dark:text-slate-50 text-slate-900  fixed top-0 left-0"
        }>
            <Link onClick={() => setShowSidebar(true)} className='px-6 py-4' href="/dashboard"><Image src={logo} alt="mansour" className='w-40' /></Link>

            <div className='space-y-3 flex flex-col mt-14'>
                <Link onClick={() => setShowSidebar(true)} href="/dashboard" className={`flex items-center space-x-3 py-2 px-6 ${pathname === "/dashboard" ? "border-l-8 text-green-600 border-green-600" : ""}`}>
                    <LayoutGrid />
                    <span>Dashboard</span>
                </Link>
                <Collapsible className='px-6 py-2'>
                    <CollapsibleTrigger className='' onClick={() => setOpenMenu(!openMenu)}>
                        <div className={`flex items-center space-x-2 py-2 px-6 ${pathname === "/dashboard / catalogue" ? "border-l-8 text-green-600 border-green-600" : ""}`}>
                            <div className="flex items-center space-x-6">
                                <Slack />
                                <span>Catalogue</span>
                            </div>
{openMenu ? <ChevronDown /> : <ChevronRight />}
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='px-4 py-2 pr-8 dark:bg-slate-900 bg-slate-50  rounded-lg'>
                        {catalogueLinks.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    onClick={() => setShowSidebar(true)}
                                    key={i}
                                    href={item.href}
                                    className={`flex items-center space-x-3 py-2 px-6 ${item.href === pathname ? "border-l-8 text-green-600 border-green-600" : ""}`}>
                                    <span><Icon /></span>
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </CollapsibleContent>
                </Collapsible>


                {sidebarLinks.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            onClick={() => setShowSidebar(true)}
                            key={i}
                            href={item.href}
                            className={`flex items-center space-x-3 py-2 px-6 ${item.href === pathname ? "border-l-8 text-green-600 border-green-600" : ""}`}>
                            <span><Icon /></span>
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
                <div className="py-2 px-6">
                    <button className="bg-lime-800 rounded-md flex items-center space-x-3 text-white px-6 py-3">
                        <span><LogOut /></span>
                        <span>logout</span>
                    </button>
                </div>
            </div>
        </div >

    )
}
