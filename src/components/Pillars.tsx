import { motion } from "motion/react";

export default function Pillars() {
  const pillars = [
    {
      title: "Cinematic Film",
      description:
        "Broadcast-quality video production with cinematography, color grading, and professional editing",
    },
    {
      title: "Product Photography",
      description:
        "E-commerce and catalog imagery with controlled lighting, angles, and lifestyle context",
    },
    {
      title: "Motion Design",
      description:
        "Animated graphics, transitions, kinetic typography, and dynamic visual effects",
    },
    {
      title: "UGC & Social Ads",
      description:
        "Authentic user-generated content optimized for platform-specific performance",
    },
    {
      title: "AI Podcasts",
      description:
        "Scripted, voiced, and produced audio shows with guest conversations and sound design",
    },
    {
      title: "Research Dossiers",
      description:
        "Strategic analysis documents with data visualization and actionable insights",
    },
    {
      title: "Brand Systems",
      description:
        "Complete visual identities including guidelines, color theory, and asset libraries",
    },
    {
      title: "Avatars & Identity",
      description:
        "Consistent digital personas, character models, and representational assets",
    },
    {
      title: "Decks & Documentation",
      description:
        "Professional presentations, case studies, and branded collateral",
    },
    {
      title: "Prototyping & Storyboards",
      description:
        "Rapid ideation, visual storyboards, wireframes, and pre-production mockups",
    },
    {
      title: "Experience Design",
      description:
        "Interactive prototypes, UI flows, user journeys, and immersive experiences",
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
          <div className="text-[12px] md:text-[14px] text-gray-400 font-medium mb-[12px]">
            CAPABILITIES
          </div>
          <h2 className="text-[36px] md:text-[64px] font-italiana text-white mb-[12px] leading-tight">
            Eleven pillars of <span className="italic">what</span>
          </h2>
          <p className="text-[28px] md:text-[48px] font-italiana text-white italic mb-[24px]">
            one prompt can do.
          </p>
          <p className="text-[14px] md:text-[16px] text-gray-400 max-w-[700px]">
            Each is a complete production pipeline. Not a feature. Not a sketch. A finished, deployment-ready output.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-400/30 rounded-[12px] p-[28px] md:p-[32px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <div className="flex items-start justify-between mb-[16px]">
                <h3 className="text-[16px] md:text-[18px] font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                <div className="w-[24px] h-[24px] border border-gray-700 group-hover:border-cyan-400/50 rounded flex items-center justify-center text-[12px] text-gray-600 group-hover:text-cyan-400/50 transition-colors">
                  +
                </div>
              </div>
              <p className="text-[13px] md:text-[14px] text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-[64px] md:mt-[80px] pt-[64px] md:pt-[80px] border-t border-gray-800"
        >
          <h2 className="text-[32px] md:text-[56px] font-italiana text-white mb-[24px] leading-tight">
            One platform. <span className="italic">Infinite creativity.</span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-gray-400 max-w-[700px] mb-[32px]">
            Stop juggling tools. Stop waiting for renders. Ollie orchestrates every discipline into a seamless creative workflow.
          </p>
          <button className="px-[32px] py-[12px] md:px-[40px] md:py-[16px] bg-white text-black rounded-[8px] text-[12px] md:text-[14px] font-semibold hover:bg-gray-200 transition-colors">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
