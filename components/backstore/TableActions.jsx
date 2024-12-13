import { Download, Plus, Search, Trash2 } from 'lucide-react';
import React from 'react';

export default function TableActions(){
  return (
    <div className="flex justify-between py-6 px-12 mt-12 bg-slate-700 rounded-lg items-center gap-8">
        {/* Export Button */}
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Download className="w-4 h-4" /> Export
          </span>
        </button>

        {/* Search */}
        <div className="flex-grow">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="w-full block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>

        {/* Delete Button */}
        <button className="space-x-2 flex items-center justify-center text-bg-slate-100 hover:text-red-700">
          <Trash2 className="w-5 h-5" />
          <span>Bulk Delete</span>
        </button>
      </div>
  );
};
