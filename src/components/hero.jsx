import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-teal-600 via-teal-500 to-teal-600 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to ShopHub
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Discover amazing products at unbeatable prices
        </p>

        <Link
          href="/items"
          className="inline-block rounded-lg bg-white text-orange-500 px-6 py-3 font-bold hover:bg-orange-500 hover:text-white transition  md:px-8"
        >
          Start Shopping
        </Link>
      </div>
    </section>
  );
}
