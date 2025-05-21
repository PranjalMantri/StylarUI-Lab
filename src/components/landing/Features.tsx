import { Code, Edit3, Layers, Package, Settings2, Zap } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-800/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Why <span className="text-sky-400">StylarUI Lab</span>
          </h2>
          <p className="text-md md:text-lg text-slate-400 max-w-xl mx-auto">
            Everything you need to accelerate your React and Tailwind CSS
            workflow.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Zap}
            title="Zero Friction Styling"
            description="No installations, no complex configurations. Dive straight into designing components in your browser."
          />
          <FeatureCard
            icon={Edit3}
            title="Live Visual Editor"
            description="See your changes in real-time. Adjust styles, padding, colors, and more with intuitive controls."
          />
          <FeatureCard
            icon={Package}
            title="React & Tailwind Ready"
            description="Perfectly tailored for Tailwind CSS utility classes and React component structure. Export clean code."
          />
          <FeatureCard
            icon={Layers}
            title="Beginner Friendly"
            description="Designed with new developers in mind. Understand CSS properties and Tailwind classes visually."
          />
          <FeatureCard
            icon={Code}
            title="Instant Code Export"
            description="Generate production-ready React component code with your customized Tailwind classes in one click."
          />
          <FeatureCard
            icon={Settings2}
            title="Highly Customizable"
            description="Fine-tune every aspect of your component, from typography and spacing to shadows and transitions."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
