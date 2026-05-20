import { motion } from "motion/react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "100 generations/month",
        "All 3 departments (Vision, Sound, Mind)",
        "Standard quality outputs",
        "Email support",
        "Basic analytics",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Built for agencies and growing teams",
      features: [
        "1,000 generations/month",
        "All capabilities included",
        "4K & enhanced outputs",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom branding",
      ],
      cta: "Start Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Unlimited generations",
        "Dedicated infrastructure",
        "White-label options",
        "24/7 support",
        "Advanced security",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
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
          className="text-center mb-[64px] md:mb-[80px]"
        >
          <h2 className="text-[36px] md:text-[56px] font-italiana text-white mb-[24px] leading-tight">
            Simple, transparent <span className="italic">pricing.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-400 max-w-[700px] mx-auto">
            Scale as you grow. All plans include access to the complete Ollie platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px]">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`rounded-[12px] p-[32px] md:p-[40px] transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 border-2 border-cyan-400/50 md:scale-105"
                  : "bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 hover:border-gray-700"
              }`}
            >
              {plan.highlighted && (
                <div className="text-cyan-400 text-[12px] font-semibold mb-[12px]">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-[24px] font-semibold text-white mb-[12px]">
                {plan.name}
              </h3>
              <p className="text-[13px] text-gray-400 mb-[24px]">
                {plan.description}
              </p>

              <div className="mb-[32px]">
                <div className="text-[36px] md:text-[40px] font-italiana text-white">
                  {plan.price}
                  <span className="text-[14px] md:text-[16px] text-gray-400">
                    {plan.period}
                  </span>
                </div>
              </div>

              <button
                className={`w-full px-[24px] py-[12px] rounded-[8px] text-[14px] font-semibold mb-[32px] transition-colors ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-200"
                    : "border border-white text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-[16px]">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-start gap-[12px]">
                    <span className="text-cyan-400 mt-[2px] flex-shrink-0">✓</span>
                    <span className="text-[13px] md:text-[14px] text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-[48px] md:mt-[64px]"
        >
          <p className="text-[14px] md:text-[16px] text-gray-400">
            All plans include a 14-day free trial. No credit card required.{" "}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Compare plans →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
