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
          className="absolute top-[24px] left-[20px] md:top-[64px] md:left-[64px] pointer-events-auto max-w-[calc(100vw-140px)] md:max-w-none"
        >
          <div className="flex flex-row items-center gap-[16px] md:gap-[24px]">
            <div className="flex-shrink-0 w-[48px] h-[48px] md:w-[64px] md:h-[64px]">
              <svg
                viewBox="0 0 120 120"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path d="M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z" />
              </svg>
            </div>
            <div className="text-white text-[11px] md:text-[16px] w-[112px] md:w-auto leading-[1.2] font-semibold tracking-[0.02em]">
              <span className="hidden md:block">
                Complete Business
                <br />
                Automation. We Handle All Tasks.
                <br />
                You Relax.
              </span>
              <span className="block md:hidden">
                Complete Business
                <br />
                Automation. We Handle All
                <br />
                Tasks. You Relax.
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden md:flex mt-[400px] flex-col gap-[24px] w-full max-w-[320px] text-white text-[14px] font-normal leading-relaxed"
          >
            <p>
              Our SaaS product takes over all exhausting operational activities,
              complex analytics, and tedious process management. While
              algorithms seamlessly build your success infrastructure and
              generate stable profit, you get time for truly important things.
            </p>
            <p>
              Delegate micromanagement to artificial intelligence and reliable
              cloud solutions to enjoy absolute peace of mind. We created a
              perfect ecosystem that automates marketing, finance, and
              communications, allowing you to scale your company without any
              stress.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[24px] right-[20px] md:top-[64px] md:right-[64px] pointer-events-auto"
        >
          <button className="px-5 py-3 md:px-10 md:py-7 border border-white rounded-[100%] text-white text-[12px] md:text-[18px] font-italiana uppercase tracking-widest hover:bg-white/10 hover:backdrop-blur-[48px] transition-all duration-300 cursor-pointer bg-black/10 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
            Get started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-[32px] left-[20px] right-[20px] md:left-auto md:bottom-[64px] md:right-[64px] md:max-w-[1200px] text-left md:text-right pointer-events-auto flex flex-col md:block"
        >
          <div className="md:hidden flex flex-col gap-[16px] w-full max-w-[280px] text-white text-[12px] font-normal mb-[32px] text-left">
            <p className="leading-[16px]">
              Our SaaS product takes over all exhausting operational activities,
              complex analytics, and tedious process management. While
              algorithms seamlessly build your success infrastructure and
              generate stable profit, you get time for truly important things.
            </p>
            <p className="leading-[16px]">
              Delegate micromanagement to artificial intelligence and reliable
              cloud solutions to enjoy absolute peace of mind. We created a
              perfect ecosystem that automates marketing, finance, and
              communications, allowing you to scale your company without any
              stress.
            </p>
          </div>
          <h1 className="text-white text-[36px] leading-[1.1] md:text-[96px] font-italiana md:leading-[88px]">
            <span className="hidden md:block">
              Intelligent Daily
              <br />
              Routine Automation
              <br />
              For Your Business.
              <br />
              You Relax
            </span>
            <span className="block md:hidden text-[32px]">
              Intelligent Daily Routine
              <br />
              Automation For Your
              <br />
              Business. You Relax
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
