import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-teal-600">404</h1>
        <p className="text-gray-600 mb-6">Page not found!</p>
        <Link
          href="/"
          className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
        >
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
