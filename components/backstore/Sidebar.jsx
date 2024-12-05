"use client";
import React, { useState, useEffect } from 'react';
import { Home, FileText, Users, Store, Truck, Package, UserCheck, Settings, ShoppingCart, LogOut, ChevronDown, Layers, Tag, Clipboard } from 'lucide-react'; // Added Lucide icons for dropdown

// Radix UI Dropdown Components
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('dashboard');
  const [isMounted, setIsMounted] = useState(false); // For handling hydration

  // Ensure that the dropdown menu only renders on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sidebar items
  const items = [
    { name: 'Dashboard', icon: <Home size={18} />, key: 'dashboard' },
    { name: 'Catalogue', icon: <FileText size={18} />, key: 'catalogue', dropdown: true },
    { name: 'Customers', icon: <Users size={18} />, key: 'customers' },
    { name: 'Markets', icon: <Store size={18} />, key: 'markets' },
    { name: 'Farmers', icon: <Truck size={18} />, key: 'farmers' },
    { name: 'Orders', icon: <Package size={18} />, key: 'orders' },
    { name: 'Staff', icon: <UserCheck size={18} />, key: 'staff' },
    { name: 'Settings', icon: <Settings size={18} />, key: 'settings' },
    { name: 'Online Stores', icon: <ShoppingCart size={18} />, key: 'onlineStores' },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    console.log("Logging out..."); // Add your logout logic here
  };

  if (!isMounted) {
    return null; // Render nothing until the component is mounted on the client side
  }

  return (
    <div className="fixed bg-slate-300 w-64 dark:bg-gray-900 space-y-6 h-screen p-4">
      <div className="text-left text-xl font-bold text-slate-800 dark:text-slate-50">
        <a href="#">
          <img
            src="/logo-no-background.svg"
            alt="Ml E-market logo"
            className="-ml-8 w-40 h-30 object-contain rounded-lg"
          />
        </a>
      </div>
      <nav className="space-y-6 text-slate-800 dark:text-slate-50">
        {items.map((item) => (
          <div key={item.key}>
            {item.dropdown ? (
              // Dropdown for Catalogue
              <DropdownMenu.Root>
                <DropdownMenu.Trigger
                  asChild
                  className={`flex items-center gap-2 text-sm hover:text-slate-500 dark:hover:text-slate-300 hover:scale-105 transition-all duration-200 ${
                    activeLink === item.key ? 'bg-green-500 text-white border-l-4 border-lime-500 pl-2 py-2 rounded-lg' : ''
                  }`}
                  onClick={() => handleLinkClick(item.key)}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                    <ChevronDown size={18} />
                  </div>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  align="start"
                  className="bg-gray-700 dark:bg-gray-800 p-2 rounded-lg shadow-md mt-2 w-48 relative z-10" // Ensure the dropdown aligns below the item and stacks correctly
                >
                  <DropdownMenu.Item
                    className="py-2 px-4 text-sm text-slate-800 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    <Package size={16} className="mr-2" />
                    <a href="/app/(back-office)/dashboard/catalogue/products">Products</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="py-2 px-4 text-sm text-slate-800 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    <Layers size={16} className="mr-2" />
                    <a href="/app/(back-office)/dashboard/catalogue/categories">Categories</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="py-2 px-4 text-sm text-slate-800 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    <Tag size={16} className="mr-2" />
                    <a href="/app/(back-office)/dashboard/catalogue/attributes">Attributes</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="py-2 px-4 text-sm text-slate-800 dark:text-slate-50 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  >
                    <Clipboard size={16} className="mr-2" />
                    <a href="/app/(back-office)/dashboard/catalogue/coupons">Coupons</a>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            ) : (
              // Regular Sidebar Item
              <a
                href="#"
                className={`flex items-center gap-2 text-sm hover:text-slate-500 dark:hover:text-slate-300 hover:scale-105 transition-all duration-200 ${
                  activeLink === item.key ? 'bg-green-500 text-white border-l-4 border-lime-500 pl-2 py-2 rounded-lg' : 'text-slate-800 dark:text-slate-50'
                }`}
                onClick={() => handleLinkClick(item.key)}
              >
                {item.icon}
                {item.name}
              </a>
            )}
          </div>
        ))}
      </nav>
      {/* Improved Green Logout Button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-white bg-green-500 hover:bg-green-600 rounded-lg w-full py-2 mt-6 shadow-lg transform hover:scale-105 transition-all duration-200">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
