const testimonials = [
  { text: "Amazing quality and fast shipping!", author: "John Doe" },
  { text: "Best prices in the market.", author: "Jane Smith" },
  { text: "Excellent customer service!", author: "Mike Johnson" },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:mb-12 md:text-4xl">
          What Customers Say
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-linear-to-br from-slate-50 to-slate-100 p-6 shadow-2xl cursor-pointer transition hover:shadow-xl md:p-8"
            >
              <p className="mb-4 italic text-slate-700">
                 &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="font-bold text-teal-600">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
