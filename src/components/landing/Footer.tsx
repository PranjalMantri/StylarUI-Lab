import { Github, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="py-12 bg-slate-800 border-t border-slate-700/50">
      <div className="container mx-auto px-6 text-center">
        <a href="#" className="text-xl font-bold mb-4 inline-block">
          <span className="text-sky-400">Stylar</span>
          <span className="text-slate-400">UI</span>
          <span className="text-xs font-mono text-emerald-500 ml-1.5 bg-emerald-500/10 px-1 py-0.5 rounded">
            lab
          </span>
        </a>
        <p className="text-slate-400 text-sm mb-4">
          Making UI development faster and more intuitive for everyone.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/PranjalMantri/"
            className="text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/pranjalmantri"
            className="text-slate-400 hover:text-sky-400 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Stylar Lab. All rights reserved.
          Built with <span className="text-red-500">&hearts;</span> for the
          developer community.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
