// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Moon, Sun, Home, BookOpen, FileText } from "lucide-react";
import logo from "../assets/EBLogo_White.svg"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center justify-between w-[80%] h-[5.7%] md:w-[60%]">
      {/* Logo */}
      <div className="flex items-center space-x-2 ml-[-0.7rem]">
  <img
    src={logo}
    alt="Easy Budget Logo"
    className="w-6 h-6"
    draggable= "false"      
  />
  <span className="font-semibold text-gray-800 dark:text-gray-100 text-lg"> 
    EasyBudget
  </span>
</div>

      {/* Menu Tengah */}
      <div className="flex items-center space-x-6">
        <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <Home className="w-5 h-4 mr-2" />
          <span className="text-sm font-medium">Home</span>
        </button>
        <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <BookOpen className="w-5 h-4 mr-2" />
          <span className="text-sm font-medium">About</span>
        </button>
        <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          <FileText className="w-5 h-4 mr-2" />
          <span className="text-sm font-medium">Blog</span>
        </button>
      </div>        

      {/* Dark Mode Toggle */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-white" />
          )}
        </button>

        {/* Login Button */}
        <button className="px-4 py-1.5 rounded-full mr-[-0.7rem] bg-gray-200 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition text-white text-sm font-medium">
          Log in
        </button>
      </div>
    </nav>
  );
}