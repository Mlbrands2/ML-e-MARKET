import React from 'react';
import SmallCard from './SmallCard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Today Orders",
      number: 110,
      iconBg: "bg-cyan-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      number: 110,
      iconBg: "bg-purple-600",
      icon: Loader2,
    },
    {
      title: "Order Processing",
      number: 300,
      iconBg: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Order Delivered",
      number: 500,
      iconBg: "bg-green-600",
      icon: CheckCheck,
    },
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, index) => (
        // Add a unique `key` here, using `index` as a fallback
        <SmallCard key={index} data={data} />
      ))}
    </div>
  );
}
