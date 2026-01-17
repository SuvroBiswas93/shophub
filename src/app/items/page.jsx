"use client";

import { useEffect, useState } from "react";
import { getItems } from "@/lib/items";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item._id || item.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative w-full h-64">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-gray-600 text-sm">{item.category}</p>
              <p className="text-teal-600 font-bold text-lg mt-2">${item.price}</p>
              <p className={`mt-1 font-semibold ${item.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                {item.stock > 0 ? `Stock: ${item.stock}` : "Out of Stock"}
              </p>
              <Link href={`/items/${item.id || item._id}`} className="text-teal-600 mt-2 block">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
