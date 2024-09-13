"use client";

import ShinyButton from "@/components/ShinyButton/ShinyButton";

export default function ClipPathPage() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-64px)] h-full">
      <h2 className="text-3xl font-bold mb-8 mt-8">Animated Buttons</h2>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-4">
        <div className="rounded-lg p-8 flex flex-col items-center justify-center overflow-hidden bg-black">
          <ShinyButton />
        </div>
      </div>
    </div>
  );
}
