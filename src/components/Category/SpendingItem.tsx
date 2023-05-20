import React, { useState } from 'react';

interface SpendingItemProps {
  onDelete: () => void;
}

export const SpendingItem: React.FC<SpendingItemProps> = ({ onDelete }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <div className="flex justify-between items-center mb-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="border rounded px-2 py-1"
      />
      <input
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
        type="number"
        className="border rounded px-2 py-1"
      />
      <button onClick={onDelete} className="ml-2 text-red-500">
        Remove
      </button>
    </div>
  );
};
