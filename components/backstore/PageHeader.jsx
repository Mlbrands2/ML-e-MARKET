import React from 'react';
import Heading from './Heading';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function PageHeader({heading,linkTitle,href}){
  return (
      <div className="flex justify-between items-center">
        <Heading title={heading}/>
        <Link className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center space-x-2 dark:focus:ring-lime-500 me-2 mb-2" href={href}>
          <Plus />
          <span>{linkTitle}</span>
        </Link>
      </div>
  );
};
