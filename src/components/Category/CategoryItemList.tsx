import React, { useState } from 'react';
import { CategoryItem } from './CategoryItem';

const categoriesList = [
  'Food',
  'Entertainment',
  'Utilities',
  'Rent',
  'Transportation',
];

export const CategoryItemList: React.FC = () => {
  const [categoryItems, setCategoryItems] = useState([] as number[]);

  const addCategoryItem = () => {
    setCategoryItems((prev) => [...prev, Date.now()]);
  };

  const removeCategoryItem = (id: number) => {
    setCategoryItems((prev) => prev.filter((i) => i !== id));
  };

  const handleCompleted = async (data: {
    category: string;
    price: number;
    items: any[];
  }) => {
    // simulate API request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Category Item data:', data);
    // TODO: Add the OPEN AI API
  };

  return (
    <div>
      {categoryItems.map((id) => (
        <CategoryItem
          key={id}
          categories={categoriesList}
          onRemove={() => removeCategoryItem(id)}
          onCompleted={handleCompleted}
        />
      ))}

      <button
        onClick={addCategoryItem}
        className="mt-4 text-blue-500 cursor-pointer"
      >
        Add Category
      </button>
    </div>
  );
};

export default CategoryItemList;
