import React, { useState } from "react";

function ShoppingListApp() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedQuantity, setEditedQuantity] = useState(1);
  const [Name, setName] = useState("");
  const [Quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);
  const [checklist, setChecklist] = useState([]);
  const [showCheckedItems, setShowCheckedItems] = useState(false);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const editItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
    setEditIndex(null);
  };

  const removeItem = (index) => {
    setEditIndex(null);
    setItems(items.filter((item, i) => i !== index));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItemName = e?.target?.itemName?.value?.trim();
    if (!newItemName) {
      alert("Please enter an item name.");
      return;
    }
    if (!image) {
      alert("Please enter an item image.");
      return;
    }
    if (editIndex !== null) {
      editItem(editIndex, {
        ...items[editIndex],
        name: newItemName,
        quantity: editedQuantity,
        image: image,
        checklist: checklist[editIndex] || false,
      });
    } else {
      addItem({
        id: Date.now(),
        name: Name,
        quantity: Quantity,
        image: image,
        checklist: checklist[items.length] || false,
      });
    }
    e.target.reset();
    setEditedName("");
    setEditedQuantity(1);
    setImage(null);
    setChecklist([]);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <button
          onClick={() => setShowCheckedItems(!showCheckedItems)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showCheckedItems ? "Hide Checked Items" : "Show Checked Items"}
        </button>
      </div>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            name="itemName"
            placeholder="Item name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mr-2 p-2 border-2 rounded focus:outline-none"
          />
          <input
            type="number"
            min="1"
            value={Quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20 p-2 border-2 rounded focus:outline-none"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border-2 mx-2"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editIndex !== null ? "Save" : "Add Item"}
          </button>
        </div>
      </form>
      <ul>
        {items.map((item, index) =>
          // only render checked items if showCheckedItems is true
          !showCheckedItems && item.checklist ? null : (
            <li key={item.id} className="py-2 border-b">
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    name="itemName"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="mr-2 p-2 border rounded focus:outline-none"
                  />
                  <input
                    type="number"
                    value={editedQuantity}
                    onChange={(e) =>
                      setEditedQuantity(parseInt(e.target.value))
                    }
                    min="1"
                    className="w-20 p-2 border rounded focus:outline-none"
                  />
                  <input
                    type="checkbox"
                    checked={checklist[index] || false}
                    onChange={(e) => {
                      const updatedChecklist = [...checklist];
                      updatedChecklist[index] = e.target.checked;
                      setChecklist(updatedChecklist);
                    }}
                  />
                  <button
                    onClick={() =>
                      editItem(index, {
                        ...items[editIndex],
                        name: editedName,
                        quantity: editedQuantity,
                        image: image,
                        checklist: checklist[index] || false,
                      })
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div>
                  <div>
                    <span className="mr-2">{item.name}</span>
                    {item.image && (
                      <img
                        src={item.image}
                        alt="Item"
                        className="w-1/5 h-auto object-cover"
                      />
                    )}
                  </div>
                  <span className="mr-2">Quantity: {item.quantity}</span>
                  <input type="checkbox" checked={item.checklist} readOnly />
                  <div className="mt-2">
                    <button
                      onClick={() => {
                        setEditIndex(index);
                        setEditedName(item.name);
                        setEditedQuantity(item.quantity);
                        setImage(item.image);
                      }}
                      className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeItem(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingListApp;
