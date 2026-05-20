import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="relative py-[80px] md:py-[120px] px-[20px] md:px-[64px] bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-[40px] md:text-[72px] font-italiana text-white mb-[24px] md:mb-[32px] leading-tight">
            Ready to transform your <span className="text-cyan-400">creative process?</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-300 mb-[48px] leading-relaxed max-w-[700px] mx-auto">
            Join thousands of creators and agencies using Ollie to produce broadcast-quality content at scale. Start creating in seconds.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-[16px] justify-center items-center"
          >
            <button className="px-[40px] py-[16px] bg-white text-black rounded-[8px] text-[14px] md:text-[16px] font-semibold hover:bg-gray-200 transition-colors">
              Start Free Trial
            </button>
            <button className="px-[40px] py-[16px] border border-white text-white rounded-[8px] text-[14px] md:text-[16px] font-semibold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[12px] md:text-[13px] text-gray-500 mt-[24px]"
          >
            No credit card required. Full access for 14 days.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
