"use client";

import Link from "next/link";
import { animations } from "@/components/data";
export default function Home() {
  return (
    <div className="flex h-full min-h-[calc(100vh-64px)] flex-col items-center">
      <h1 className="mb-12 mt-12 text-4xl font-bold">
        Code In Motion
      </h1>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-4">
        {animations.map((animation) => (
          <Link key={animation.path} href={animation.path}>
            <div className="rounded-lg border border-gray-200 p-6 transition-colors hover:bg-gray-50">
              <h2 className="text-center text-xl font-semibold">
                {animation.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
