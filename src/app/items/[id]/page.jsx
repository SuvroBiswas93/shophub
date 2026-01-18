import Image from "next/image";
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";

// Fetch single item
async function getItemById(id) {
  const client = await clientPromise;
  const db = client.db("shopHub");

  // Check MongoDB ObjectId
  if (id.length === 24) {
    const { ObjectId } = await import("mongodb");
    return await db.collection("items").findOne({ _id: new ObjectId(id) });
  }

  // Fallback for JSON items
  const items = (await import("@/data/items.json")).default;
  return items.find((item) => item.id.toString() === id);
}

// Metadata
export async function generateMetadata(props) {
  const params = await props.params; //  IMPORTANT
  const item = await getItemById(params.id);

  if (!item) {
    return { title: "Item Not Found - ShopHub" };
  }

  return {
    title: `${item.name} - ShopHub`,
    description: item.description,
  };
}

// Page
export default async function ItemDetailPage(props) {
  const params = await props.params; //  IMPORTANT
  const item = await getItemById(params.id);

  if (!item) notFound();

  return (
      <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link
          href="/items"
          className="text-teal-600 hover:text-teal-800 font-semibold mb-8 inline-block"
        >
          ← Back to Items
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden h-96 relative">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Item Info */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
                {item.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-800 mt-2">
                {item.name}
              </h1>

              <div className="flex gap-8 mt-6">
                <div>
                  <p className="text-gray-600 text-sm">Price</p>
                  <p className="text-4xl font-bold text-teal-600">${item.price}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Stock</p>
                  <p
                    className={`text-2xl font-bold ${
                      item.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.stock > 0 ? item.stock : "Out of Stock"}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-teal-50 to-orange-50 rounded-lg border border-teal-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Product ID:</span> #{item.id}
                </p>
              </div>
            </div>

            <button
              disabled={item.stock === 0}
              className={`w-full bg-teal-500 text-white font-bold py-3 px-4 rounded hover:bg-teal-600 transition mt-8 ${
                item.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
