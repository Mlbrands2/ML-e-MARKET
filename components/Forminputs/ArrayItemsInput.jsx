"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function ArrayItemsInput({ setItems, items = [] }) {
  const [newItem, setNewItem] = useState(""); // Tracks the new tag being added
  const [showItemForm, setShowItemForm] = useState(false); // Controls the visibility of the form

  // Handle input change for the new tag
  const handleItemSearch = (e) => {
    setNewItem(e.target.value);
  };

  // Add a new tag to the list
  const addItem = () => {
    if (newItem && !items.includes(newItem)) {
      setItems([...items, newItem]); // Update the tags list
      setNewItem(""); // Clear the input field
    }
  };

  // Remove a tag from the list
  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item)); // Remove tag
  };

  return (
    <div className="sm:col-span-2">
      <div className="flex items-center space-x-2">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Tags</h3>
        {!showItemForm && (
          <button
            type="button"
            onClick={() => setShowItemForm(true)}
            className="flex items-center space-x-1 text-blue-600 hover:underline"
          >
            <Plus />
            <span>Add Tags</span>
          </button>
        )}
      </div>

      {showItemForm && (
        <div className="relative mt-3 p-4 border rounded-lg bg-gray-100 dark:bg-gray-700">
          <input
            type="text"
            placeholder="Enter a new tag..."
            value={newItem}
            onChange={handleItemSearch}
            className="w-full p-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="button"
            onClick={addItem}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Tag
          </button>
          <button
            type="button"
            onClick={() => setShowItemForm(false)}
            className="w-full mt-6 px-4 py-2 text-4xl text-white dark:bg-slate-800 dark:hover:bg-slate-900 bg-slate-400 hover:bg-slate-300 rounded-lg transition-all"
          >
            &times;
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full"
          >
            {item}
            <button
              type="button"
              onClick={() => removeItem(item)}
              className="ml-2 text-white hover:text-gray-300"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
