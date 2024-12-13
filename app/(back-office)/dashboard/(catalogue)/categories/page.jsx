import Heading from '@/components/backstore/Heading';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function page(){
  return (
    <div>
      {/* header */} 
      <div className="flex">
        <Heading title="Categories"/>
        <Link href='/dashboard/categories/new'><Plus/>
        <span>Add Categories</span>
        </Link>
      </div>
      {/* table */}
      <h2>categories</h2>
    </div>
  );
};
