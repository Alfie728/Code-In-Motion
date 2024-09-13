"use client";

import Link from "next/link";
import { animations } from "@/components/data";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-64px)] h-full">
      <h1 className="text-4xl font-bold mb-12 mt-12">Animation Showcase</h1>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-4">
        {animations.map((animation) => (
          <Link key={animation.path} href={animation.path}>
            <div className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <h2 className="text-xl font-semibold text-center">{animation.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
