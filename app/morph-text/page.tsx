"use client";
import MorphTextDemo from "../../components/MorphTextDemo";

export default function MorphTextPage() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-64px)] h-full">
      <h2 className="text-3xl font-bold mb-8 mt-8">MorphText Demo</h2>
      <div className="border border-gray-200 rounded-lg flex flex-col items-center justify-center overflow-hidden">
        <MorphTextDemo />
      </div>
    </div>
  );
}
