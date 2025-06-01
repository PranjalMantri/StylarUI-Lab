import { Eye } from "lucide-react";
import useComponentStore from "../../store/componentStore";
import ButtonPreview from "../Button/Button-Preview/ButtonPreview";
import InputPreview from "../Input/Input-Preview/InputPreview";
import DropdownPreview from "../Dropdown/Dropdown-Preview/DropdownPreview";

function ComponentPreview() {
  const { currentComponent } = useComponentStore();

  const renderPreview = () => {
    switch (currentComponent.id) {
      case "button":
        return <ButtonPreview />;
      case "input":
        return <InputPreview />;
      case "dropdown":
        return <DropdownPreview />;
      default:
        return (
          <span className="text-slate-400">Nothing to preview... yet.</span>
        );
    }
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700/70 rounded-xl p-4 sm:p-6 shadow-2xl w-full">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <Eye className="w-6 h-6 text-sky-400" />
        <h2 className="text-xl font-semibold text-slate-100">Live Preview</h2>
      </div>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg min-h-[200px] flex items-center justify-center p-6 sm:p-8 border border-slate-700">
        {renderPreview()}
      </div>
    </div>
  );
}

export default ComponentPreview;
