"use client";
import TiltParallax from "@/components/TiltParallax";
import { TrashAnimation } from "../../components/TrashAnimation/trash-animation";
import MultiStepForm from "@/components/MultiStepForm/MultiStepForm";

export default function TrashAnimationPage() {
  return (
    <div className="h-fulls flex min-h-[calc(100vh-64px)] flex-col items-center">
      <h1 className="mb-8 mt-8 text-3xl font-bold">Orchestrated Animation</h1>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-4">
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-200 p-8">
          <TrashAnimation />
        </div>
        <div className="flex items-center justify-center overflow-hidden rounded-lg border border-gray-200 p-8">
          <TiltParallax />
        </div>
        <div className="flex items-center justify-center overflow-hidden rounded-lg border border-gray-200 p-8">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
}
