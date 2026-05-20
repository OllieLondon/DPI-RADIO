import { motion } from "motion/react";

export default function Models() {
  const models = [
    "GPT-4.5 Pro",
    "Gemini 3.1 Pro",
    "Veo 3.1",
    "Flux 2",
    "Soul Cinematic",
    "Seedream V5",
  ];

  return (
    <section className="relative py-[48px] md:py-[64px] px-[20px] md:px-[64px] bg-black border-t border-gray-800 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-[24px] md:gap-[32px]"
        >
          <span className="text-[12px] md:text-[14px] text-gray-400 font-normal whitespace-nowrap">
            Technology stack:
          </span>
          {models.map((model, idx) => (
            <div key={idx} className="flex items-center gap-[24px] md:gap-[32px]">
              <span className="text-[12px] md:text-[14px] text-white font-italic">
                {model}
              </span>
              {idx < models.length - 1 && (
                <span className="hidden md:inline text-gray-700">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
