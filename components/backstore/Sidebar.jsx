"use client"
import React, { useState } from 'react';
import { Home, FileText, Users, Store, Truck, Package, UserCheck, Settings, ShoppingCart } from 'lucide-react';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('dashboard');

  // Sidebar items
  const items = [
    { name: 'Dashboard', icon: <Home size={18} />, key: 'dashboard' },
    { name: 'Catalogue', icon: <FileText size={18} />, key: 'catalogue' },
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

  return (
    <div className="fixed bg-slate-300 w-64 dark:bg-gray-900 space-y-6 h-screen p-4">
      <div className="text-left text-xl font-bold text-slate-800 dark:text-slate-50">
        <a href="#">
          <img
            src="/logo-no-background.svg"
            alt="Ml E-market logo"
            className="-ml-8 w-40 h-30 object-contain rounded-lg "
          />
        </a>
      </div>
      <nav className="space-y-6 text-slate-800 dark:text-slate-50">
        {items.map((item) => (
          <a
            key={item.key}
            href="#"
            className={`flex items-center gap-2 text-sm hover:text-slate-500 dark:hover:text-slate-300 ${
              activeLink === item.key ? 'border-l-4 border-lime-500 pl-2' : ''
            }`}
            onClick={() => handleLinkClick(item.key)}
          >
            {item.icon}
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
