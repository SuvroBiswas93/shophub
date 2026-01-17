"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { addItem } from "@/lib/items";

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

const imageUrl = useWatch({
  control,
  name: "image",
});

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
              {...register("description", { required: true })}
              rows={4}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          {/* Price + Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Price</label>
              <input
                type="number"
                step="0.01"
                {...register("price", { required: true, min: 0 })}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold">Category</label>
              <select {...register("category")} className="w-full border px-4 py-2 rounded">
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Sports</option>
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="font-semibold">Image URL</label>
            <input
              type="url"
              {...register("image")}
              placeholder="https://example.com/image.jpg"
              className="w-full border px-4 py-2 rounded"
            />

            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="w-40 h-40 object-cover rounded mt-4 mx-auto"
                onError={(e) => (e.currentTarget.src = "/placeholder.svg")}
              />
            )}
          </div>

          {/* Stock */}
          <div>
            <label className="font-semibold">Stock</label>
            <input
              type="number"
              {...register("stock", { required: true, min: 0 })}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <button
            disabled={isSubmitting}
            className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-700"
          >
            {isSubmitting ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
