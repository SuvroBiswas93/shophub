import clientPromise from "@/lib/mongodb";
import itemsData from "@/data/items.json";

// GET: JSON items + MongoDB items
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shopHub");

    const mongoItems = await db
      .collection("items")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Normalize MongoDB _id 
    const normalizedMongoItems = mongoItems.map(item => ({
      ...item,
      id: item._id.toString(),
    }));

    // JSON items first, MongoDB items after
    const allItems = [...itemsData, ...normalizedMongoItems];

    return Response.json(allItems);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}

// POST: add new item to MongoDB
export async function POST(req) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db("shopHub");

    const newItem = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      category: data.category,
      stock: Number(data.stock),
      image: data.image || "/placeholder.svg",
      createdAt: new Date(),
    };

    const result = await db.collection("items").insertOne(newItem);

    return Response.json(
      { id: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
