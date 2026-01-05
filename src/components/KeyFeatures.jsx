import { useState } from "react";

export default function KeyFeatures() {
  const features = [
    {
      title: "Real-time Detection",
      description:
        "Get instant alerts when someone scans, probes or targets your system.",
      icon: "/images/features/realtime-detection.png",
    },
    {
      title: "AI-Driven Accuracy",
      description:
        "Smarter detection with fewer false alarms, learns from real attack patterns.",
      icon: "/images/features/ai-accuracy.png",
    },
    {
      title: "Visual Dashboard",
      description:
        "See all logs, alerts, trends and activity clearly in a user-friendly UI.",
      icon: "/images/features/dashboard.png",
    },
    {
      title: "Proactive Protection",
      description:
        "Identify threats in their earliest stages and prevent damage before it happens.",
      icon: "/images/features/proactive-protection.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const CARD_WIDTH = 280; // px
  const MAX_INDEX = features.length - 1;

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1421]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-20">
          Key Features
        </h2>

        {/* Connector behind cards */}
        <div
          className="
            absolute
            left-1/2
            top-[120px]
            -translate-x-1/2
            w-[90%]
            h-[260px]
            rounded-[40px]
            border
            border-cyan-500/30
            z-[-1]
          "
        />

        {/* MOBILE SLIDER */}
        <div className="relative lg:hidden">

          {/* Left Button */}
          {index > 0 && (
            <button
              onClick={() => setIndex(index - 1)}
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                z-20
                bg-[#0f2533]
                border
                border-cyan-500/30
                rounded-full
                w-10
                h-10
                flex
                items-center
                justify-center
                text-cyan-400
              "
            >
              ‹
            </button>
          )}

          {/* Right Button */}
          {index < MAX_INDEX && (
            <button
              onClick={() => setIndex(index + 1)}
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                z-20
                bg-[#0f2533]
                border
                border-cyan-500/30
                rounded-full
                w-10
                h-10
                flex
                items-center
                justify-center
                text-cyan-400
              "
            >
              ›
            </button>
          )}

          {/* Slider window */}
          <div className="overflow-hidden px-12">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * CARD_WIDTH}px)`,
              }}
            >
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="
                    min-w-[260px]
                    bg-[#0b1622]
                    rounded-3xl
                    p-8
                    flex
                    flex-col
                    items-center
                    text-center
                    space-y-6
                    shadow-[0_0_40px_rgba(34,211,238,0.05)]
                  "
                >
                  <div className="w-20 h-20 rounded-full bg-[#0f2533] flex items-center justify-center">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative z-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="
                bg-[#0b1622]
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                text-center
                space-y-6
                shadow-[0_0_40px_rgba(34,211,238,0.05)]
              "
            >
              <div className="w-20 h-20 rounded-full bg-[#0f2533] flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10"
                />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
