"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import itemsData from "@/data/items.json";

export default function ItemsPage() {
  const [mongoItems, setMongoItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setMongoItems(data))
      .catch(console.error);
  }, []);

  const allItems = mongoItems.length > 0 ? mongoItems : itemsData;

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allItems.map((item, index) => (
          <div
            key={item._id ? `mongo-${item._id}` : `json-${item.id}-${index}`}
            className="rounded-lg p-4 shadow-xl hover:shadow-2xl transition flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1 space-y-2 mt-2">
              <h2 className="text-xl font-bold">{item.name}</h2>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>

              <p className="text-gray-500 text-sm">
                Category: {item.category}
              </p>

              <p className="text-teal-600 font-bold text-lg">
                ${item.price}
              </p>
            </div>

            {/* BUTTON */}
            <Link
              href={`/items/${item._id || item.id}`}
              className="mt-auto block w-full rounded-lg bg-teal-500 px-4 py-3 text-center text-white font-medium hover:bg-teal-600 transition"
            >
              View Details
            </Link>
          </div>

        ))}
      </div>

      <Footer />
    </>
  );
}
