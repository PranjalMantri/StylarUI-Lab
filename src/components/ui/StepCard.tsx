interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  icon: Icon,
}) => (
  <div className="relative p-6 bg-slate-800 border border-slate-700/50 shadow-md rounded-lg">
    <div className="absolute -top-5 -left-5 w-10 h-10 bg-sky-500 rounded-full flex justify-center items-center text-white font-bold text-lg shadow-xl">
      {stepNumber}
    </div>
    <div className="flex items-start gap-4 mt-4">
      <Icon className="w-8 h-8 text-sky-400 mt-1" />
      <div>
        <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export default StepCard;
