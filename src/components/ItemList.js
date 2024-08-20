import { memo, useCallback } from "react";

const ItemList = ({ items, updateItem, deleteItem }) => {
  const handleEdit = useCallback(
    (index, name) => {
      const newName = prompt("Edit item name:", name);
      if (newName) updateItem(index, { name: newName });
    },
    [updateItem]
  );

  const handleDelete = useCallback(
    (index) => {
      deleteItem(index);
    },
    [deleteItem]
  );

  return (
    <ul>
      {items.map(({ name }, index) => (
        <li key={index} className="border p-2 mb-2 flex justify-between">
          <span>{name}</span>
          <div>
            <button
              className="bg-blue-500 text-white px-2 py-1 mr-2"
              onClick={() => handleEdit(index, name)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default memo(ItemList);
