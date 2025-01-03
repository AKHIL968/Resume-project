import React from 'react';

const categories = [
  'Groceries',
  'Transportation',
  'Entertainment',
  'Utilities',
  'Dining Out',
  'Other'
];

const CategorySelect = ({ value, onChange }) => {
  return (
    <div>
      <label>Category</label>
      <select
        id="category"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;