import { motion } from "motion/react";

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Generate production-ready assets in seconds, not hours. Scale your creative output without scaling your team.",
    },
    {
      icon: "🎯",
      title: "Brand Consistent",
      description: "Every output respects your brand guidelines. Style, tone, and visual identity maintained across all creations.",
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Connect to your existing tools and workflows. API, plugins, and native integrations for maximum flexibility.",
    },
    {
      icon: "🎓",
      title: "Easy to Learn",
      description: "Intuitive prompt interface requires no technical background. Start creating with simple, natural language.",
    },
    {
      icon: "📊",
      title: "Analytics Ready",
      description: "Every asset is optimized for performance. Built-in analytics to measure engagement and refine your approach.",
    },
    {
      icon: "🔒",
      title: "Enterprise Secure",
      description: "SOC 2 compliant, encrypted data, and full privacy controls. Your content stays yours and remains private.",
    },
  ];

  return (
    <section className="relative py-[64px] md:py-[120px] px-[20px] md:px-[64px] bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-[64px] md:mb-[80px]"
        >
          <h2 className="text-[36px] md:text-[56px] font-italiana text-white mb-[24px] leading-tight">
            Built for modern creators.
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-400 max-w-[700px]">
            Every feature designed with creative professionals in mind. Speed, quality, and consistency in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-[12px] p-[32px] hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-[32px] mb-[16px]">{feature.icon}</div>
              <h3 className="text-[18px] font-semibold text-white mb-[12px]">
                {feature.title}
              </h3>
              <p className="text-[14px] text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
