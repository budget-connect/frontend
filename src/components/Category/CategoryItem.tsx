import React, { useEffect, useState } from 'react';
import { SpendingItem } from './SpendingItem';

interface SpendingItemData {
  name: string;
  price: number;
}

interface CategoryItemProps {
  categories: string[];
  onRemove: () => void;
  onCompleted: (data: {
    category: string;
    price: number;
    items: SpendingItemData[];
  }) => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  categories,
  onRemove,
  onCompleted,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');
  const [price, setPrice] = useState(0);
  const [spendingItems, setSpendingItems] = useState(
    [] as { name: string; price: number }[]
  );

  const addSpendingItem = () => {
    setSpendingItems((prev) => [...prev, { name: '', price: 0 }]);
  };

  const removeSpendingItem = (index: number) => {
    setSpendingItems((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (
      selectedCategory &&
      price &&
      spendingItems.every((item) => item.name && item.price)
    ) {
      // Notify the parent component that the CategoryItem is filled out, for OPEN API integration
      onCompleted({ category: selectedCategory, price, items: spendingItems });
    }
  }, [selectedCategory, price, spendingItems, onCompleted]);

  return (
    <div className="border rounded p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          type="number"
          className="border rounded px-2 py-1"
        />
        <button onClick={onRemove} className="ml-2 text-red-500">
          Remove Category
        </button>
      </div>

      {spendingItems.map((_, index) => (
        <SpendingItem key={index} onDelete={() => removeSpendingItem(index)} />
      ))}

      <button onClick={addSpendingItem} className="mt-2 text-blue-500">
        Add Spending Item
      </button>
    </div>
  );
};
