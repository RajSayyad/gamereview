import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide uppercase">
          Game<span className="text-red-500">Reviews</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavLink to="/" className="hover:text-red-500 transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-red-500 transition">
            About
          </NavLink>
          <NavLink to="/buy" className="hover:text-red-500 transition">
            Buy
          </NavLink>
          <NavLink to="/contact" className="hover:text-red-500 transition">
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center border-t border-gray-700 pt-4">
          <NavLink
            to="/"
            className="block text-lg hover:text-red-500 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-lg hover:text-red-500 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/buy"
            className="block text-lg hover:text-red-500 transition"
          >
            Buy
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-lg hover:text-red-500 transition"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
