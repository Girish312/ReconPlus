import heroImage from "../assets/hero.png";
import heroBg from "../assets/hero-bg.png";

const Hero = () => {
    return (
        <section className="relative text-white overflow-hidden">
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.4, // This only affects the image now
                }}
            />
            <div className="max-w-7xl mx-auto px-6 py-20
                      grid grid-cols-1 md:grid-cols-2
                      gap-12 items-center">

                {/* LEFT SIDE - TEXT */}
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">

                        Detect threats before they detect you.
                    </h1>

                    <p className="mt-6 text-gray-400 text-sm md:text-base max-w-md text-justify">
                        An AI powered reconnaissance detection tool that monitors suspicious activity, flags attacker behaviour and helps secure your infrastructure proactively.
                    </p>
                </div>

                {/* RIGHT SIDE - CIRCLE PLACEHOLDER */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={heroImage}
                        alt="Cybersecurity Shield"
                        className="w-72 md:w-[420px] object-contain opacity-80"
                    />

                </div>

            </div>
        </section>
    );
};

export default Hero;
