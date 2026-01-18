"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "Electronics",
      stock: "",
      image: "",
    },
  });

  const imageUrl = useWatch({ control, name: "image" });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to add item");

      toast.success("Item added successfully!");
      reset();
      setTimeout(() => router.push("/items"), 1000);
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Add New Item</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-xl space-y-6"
        >
          {/* Name */}
          <div>
            <label className="font-semibold">Item Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full border px-4 py-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: { value: 10, message: "Minimum 10 characters" },
              })}
              rows={4}
              className="w-full border px-4 py-2 rounded"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Price + Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Price</label>
              <input
                type="number"
                step="0.01"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Cannot be negative" },
                })}
                className="w-full border px-4 py-2 rounded"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-semibold">Category</label>
              <select
                {...register("category")}
                className="w-full border px-4 py-2 rounded"
              >
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="font-semibold">Image URL</label>
            <input
              type="url"
              {...register("image", {
                required: "Image URL is required",
                pattern: {
                  value:
                    /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)|https:\/\/images\.unsplash\.com\/.+$/i,
                  message: "Enter a valid image URL",
                },
              })}
              placeholder="only unsplash image url(copy image address)"
              className="w-full border px-4 py-2 rounded"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}

            {imageUrl && (
              <div className="relative w-40 h-40 mt-4 mx-auto border rounded overflow-hidden">
                <Image
                  src={imageUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            )}
          </div>

          {/* Stock */}
          <div>
            <label className="font-semibold">Stock</label>
            <input
              type="number"
              {...register("stock", {
                required: "Stock is required",
                min: { value: 0, message: "Cannot be negative" },
              })}
              className="w-full border px-4 py-2 rounded"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm">{errors.stock.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-700 disabled:bg-gray-400"
          >
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
