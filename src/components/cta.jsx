import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
          Ready to Get Started?
        </h2>

        {/* Subtext */}
        <p className="mb-8 text-lg text-slate-600 md:text-xl">
          Browse our collection of quality items today
        </p>

        {/* CTA Button */}
        <Link
          href="/items"
          className="inline-block rounded-lg bg-teal-500 hover:bg-orange-500 px-6 py-3 font-bold text-white hover:text-white transition hover:shadow-2xl md:px-8"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
