export default function Features() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:mb-12 md:text-4xl">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Feature 1 */}
          <div className="rounded-lg bg-linear-to-br from-teal-50 to-teal-100 p-6 text-center shadow-lg transition hover:shadow-xl md:p-8">
            <div className="mb-4 text-4xl md:text-5xl">🚚</div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 md:text-2xl">
              Fast Shipping
            </h3>
            <p className="text-slate-600">
              Get your items delivered quickly and safely
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg bg-linear-to-br from-orange-50 to-orange-100 p-6 text-center shadow-lg transition hover:shadow-xl md:p-8">
            <div className="mb-4 text-4xl md:text-5xl">💳</div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 md:text-2xl">
              Secure Payment
            </h3>
            <p className="text-slate-600">
              Safe and encrypted payment processing
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg bg-linear-to-br from-teal-50 to-teal-100 p-6 text-center shadow-lg transition hover:shadow-xl md:p-8">
            <div className="mb-4 text-4xl md:text-5xl">📞</div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 md:text-2xl">
              24/7 Support
            </h3>
            <p className="text-slate-600">
              Always here to help with your questions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
