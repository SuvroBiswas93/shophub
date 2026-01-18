import { ObjectId } from "mongodb";
import clientPromise from "./mongodb";
import itemsData from "../data/items.json";

/**
 * Get all items
 */
export async function getItems() {
  const client = await clientPromise;
  const db = client.db("shopHub");

  const mongoItems = await db
    .collection("items")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return mongoItems.length > 0 ? mongoItems : itemsData;
}

/**
 * Get single item by ID
 */
export async function getItemById(id) {
  // Try JSON items first
  let item = itemsData.find((item) => item.id === Number(id));
  if (item) return item;

  // Then MongoDB items
  const client = await clientPromise;
  const db = client.db("shopHub");
  item = await db.collection("items").findOne({ _id: typeof id === "string" ? new ObjectId(id) : id });
  return item;
}

/**
 * Get items by category
 */
export async function getItemsByCategory(category) {
  const client = await clientPromise;
  const db = client.db("shopHub");

  const mongoItems = await db
    .collection("items")
    .find({ category: { $regex: new RegExp(`^${category}$`, "i") } })
    .sort({ createdAt: -1 })
    .toArray();

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
  return { _id: result.insertedId, ...newItem };
}
