"use client";
import { useState } from "react";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsDark((prev) => !prev);
  //   }, 2500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative overflow-hidden rounded-xl md:h-[216px] md:rounded-t-xl">
      {/* Light theme */}
      <div
        className={`absolute inset-0 flex transform flex-col items-start justify-start gap-4 !rounded-b-none bg-white p-6 md:rounded-xl ${
          isDark
            ? ""
            : "z-10 animate-[revealClipPath_1s_cubic-bezier(0.77,0,0.175,1)]"
        }`}
      >
        <span className="font-medium text-black">
          This technique is using clip-path to create a theme switch animation.
        </span>
        <span className="text-black">
          Click on the button to switch themes.
        </span>
        <button
          className="h-10 rounded-md bg-black px-4 text-sm font-medium text-white"
          onClick={toggleTheme}
        >
          Switch Theme
        </button>
      </div>
      {/* Dark theme */}
      <div
        className={`absolute inset-0 flex flex-col items-start justify-start gap-4 !rounded-b-none bg-[#0D0C0C] p-6 text-white md:rounded-xl ${
          isDark
            ? "animate-[revealClipPath_1s_cubic-bezier(0.77,0,0.175,1)]"
            : ""
        }`}
      >
        <span className="font-medium text-white">
          This technique is using clip-path to create a theme switch animation.
        </span>
        <span className="text-white">
          Click on the button to switch themes.
        </span>
        <button
          className="h-10 rounded-md bg-white px-4 text-sm font-medium text-gray-900"
          onClick={toggleTheme}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
