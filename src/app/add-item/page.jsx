"use client";

import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { addItem } from "@/lib/items";
import Image from "next/image";

export default function AddItemPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
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
      await addItem(data);
      toast.success("Item added successfully!");
      reset();

      setTimeout(() => {
        router.push("/items");
      }, 1500);
    } catch (err) {
      toast.error("Failed to add item");
      console.error(err);
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
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters",
                },
              })}
              rows={4}
              className="w-full border px-4 py-2 rounded"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
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
                  min: { value: 0, message: "Price cannot be negative" },
                })}
                className="w-full border px-4 py-2 rounded"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">Category</label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full border px-4 py-2 rounded"
              >
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
                <option value="Sports">Sports</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category.message}</p>
              )}
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
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|avif|svg))$/i,
                  message: "Enter a valid image URL",
                },
              })}
              placeholder="https://example.com/image.jpg"
              className="w-full border px-4 py-2 rounded"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}

            {imageUrl && (
              <div className="w-40 h-40 relative mx-auto mt-4">
                <Image src={imageUrl} alt="Preview" fill className="object-cover rounded" />
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
                min: { value: 0, message: "Stock cannot be negative" },
              })}
              className="w-full border px-4 py-2 rounded"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm">{errors.stock.message}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-700 disabled:bg-gray-400"
          >
            {isSubmitting ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
