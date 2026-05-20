import { motion } from "motion/react";

export default function Departments() {
  const departments = [
    {
      number: "#1",
      title: "Vision",
      tagline: "Image & Motion",
      description:
        "Photorealistic products. Cinematic sequences. Animated identities. Vision generates broadcast-ready content from product shots to feature-length visuals. Every frame is production-ready.",
      capabilities: [
        "Photorealistic rendering & composition",
        "Cinematic & animation sequences",
        "Dynamic brand asset creation",
      ],
      color: "from-blue-500/10 to-transparent",
    },
    {
      number: "#2",
      title: "Sound",
      tagline: "Voice & Audio",
      description:
        "Character-authentic voiceovers. Original compositions. Engineered soundscapes. Sound builds emotional resonance—from intimate podcast narration to immersive spatial audio. Every decibel intentional.",
      capabilities: [
        "Voice synthesis & character consistency",
        "Original music composition",
        "Spatial audio & sound design",
      ],
      color: "from-purple-500/10 to-transparent",
    },
    {
      number: "#3",
      title: "Mind",
      tagline: "Strategy & Language",
      description:
        "Insightful narratives. Data-driven messaging. Refined storytelling. Mind ensures every word lands. From campaign copy to research-backed strategy, language that converts and compels.",
      capabilities: [
        "Strategic messaging & positioning",
        "Research-informed copywriting",
        "Narrative & brand voice design",
      ],
      color: "from-green-500/10 to-transparent",
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
          className="mb-[48px] md:mb-[80px]"
        >
          <h2 className="text-[36px] md:text-[64px] font-italiana text-white mb-[12px] leading-tight">
            Three departments.
          </h2>
          <p className="text-[28px] md:text-[48px] font-italiana text-white italic mb-[24px]">
            One prompt.
          </p>
          <p className="text-[14px] md:text-[16px] text-gray-400 max-w-[600px]">
            Ollie's parallel intelligence handles every dimension of creative production. Vision builds. Sound shapes. Mind strategizes. One instruction. Infinite possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px]">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`bg-gradient-to-br ${dept.color} border border-gray-800 rounded-[12px] p-[32px] md:p-[40px]`}
            >
              <div className="text-[12px] md:text-[14px] text-gray-400 font-medium mb-[8px]">
                {dept.number}
              </div>
              <h3 className="text-[24px] md:text-[28px] font-italiana text-white mb-[8px]">
                {dept.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-gray-300 font-medium mb-[16px]">
                {dept.tagline}
              </p>
              <p className="text-[13px] md:text-[14px] text-gray-400 leading-relaxed mb-[24px]">
                {dept.description}
              </p>
              <div className="space-y-[12px]">
                {dept.capabilities.map((cap, capIdx) => (
                  <div key={capIdx} className="flex gap-[12px] items-start">
                    <span className="text-cyan-400 mt-[2px]">•</span>
                    <span className="text-[13px] text-gray-300">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
