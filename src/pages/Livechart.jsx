import React from "react";
import flowImage from "../assets/drawing.gif"; // Ensure path is correct

export default function Livechart() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="relative w-[800px] h-[600px] overflow-hidden border border-gray-300 rounded-xl">
        {/* Background GIF */}
        <img src={flowImage} alt="Pipe Flow Diagram" className="w-full h-full object-contain" />
        <div className="absolute left-40 bottom-20 h-20 w-0.5 bg-blue-500" />
        <div className="absolute left-60 bottom-20 h-20 w-0.5 bg-blue-500" />
        <div className="absolute left-80 bottom-20 h-20 w-0.5 bg-blue-500" />
      </div>
    </div>
  );
}

