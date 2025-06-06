import { LayoutGrid, X } from "lucide-react";
import ComponentSelectButton from "../ui/ComponentSelectButton";
import useComponentStore from "../../store/componentStore";

interface ComponentDrawerProps {
  setIsDrawerOpen: (open: boolean) => void;
  components: Array<{
    id: string;
    name: string;
    iconName: string;
    disabled?: boolean;
  }>;
}

const ComponentDrawer: React.FC<ComponentDrawerProps> = ({
  setIsDrawerOpen,
  components,
}) => {
  const { currentComponent } = useComponentStore();

  return (
    <div className="fixed top-0 left-0 h-full z-50 w-64 sm:w-72 bg-slate-900  text-white shadow-xl">
      {/* Drawer content container */}
      <div className="p-5 flex flex-col h-full bg-slate-800/60 backdrop-blur-md border-r border-slate-700/70 overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-sky-500 scrollbar-thumb-rounded-full">
        <div className="flex items-center justify-between mb-6 border-b pb-2 border-slate-700/70">
          <h2 className="text-xl font-semibold flex flex-row items-center gap-2">
            <LayoutGrid
              size={18}
              className="text-slate-100 align-middle relative top-[1px]"
            />
            Components
          </h2>
          <X
            className="w-6 h-6 text-gray-300 hover:text-white"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-2 border-b border-slate-700/70">
          {components.map((component, index) => (
            <ComponentSelectButton
              key={index}
              component={component}
              selectedComponentId={currentComponent.id}
            />
          ))}
        </div>

        <div className="flex justify-center p-3 text-slate-400 opacity-35">
          StlarUI Lab
        </div>
      </div>
    </div>
  );
};

export default ComponentDrawer;
