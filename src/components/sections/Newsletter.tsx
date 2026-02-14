export function Newsletter() {
  return (
    <section className="py-16 bg-primary-500">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe Our News Letter
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Get the latest updates on new teas, exclusive offers, and tea brewing tips.
        </p>

        {/* Subscribe Form */}
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded border-2 border-transparent focus:border-white focus:outline-none text-gray-900"
                required
              />
          <button
                type="submit"
                className="bg-white text-primary-500 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe Now
              </button>
        </form>
      </div>
    </section>
  );
}
