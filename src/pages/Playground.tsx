import { useState, useEffect } from "react";
import { LayoutGrid, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Playground() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const desktopDrawerMargin = "ml-72";

  return (
    <div
      className={`relative bg-slate-900 flex flex-col min-h-screen font-sans transition-all duration-300 ease-in-out ${
        isDrawerOpen && !isMobile ? desktopDrawerMargin : "ml-0"
      }`}
    >
      {/* Header */}
      <div className="bg-slate-800/60 backdrop-blur-md border-b border-slate-700/70 py-4 sm:px-6 shadow-md z-20 flex items-center justify-between flex-shrink-0">
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
          className="bg-sky-600 hover:bg-sky-700 transition-colors duration-200 text-white font-medium py-2 px-4 rounded-lg text-sm shadow-md hover:shadow-lg flex flex-row items-center gap-2 justify-between transform scale-100 hover:scale-105"
        >
          <LayoutGrid
            size={18}
            className="text-slate-100 align-middle relative top-[1px]"
          />
          <span className="hidden md:block">Components</span>
        </button>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 h-full z-50 w-64 sm:w-72 bg-slate-900 text-white shadow-xl">
          {/* Drawer content container */}
          <div className="p-5 flex flex-col h-full bg-slate-800/60 backdrop-blur-md border-r border-slate-700/70">
            <div className="flex items-center justify-between mb-6">
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
      )}

      <div className="flex flex-1 bg-gray-100">
        <div className="flex flex-col-reverse sm:flex-row w-full flex-1 overflow-auto">
          {/* Configuration Column */}
          <div className="p-6 w-1/3 flex-shrink-0 border-r border-slate-300">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              Configuration
            </h3>
          </div>

          {/* Preview Column */}
          <div className="p-6 bg-white flex-1">
            <div className="flex flex-col justify-center items-center h-full min-h-[200px]">
              <div className="text-xl font-semibold text-slate-700">
                Preview Area
              </div>
              <p className="text-slate-500 mt-2">
                Your content preview will be displayed here.
              </p>
              <button className="mt-4 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-150">
                Copy Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
