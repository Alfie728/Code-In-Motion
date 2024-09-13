"use client";
import FillUpButton from "@/components/FillUpButton";
import TabsClipPath from "../../components/TabsClipPath";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function ClipPathPage() {
  return (
    <div className="flex h-full min-h-[calc(100vh-64px)] flex-col items-center">
      <h2 className="mb-8 mt-8 text-3xl font-bold">Clip Path Animation</h2>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] gap-4">
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-400 p-4">
          <TabsClipPath />
        </div>
        <div className="rounded-lg border border-gray-200 bg-slate-400 p-8">
          <ThemeSwitch />
        </div>
        <div className="grid place-items-center rounded-lg border border-gray-200 bg-slate-400 p-8">
          <FillUpButton />
        </div>
      </div>
    </div>
  );
}
