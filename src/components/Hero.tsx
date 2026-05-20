import { motion } from "motion/react";

const VIDEO_URL =
  "https://res.cloudinary.com/daklr2whx/video/upload/v1730000000/hero-bg.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex-shrink-0 overflow-hidden">
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[24px] left-[20px] md:top-[64px] md:left-[64px] pointer-events-auto"
        >
          <div className="text-white text-[12px] md:text-[14px] font-medium tracking-[0.05em]">
            OLLIE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[24px] right-[20px] md:top-[64px] md:right-[64px] pointer-events-auto flex gap-[24px] text-white text-[12px] md:text-[14px]"
        >
          <button className="hover:opacity-80 transition-opacity">Models</button>
          <button className="hover:opacity-80 transition-opacity">Demos</button>
          <button className="hover:opacity-80 transition-opacity">Capabilities</button>
          <button className="hover:opacity-80 transition-opacity">Integrations</button>
          <button className="hover:opacity-80 transition-opacity">FAQ</button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-[32px] left-[20px] right-[20px] md:left-auto md:bottom-[64px] md:right-[64px] md:max-w-[1200px] pointer-events-auto flex flex-col md:block"
        >
          <h1 className="text-white text-[48px] leading-[1.1] md:text-[120px] font-italiana md:leading-[1] mb-[24px] md:mb-[32px]">
            An entire <span className="italic">studio</span> in<br />
            a <span className="text-cyan-400">prompt.</span>
          </h1>
          <p className="text-white text-[14px] md:text-[16px] leading-relaxed max-w-[600px] font-normal">
            Ollie combines vision, sound, and strategy into one unified creative engine. From concept to finished asset—design, animate, compose, and refine at the speed of thought.
          </p>
          <div className="flex gap-[16px] mt-[32px]">
            <button className="px-[24px] py-[12px] md:px-[32px] md:py-[16px] bg-white text-black rounded-[8px] text-[12px] md:text-[14px] font-semibold hover:bg-gray-200 transition-colors pointer-events-auto">
              Start Creating
            </button>
            <button className="px-[24px] py-[12px] md:px-[32px] md:py-[16px] border border-white text-white rounded-[8px] text-[12px] md:text-[14px] font-semibold hover:bg-white/10 transition-colors pointer-events-auto">
              View Capabilities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
