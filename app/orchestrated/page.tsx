"use client";
import TiltParallax from "@/components/TiltParallax";
import { TrashAnimation } from "../../components/TrashAnimation/trash-animation";

export default function TrashAnimationPage() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-64px)] h-fulls">
      <h1 className="text-3xl font-bold mb-8 mt-8">Orchestrated Animation</h1>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-4">
        <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center overflow-hidden">
          <TrashAnimation />
        </div>
        <div className="border border-gray-200 rounded-lg p-8 overflow-hidden flex items-center justify-center">
          <TiltParallax />
        </div>
      </div>
    </div>
  );
}
