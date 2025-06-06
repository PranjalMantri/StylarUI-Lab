import { SlidersHorizontal } from "lucide-react";
import Configurator from "./Configurator";
import useComponentStore from "../../store/componentStore";

const ComponentConfiguration = () => {
  const { currentComponent } = useComponentStore();

  return (
    <div className="p-6 w-screen md:min-w-80 md:w-1/3 flex-shrink-0">
      <section className="bg-slate-800/50 border border-slate-700/70 rounded-xl p-4 sm:p-6 shadow-2xl max-h-[calc(100vh-80px)">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
          <SlidersHorizontal className="w-5 h-5 text-sky-400" />
          <h2 className="text-xl font-semibold text-slate-100">
            {currentComponent?.name} Configuration
          </h2>
        </div>

        <Configurator />
      </section>
    </div>
  );
};

export default ComponentConfiguration;
