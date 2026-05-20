import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800 py-[64px] md:py-[80px] px-[20px] md:px-[64px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[48px] md:gap-[64px] mb-[64px] md:mb-[80px]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1"
          >
            <div className="text-white text-[16px] md:text-[18px] font-semibold mb-[24px]">
              OLLIE
            </div>
            <p className="text-[13px] md:text-[14px] text-gray-400 leading-relaxed max-w-[280px]">
              The unified creative studio powered by advanced AI. Design, animate, compose, and refine at the speed of thought.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-white text-[14px] font-semibold mb-[20px]">
              Product
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Templates
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-white text-[14px] font-semibold mb-[20px]">
              Company
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-white text-[14px] font-semibold mb-[20px]">
              Resources
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-white text-[14px] font-semibold mb-[20px]">
              Legal
            </h4>
            <ul className="space-y-[12px]">
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="pt-[32px] md:pt-[48px] border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-[24px]"
        >
          <p className="text-[12px] md:text-[13px] text-gray-500">
            © 2026 Ollie. All rights reserved.
          </p>
          <div className="flex gap-[24px]">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
