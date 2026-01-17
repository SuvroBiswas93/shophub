// src/components/Newsletter.jsx

export default function Newsletter() {
  return (
    <section className="bg-linear-to-r from-teal-500 to-teal-600 text-white py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Subscribe to Our Newsletter
        </h2>

        {/* Subtext */}
        <p className="mb-6 md:mb-8 text-base md:text-lg">
          Get exclusive deals and updates delivered to your inbox
        </p>

        {/* Input + Button */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-center md:gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded px-4 py-3 text-black font-medium  md:px-6 border border-white"
          />
          <button className="whitespace-nowrap rounded cursor-pointer bg-white px-6 py-3 font-bold text-orange-600 transition hover:bg-slate-100 md:px-8">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
