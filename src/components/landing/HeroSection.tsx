import { Link } from "react-router-dom";
import { PlayCircle, ChevronsDown } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800/70 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full opacity-50 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full opacity-50 filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          <span className="block text-slate-100">
            Visually Craft React Components
          </span>
          <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 text-transparent bg-clip-text">
            Instantly. No Setup.
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-slate-400 mx-auto mb-10">
          StylarUI Lab empowers new developers to build and customize React &
          Tailwind CSS components with an intuitive visual editor. Say goodbye
          to tedious manual coding and hello to rapid UI development.
        </p>

        <div className="flex justify-center items-center gap-6 flex-col sm:flex-row">
          <Link
            to="/app"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-200 scale-100 transform hover:scale-105 shadow-xl hover:shadow-sky-500/30"
          >
            <PlayCircle className="w-6 h-6" />
            Start Styling Now
          </Link>
          <Link
            to="#features"
            className="text-slate-300 hover:text-sky-400 border-2 border-slate-600 hover:border-sky-500 px-8 py-3 w-full flex items-center justify-center gap-2 sm:w-auto transition-all duration-200 transform scale-100 hover:scale-105 rounded-lg text-lg font-medium"
          >
            Learn More <ChevronsDown className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
