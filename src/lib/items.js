// src/lib/items.js
import itemsData from "../data/items.json";

/**
 * Get all items
 */
export async function getItems() {
  return itemsData;
}

/**
 * Get single item by ID
 * @param {number|string} id
 */
export async function getItemById(id) {
  return itemsData.find((item) => item.id === Number(id));
}

/**
 * Get items by category
 * @param {string} category
 */
export async function getItemsByCategory(category) {
  return itemsData.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
}
