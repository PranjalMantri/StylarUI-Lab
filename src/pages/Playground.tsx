import { useState, useEffect } from "react";
import { LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import ComponentDrawer from "../components/playground/ComponentDrawer";
import { COMPONENTS } from "../constants/components";
import ComponentConfiguration from "../components/playground/ComponentConfiguration";
import useComponentStore from "../store/componentStore";
import ComponentPreview from "../components/playground/ComponentPreview";
import CodeExporter from "../components/playground/CodeExporter";

export default function Playground() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { currentComponent } = useComponentStore();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-slate-900 flex min-h-screen font-sans">
      {isDrawerOpen && (
        <ComponentDrawer
          components={COMPONENTS}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      )}

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out
          ${isDrawerOpen && !isMobile ? "ml-72" : "ml-0"}
        `}
      >
        {/* Header */}
        <div className="bg-slate-800/60 backdrop-blur-md border-b border-slate-700/70 px-4 py-4 sm:px-6 shadow-md z-20 flex items-center justify-between flex-shrink-0 rounded-b-lg">
          <Link
            to={"/"}
            className="text-2xl font-bold font-inter flex items-center"
          >
            <span className="text-sky-400">Stylar</span>
            <span className="text-slate-400">UI</span>
            <span className="text-xs text-emerald-500 ml-1.5 bg-emerald-500/10 px-1 py-0.5 font-mono rounded">
              lab
            </span>
          </Link>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="bg-sky-600 hover:bg-sky-700 transition-colors duration-200 text-white font-medium py-2 px-4 rounded-lg text-sm shadow-md hover:shadow-lg flex flex-row items-center gap-2 justify-between transform scale-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          >
            <LayoutGrid
              size={18}
              className="text-slate-100 align-middle relative top-[1px]"
            />
            <span className="hidden md:block">Components</span>
          </button>
        </div>

        {/* Main content area below header (Configuration and Preview) */}
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-col-reverse sm:flex-row w-full flex-1 overflow-auto">
            {/* Configuration Column */}
            <ComponentConfiguration currentComponent={currentComponent} />

            {/* Preview Column */}
            <div className="p-6 flex-1">
              <div className="flex flex-col justify-center items-center h-full w-full min-h-[200px]">
                <div className="text-xl font-semibold text-slate-700 w-full">
                  <ComponentPreview />
                </div>
                <CodeExporter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
