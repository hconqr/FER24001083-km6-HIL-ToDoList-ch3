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
  const [filter, setFilter] = useState("all"); // State untuk filter
  const [searchTerm, setSearchTerm] = useState(""); // State untuk pencarian

  // Fungsi untuk menambahkan item baru ke dalam daftar belanja
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Fungsi untuk mengedit item yang ada dalam daftar belanja
  const editItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
    setEditIndex(null);
  };

  // Fungsi untuk menghapus item dari daftar belanja
  const removeItem = (index) => {
    setEditIndex(null);
    setItems(items.filter((item, i) => i !== index));
  };

  // Fungsi yang dipanggil saat formulir pengiriman dikirimkan
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
      // Jika sedang dalam mode pengeditan, panggil fungsi untuk mengedit item
      editItem(editIndex, {
        ...items[editIndex],
        name: newItemName,
        quantity: editedQuantity,
        image: image,
        checklist: checklist[editIndex] || false,
      });
    } else {
      // Jika tidak dalam mode pengeditan, tambahkan item baru ke daftar belanja
      addItem({
        id: Date.now(),
        name: Name,
        quantity: Quantity,
        image: image,
        checklist: checklist[items.length] || false,
      });
    }
    // Setel kembali keadaan formulir dan variabel-variabel terkait
    e.target.reset();
    setName(""); // Reset nilai input nama item
    setQuantity(1); // Reset nilai input quantity
    setImage(null); // Reset nilai input gambar
    setChecklist([]); // Reset checklist
    setEditedName(""); // Reset nilai input nama yang sedang diedit
    setEditedQuantity(1); // Reset nilai input quantity yang sedang diedit
    setEditIndex(null); // Reset index yang sedang diedit
  };

  // Fungsi untuk menangani unggahan gambar item
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

  // Fungsi untuk mengatur filter yang sedang aktif
  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);
  };

  // Fungsi untuk menghapus item yang telah dichecklist atau semua item sesuai dengan filter yang aktif
  const handleDeleteItems = () => {
    if (filter === "checked") {
      setItems(items.filter((item) => !item.checklist));
    } else if (filter === "unchecked") {
      setItems(items.filter((item) => item.checklist));
    } else {
      setItems([]);
    }
  };

  // Fungsi untuk mengatur nilai pencarian saat input pencarian berubah
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="container mx-auto my-4 p-4 border-2 border-[#F60E26] shadow-sm bg-[#112138] rounded">
        <div class="bg-[#F60E26] mb-14 mt-5 rounded-lg">
          <h1 class="text-2xl text-center tracking-[1.2rem] text-[#FDFEFC]">
            STOK GADGET DAPIT DISINI STORE
          </h1>
        </div>
        <div className="mt-4 ">
          {/* Formulir pencarian */}
          <div className="mb-4 flex justify-between gap-4">
            <input
              type="text"
              placeholder="Cari Nama Item...."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 border-2 rounded focus:outline-none uppercase"
            />
            <div class="flex justify-around gap-2">
              {/* Tombol untuk memilih filter */}
              <button
                onClick={() => handleFilterChange("all")}
                className="bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
              >
                Show All
              </button>
              <button
                onClick={() => handleFilterChange("checked")}
                className="bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
              >
                Show Checked Items
              </button>
              <button
                onClick={() => handleFilterChange("unchecked")}
                className="bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
              >
                Show Unchecked Items
              </button>
              {/* Tombol untuk menghapus item sesuai dengan filter yang aktif */}
              <button
                onClick={handleDeleteItems}
                className="bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
              >
                Delete Items
              </button>
            </div>
          </div>
        </div>
        {/* Formulir untuk menambahkan item baru ke dalam daftar belanja */}
        <form onSubmit={handleFormSubmit} className="mb-4">
          {/* Penambahan input untuk memilih gambar item */}
          <div className="flex items-center mb-2 gap-2">
            <input
              type="text"
              name="itemName"
              placeholder="Item name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-2 rounded focus:outline-none uppercase"
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
              className="focus:outline-none appearance-none text-white border rounded-sm hover:bg-[#BA0F20] cursor-pointer"
              placeholder="Upload"
            />
            <button
              type="submit"
              className=" bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
            >
              {editIndex !== null ? "Save" : "Add"}
            </button>
          </div>
        </form>
        {/* Daftar item dalam daftar belanja */}
        <ul>
          {items
            .filter((item) => {
              if (filter === "checked") {
                return item.checklist;
              } else if (filter === "unchecked") {
                return !item.checklist;
              } else {
                return true;
              }
            })
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <li key={item.id} className="py-2 border-b">
                {editIndex === index ? (
                  // Render form untuk mengedit item jika sedang dalam mode pengeditan
                  <div className="flex justify-around">
                    <input
                      type="checkbox"
                      checked={checklist[index] || false}
                      onChange={(e) => {
                        const updatedChecklist = [...checklist];
                        updatedChecklist[index] = e.target.checked;
                        setChecklist(updatedChecklist);
                      }}
                    />
                    <input
                      type="text"
                      name="itemName"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="mr-2 p-2 border rounded focus:outline-none text-xl uppercase"
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
                      className="bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  // Render tampilan item jika tidak dalam mode pengeditan
                  <div className="border-2 border-[#F60E26] p-4 flex items-center justify-between">
                    <input
                      type="checkbox"
                      checked={item.checklist}
                      readOnly
                      className="ml-2 rounded cursor-pointer p-2"
                    />
                    {/* Tampilkan nama item dan gambar item jika ada */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt="Item"
                        className="w-[200px] h-auto object-cover mr-4 border rounded"
                      />
                    )}
                    <div>
                      <span className="font-bold uppercase text-white text-xl ">
                        {item.name}
                      </span>
                      {/* Tampilkan quantity item dan checklist */}
                      <span className="text-white ml-2 text-xl">
                        STOCK:{item.quantity}
                      </span>
                    </div>
                    {/* Tombol untuk mengedit dan menghapus item */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditIndex(index);
                          setEditedName(item.name);
                          setEditedQuantity(item.quantity);
                          setImage(item.image);
                        }}
                        className="bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeItem(index)}
                        className="bg-[#F60E26] text-white px-4 py-2 rounded hover:bg-[#BA0F20]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingListApp;
