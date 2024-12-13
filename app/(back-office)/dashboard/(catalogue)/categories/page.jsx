import Heading from '@/components/backstore/Heading';
import PageHeader from '@/components/backstore/PageHeader';
import TableActions from '@/components/backstore/TableActions';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader heading="Categories" href="/dashboard/categories/new" linkTitle="Add Categories" />

      {/* Table Action Section */}
      <TableActions/>
     <div className="py-8">
     <h2>Table</h2>
     </div>
     </div>
  );
}
