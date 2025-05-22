import { useState, useEffect } from "react";

function Playground() {
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

  return (
    <div>
      <div className="bg-gray-200 p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">My Playground</h1>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Drawer
        </button>
      </div>
      <div className="flex bg-cyan-500">
        {isDrawerOpen && (
          <div
            className={`z-50 w-48 sm:w-72 bg-white shadow-md ${
              isMobile ? "fixed top-0 left-0 h-full" : ""
            }`}
          >
            Left Column
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        )}
        <div className="flex flex-col-reverse sm:flex-row w-full h-screen">
          <div className="flex-3/10 bg-red-500">Configuration</div>
          <div className="flex-6/10 bg-yellow-400">
            <div className="flex flex-col justify-center items-center h-full">
              <div>Preview</div>
              <div>Copy Code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playground;
