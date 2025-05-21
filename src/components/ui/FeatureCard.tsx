interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700/70 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-center w-12 h-12 bg-sky-500/20 rounded-full mb-4 border border-sky-500/30">
      <Icon className="w-6 h-6 text-sky-600" />
    </div>
    <p className="text-lg font-semibold text-slate-100 mb-2">{title}</p>
    <p className="text-sm leading-relaxed text-slate-400">{description}</p>
  </div>
);

export default FeatureCard;
