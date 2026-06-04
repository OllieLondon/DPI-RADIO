export default function Hero() {
  return (
    <section className="section-spacing bg-kasaoli-cream relative overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-kasaoli-gold font-semibold">
                Welcome to KasaOli
              </p>
              <h1 className="text-5xl md:text-6xl font-serif text-kasaoli-charcoal leading-tight">
                Viva sua casa, ame cada detalhe
              </h1>
              <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                Discover a curated collection of premium home goods designed with natural materials and sustainable craftsmanship. Transform your living space into a sanctuary of beauty and function.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">Shop Collection</button>
              <button className="btn-secondary">Learn More</button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-300">
              <div>
                <p className="text-2xl font-bold text-kasaoli-green">100%</p>
                <p className="text-xs uppercase tracking-widest text-gray-600">Natural Materials</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-kasaoli-rust">Sustainable</p>
                <p className="text-xs uppercase tracking-widest text-gray-600">Eco-Friendly Design</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-kasaoli-gold">Handcrafted</p>
                <p className="text-xs uppercase tracking-widest text-gray-600">Quality & Care</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-kasaoli-green via-kasaoli-gold to-kasaoli-rust rounded-3xl opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-kasaoli-green rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-56 h-56 bg-kasaoli-gold rounded-full flex items-center justify-center opacity-80">
                  <svg className="w-32 h-32 text-kasaoli-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-kasaoli-rust rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-kasaoli-gold rounded-full opacity-10 blur-3xl"></div>
    </section>
  )
}
