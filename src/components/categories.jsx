const categories = [
  { name: "Electronics", icon: "⚡" },
  { name: "Fashion", icon: "👔" },
  { name: "Home", icon: "🏠" },
  { name: "Sports", icon: "⚽" },
]

export default function Categories() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:mb-12 md:text-4xl">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="cursor-pointer rounded-lg bg-linear-to-br from-teal-500 to-teal-600 p-6 text-center text-white transition duration-300 hover:scale-105 hover:shadow-xl md:p-8"
            >
              <div className="mb-4 text-4xl md:text-5xl">{cat.icon}</div>
              <h3 className="text-base font-bold md:text-lg">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
