// src/lib/items.js
import itemsData from "../data/items.json";

let items = [...itemsData];

/**
 * Get all items
 */
export async function getItems() {
  return items;
}

/**
 * Get single item by ID
 * @param {number|string} id
 */
export async function getItemById(id) {
  return items.find((item) => item.id === Number(id));
}

/**
 * Get items by category
 * @param {string} category
 */
export async function getItemsByCategory(category) {
  return items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Add new item
 */
export async function addItem(data) {
  const newItem = {
    id: Date.now(),
    name: data.name,
    description: data.description,
    price: Number(data.price),
    category: data.category,
    stock: Number(data.stock),
    image: data.image || "/placeholder.svg",
  };

  items = [newItem, ...items];
  return newItem;
}
