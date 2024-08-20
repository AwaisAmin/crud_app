"use client";
import ItemForm from "@/components/ItemForm";
import ItemList from "@/components/ItemList";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (index, updatedItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD App with Search</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ItemForm addItem={addItem} />
      <ItemList
        items={filteredItems}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}
