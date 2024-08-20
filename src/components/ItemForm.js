import { useState } from "react";

export default function ItemForm({ addItem }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    addItem({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add new item"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 mt-2 w-full"
      >
        Add Item
      </button>
    </form>
  );
}
