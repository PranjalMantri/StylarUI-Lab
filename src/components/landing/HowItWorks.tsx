import { MousePointerClick, Palette, Code } from "lucide-react";
import StepCard from "../ui/StepCard";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Get Started in <span className="text-sky-400">3 Simple Steps</span>
          </h2>
          <p className="text-md md:text-lg text-slate-400 max-w-xl mx-auto">
            Building stunning components has never been this easy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StepCard
            stepNumber="1"
            icon={MousePointerClick} // Changed MousePointerSquare to MousePointerClick
            title="Select a Component"
            description="Choose a base component like a button, input, or card to start customizing."
          />
          <StepCard
            stepNumber="2"
            icon={Palette}
            title="Tweak Visually"
            description="Use the intuitive controls to adjust styles, colors, spacing, and see live previews."
          />
          <StepCard
            stepNumber="3"
            icon={Code}
            title="Export Code"
            description="Grab the generated React and Tailwind CSS code and integrate it into your project."
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
