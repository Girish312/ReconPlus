export default function KeyFeatures() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 animate-fadeIn">
          <span className="text-white">Key Features</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {[
            {
              title: 'Real-time Detection',
              description: 'Get instant alerts when someone scans, probes, or targets your system.',
              icon: '/images/features/realtime-detection.png'
            },
            {
              title: 'AI-Driven Accuracy',
              description: 'Smarter detection with fewer false alarms — learns from real attack patterns.',
              icon: '/images/features/ai-accuracy.png'
            },
            {
              title: 'Visual Dashboard',
              description: 'See all logs, alerts, trends, and activity clearly in a user-friendly UI.',
              icon: '/images/features/dashboard.png'
            },
            {
              title: 'Proactive Protection',
              description: 'Identify threats in their earliest stages and prevent damage before it happens.',
              icon: '/images/features/proactive-protection.png'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-full bg-gradient-to-br from-[#0f2f35] to-[#0a1e28] rounded-3xl border border-cyan-500/20 p-8 flex flex-col items-center text-center space-y-6 transform group-hover:scale-105 group-hover:border-cyan-500/40 transition-all duration-300">
                {/* Icon in circle */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
