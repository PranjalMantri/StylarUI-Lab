import type React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Navlink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    to={href}
    className="font-medium text-sm rounded-md px-3 py-2 text-slate-300 hover:text-sky-400 transition-colors duration-200"
  >
    {children}{" "}
  </Link>
);

export default Navlink;
