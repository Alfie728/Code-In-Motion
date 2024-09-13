"use client";
import TabsClipPath from "../../components/TabsClipPath";
import ThemeSwitch from "../../components/ThemeSwitch";

export default function ClipPathPage() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-64px)] h-full">
      <h2 className="text-3xl font-bold mb-8 mt-8">Clip Path Animation</h2>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] gap-4">
        <div className="rounded-lg p-8 flex flex-col items-center justify-center overflow-hidden bg-slate-400">
          <TabsClipPath />
        </div>
        <div className="border border-gray-200 rounded-lg p-8 bg-slate-400">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
