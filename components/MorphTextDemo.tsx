"use client";
import { useEffect, useState } from "react";
import MorphText from "./MorphText";

const MorphTextDemo = () => {
  const [initialText, setInitialText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [currentText, setCurrentText] = useState(initialText);

  useEffect(() => {
    const swapText = () => {
      setCurrentText((prev) =>
        prev === initialText ? targetText : initialText
      );
    };

    const interval = setInterval(swapText, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [initialText, targetText]);

  return (
    <div className="max-w-md mx-auto p-6">
      <label htmlFor="initialText">Initial Text:</label>
      <input
        type="text"
        placeholder="Enter initial text"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={(e) => setInitialText(e.target.value)}
      />
      <label htmlFor="targetText">Target Text:</label>
      <input
        type="text"
        placeholder="Enter target text"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        onChange={(e) => setTargetText(e.target.value)}
      />

      <div className="p-4 bg-gray-100 rounded text-center text-2xl mt-4">
        <MorphText>{currentText}</MorphText>
      </div>
    </div>
  );
};

export default MorphTextDemo;
