import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { getItems } from "@/lib/items";

export const metadata = {
  title: "Items - ShopHub",
  description: "Browse our collection of quality items",
};

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">Our Items</h1>
        <p className="text-gray-600 mb-8 text-center">
          Explore our collection of quality products
        </p>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No items available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link key={item.id} href={`/items/${item.id}`}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden cursor-pointer h-full flex flex-col hover:scale-105 transform duration-300">
                  <div className="w-full h-64 bg-gray-200 relative flex items-center justify-center shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col grow">
                    <span className="text-sm text-teal-600 font-semibold uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2 grow line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-teal-600">
                        ${item.price}
                      </span>
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          item.stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.stock > 0 ? `${item.stock} left` : "Out of stock"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
