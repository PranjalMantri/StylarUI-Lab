import { Code } from "lucide-react";
import ButtonCodeExporter from "../Button/CodeExporter/ButtonCodeExporter";
import useComponentStore from "../../store/componentStore";
import InputCodeExporter from "../Input/Input-Code-Exporter/InputCodeExporter";

function CodeExporter() {
  const { currentComponent } = useComponentStore();

  const renderExporter = () => {
    switch (currentComponent.id) {
      case "button":
        return <ButtonCodeExporter />;
      case "input":
        return <InputCodeExporter />;
      default:
        return <div>Select a component to get code</div>;
    }
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700/70 w-full m-3 rounded-xl p-4 sm:p-6 shadow-2xl flex-grow flex flex-col">
      <div className="flex items-center gap-3 mb-4 sm:mb-2">
        <Code className="w-6 h-6 text-sky-400" />
        <h2 className="text-xl font-semibold text-slate-100">
          Export Component
        </h2>
      </div>
      {renderExporter()}
    </div>
  );
}

export default CodeExporter;
