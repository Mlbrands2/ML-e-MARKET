import Heading from '@/components/backstore/Heading';
import PageHeader from '@/components/backstore/PageHeader';
import TableActions from '@/components/backstore/TableActions';
import Link from 'next/link';
import React from 'react';

export default function staff() {
  return (
    <div>
      {/* Header */}
      <PageHeader heading="Staff" href="/dashboard/staff/new" linkTitle="Add Staff" />

      {/* Table Action Section */}
      <TableActions/>
     <div className="py-8 text-black dark:text-white">
     <h2>Table</h2>
     </div>
     </div>
  );
}
