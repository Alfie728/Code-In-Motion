"use client";

import FillUpButton from "@/components/FillUpButton";
import ShinyButton from "@/components/ShinyButton";
import SlideInOutButton from "@/components/SlideInOutButton";

export default function ButtonPage() {
  return (
    <div className="flex h-full min-h-[calc(100vh-64px)] flex-col items-center">
      <h2 className="mb-8 mt-8 text-3xl font-bold">Animated Buttons</h2>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-4">
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-black p-8">
          <ShinyButton />
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-400 p-8">
          <FillUpButton />
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-400 p-8">
          <SlideInOutButton />
        </div>
      </div>
    </div>
  );
}
