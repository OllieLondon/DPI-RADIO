import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-kasaoli-charcoal text-kasaoli-cream">
      <div className="container-main section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-kasaoli-gold rounded-full flex items-center justify-center">
                <span className="text-kasaoli-charcoal font-bold">◉</span>
              </div>
              <span className="text-xl font-serif font-bold">KasaOli</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium home goods designed with natural materials and sustainable craftsmanship.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Shop</h4>
            <ul className="space-y-3">
              {['All Products', 'Kitchen', 'Home', 'Decor', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-kasaoli-gold transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping & Returns', 'Care Guide', 'FAQs', 'Sustainability'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-kasaoli-gold transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-kasaoli-charcoal border border-gray-600 rounded px-4 py-2 text-sm text-kasaoli-cream placeholder-gray-500 focus:outline-none focus:border-kasaoli-gold"
              />
              <button className="bg-kasaoli-gold text-kasaoli-charcoal py-2 px-4 text-sm font-semibold uppercase tracking-widest hover:bg-kasaoli-rust transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex gap-6">
              {['Instagram', 'Pinterest', 'Facebook'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-sm text-gray-400 hover:text-kasaoli-gold transition"
                >
                  {social}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2024 KasaOli. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm text-gray-400 hover:text-kasaoli-gold transition"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
