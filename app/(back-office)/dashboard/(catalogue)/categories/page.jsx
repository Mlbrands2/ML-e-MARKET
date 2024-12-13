import Heading from '@/components/backstore/Heading';
import PageHeader from '@/components/backstore/PageHeader';
import { Plus, Search, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      {/* header */} 
      <PageHeader heading="Categories" href="/dashboard/categories/new" linkTitle="Add Categories"/>
      {/* table action */}
      {/* export || search || bulk delete */}
      <div className="flex justify-between py-6 px-8 bg-slate-700 rounded-lg">
     <button>Export</button>
     {/*  search  */}
     <div className="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className='w-4 h-4 text-gray-500 dark:text-gray-400'/> 
            </div>
            <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
    </div>

     {/*  delete  */}
     <button><Trash2/></button>
     </div> 
      <h2>categories</h2>
    </div>
  );
};
