import { Link } from "react-router-dom";
import Navlink from "../ui/Navlink";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900/70 sticky top-0 z-50 font-inter py-4 border-b border-slate-700/50 backdrop-blur-lg">
      <div>
        <div className="container flex justify-between items-center mx-auto px-6">
          {/* Brand Name */}
          <Link to={"/"} className="text-2xl font-bold flex items-center">
            <span className="text-sky-400">Stylar</span>
            <span className="text-slate-400">UI</span>
            <span className="text-xs text-emerald-500 ml-1.5 bg-emerald-500/10 px-1 py-0.5 font-mono rounded">
              lab
            </span>
          </Link>

          {/* Navlinks */}
          <div className="hidden md:flex items-center space-x-2">
            <Navlink href="#features">Features</Navlink>
            <Navlink href="#how-it-works">How It Works</Navlink>
            <Navlink href="#pricing">Pricing</Navlink>
            <Link
              to={"/playground"}
              className="bg-sky-600 hover:bg-sky-700 transition-colors duration-200 text-white font-medium py-2 px-4 rounded-lg text-sm shadow-md hover:shadow-lg"
            >
              Launch Lab
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-slate-300 hover:text-sky-400 focus:outline-none"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Drawer Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-screen bg-slate-800 z-50 p-6 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-200 absolute top-4 right-4"
          >
            ✕
          </button>

          <nav className="mt-12 space-y-4 flex flex-col">
            <Navlink href="#features">Features</Navlink>
            <Navlink href="#how-it-works">How It Works</Navlink>
            <Navlink href="#pricing">Pricing</Navlink>
            <Link
              to={"/playground"}
              className="bg-sky-600 hover:bg-sky-700 transition-colors duration-200 text-white font-medium py-2 px-4 rounded-lg text-sm shadow-md hover:shadow-lg"
            >
              Launch Lab
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
