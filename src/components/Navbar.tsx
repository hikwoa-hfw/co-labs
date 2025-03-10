"use client";

import { cormorant, montserrat } from "@/app/font";
import { navItems } from "@/components/componentDatas";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [color, setColor] = useState("");

  const currentPath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (currentPath !== "/" && currentPath !== "/get-in-touch") {
      setColor("#ffffff");
      if (isScrolled) {
        setColor("#4B5563");
      }
    } else {
      setColor("#4B5563");
    }
  }, [currentPath, isScrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white/70 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-semibold flex items-center gap-2"
              // style={{ color: String(color) }}
            >
              <h1 className={`${cormorant.className} font-extrabold` }>Co-Labs</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${montserrat.className} group text-black transition duration-300 px-3 py-2 rounded-md text-sm font-semibold`}
                style={{ color: String(color) }}
              >
                {item.label}
                <span
                  className={`block max-w-0 group-hover:max-w-full text-black transition-all duration-500 h-0.5`}
                  style={{ backgroundColor: String(color) }}
                ></span>
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transform transition-transform duration-300 ease-in-out">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(!isOpen)}
              className="font-semibold block px-3 py-2 rounded-md text-base text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              style={{
                transitionDelay: `${index * 50}ms`,
                
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
