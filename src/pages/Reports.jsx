import React from "react";
import flowImage from "../assets/nondrawing.gif"; // Ensure Path is correct

export default function Livechart() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="relative w-[800px] h-[600px] overflow-hidden border border-gray-300 rounded-xl">
        {/* Background GIF */}
        <img src={flowImage} alt="Pipe Flow Diagram" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}