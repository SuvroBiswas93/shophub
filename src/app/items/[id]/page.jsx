// app/items/[id]/page.jsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { getItemById, getItems } from "@/lib/items";
import { notFound } from "next/navigation";

// ✅ Metadata generation
export async function generateMetadata({ params: promiseParams }) {
  const params = await promiseParams; // <-- unwrap params
  const item = await getItemById(params.id);

  if (!item) return { title: "Item Not Found - ShopHub" };

  return {
    title: `${item.name} - ShopHub`,
    description: item.description,
  };
}

// ✅ Static params for SSG
export async function generateStaticParams() {
  const items = await getItems();
  return items.map((item) => ({ id: item.id.toString() }));
}

// ✅ Page component
export default async function ItemDetailPage({ params: promiseParams }) {
  const params = await promiseParams; // <-- unwrap params
  const item = await getItemById(params.id);

  if (!item) notFound(); // renders app/not-found.jsx

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
              className={`w-full bg-gradient-to-r from-teal-600 to-orange-500 text-white font-bold py-3 px-4 rounded hover:from-teal-700 hover:to-orange-600 transition mt-8 ${
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
