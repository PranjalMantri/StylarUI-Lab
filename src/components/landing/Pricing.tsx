import { ArrowRight } from "lucide-react";

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 text-white bg-gradient-to-br from-sky-600 to-indigo-700"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Supercharge Your UI Development?
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto mb-10">
          StylarUI Lab is currently{" "}
          <span className="font-semibold bg-emerald-500 px-2 py-1 rounded-md">
            Free
          </span>{" "}
          during its beta phase. Jump in and start building beautiful components
          today!
        </p>
        <a
          href="/playground" // Link to the actual app
          className="bg-white hover:bg-slate-100 text-sky-700 font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
        >
          Launch StylarUI Lab <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

export default Pricing;
