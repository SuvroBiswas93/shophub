import clientPromise from "./mongodb";
import itemsData from "../data/items.json";

/**
 * Get all items
 * JSON items first, then MongoDB items after
 */
export async function getItems() {
  const client = await clientPromise;
  const db = client.db("shopHub");
  const mongoItems = await db.collection("items").find({}).sort({ createdAt: -1 }).toArray();

  // Combine JSON items and DB items
  return [...itemsData, ...mongoItems];
}

/**
 * Get single item by ID
 * Checks JSON first, then MongoDB
 */
export async function getItemById(id) {
  // Try JSON items
  let item = itemsData.find((item) => item.id === Number(id));

  if (item) return item;

  // Then try MongoDB items
  const client = await clientPromise;
  const db = client.db("shopHub");
  item = await db.collection("items").findOne({ _id: typeof id === "string" ? new ObjectId(id) : id });

  return item;
}

/**
 * Get items by category
 * JSON + DB items filtered by category
 */
export async function getItemsByCategory(category) {
  const client = await clientPromise;
  const db = client.db("shopHub");
  const mongoItems = await db.collection("items").find({ category }).sort({ createdAt: -1 }).toArray();

  const filteredJSONItems = itemsData.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return [...filteredJSONItems, ...mongoItems];
}

/**
 * Add new item to MongoDB
 */
export async function addItem(data) {
  const client = await clientPromise;
  const db = client.db("shopHub");
  const collection = db.collection("items");

  const newItem = {
    name: data.name,
    description: data.description,
    price: Number(data.price),
    category: data.category,
    stock: Number(data.stock),
    image: data.image || "/placeholder.svg",
    createdAt: new Date(),
  };

  const result = await collection.insertOne(newItem);
  return result.insertedId; // You can fetch the inserted item later if needed
}
