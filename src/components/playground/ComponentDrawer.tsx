import { LayoutGrid, X } from "lucide-react";

interface ComponentDrawerProps {
  setIsDrawerOpen: (open: boolean) => void;
}

const ComponentDrawer: React.FC<ComponentDrawerProps> = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: any;
}) => (
  <div className="fixed top-0 left-0 h-full z-50 w-64 sm:w-72 bg-slate-900 text-white shadow-xl">
    {/* Drawer content container */}
    <div className="p-5 flex flex-col h-full bg-slate-800/60 backdrop-blur-md border-r border-slate-700/70">
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

      <div>Button</div>
    </div>
  </div>
);

export default ComponentDrawer;
