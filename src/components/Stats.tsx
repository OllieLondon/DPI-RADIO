import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { value: "20M+", label: "Projects created" },
    { value: "50M+", label: "Assets rendered" },
    { value: "5M / day", label: "Active prompts" },
    { value: "100M ARR", label: "Creative spend powered" },
  ];

  return (
    <section className="relative py-[64px] md:py-[120px] px-[20px] md:px-[64px] bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-[32px] md:gap-[64px]"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-[28px] md:text-[48px] font-italiana text-white mb-[8px] md:mb-[12px]">
                {stat.value}
              </div>
              <div className="text-[12px] md:text-[14px] text-gray-400 font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-[48px] md:mt-[64px] flex flex-wrap gap-[16px] text-[11px] md:text-[12px] text-gray-500"
        >
          <span>Trusted across</span>
          <span>•</span>
          <span>Netflix Industry</span>
          <span>•</span>
          <span>Sony Music</span>
          <span>•</span>
          <span>National Labs</span>
          <span>•</span>
          <span>Capgemini 200+</span>
          <span>•</span>
          <span>MIT VR</span>
        </motion.div>
      </div>
    </section>
  );
}
