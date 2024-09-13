import TiltParallax from "./TiltParallax/TiltParallax";

const TiltParallaxDemo = () => {
  return (
    <div className="grid w-[800px] grid-cols-2 grid-rows-[9rem] gap-2 md:grid-cols-3 xl:grid-cols-3 xl:gap-3 2xl:grid-cols-4">
      <TiltParallax />
      <TiltParallax />
      <TiltParallax />
      <TiltParallax />
      <TiltParallax />
      <TiltParallax />
    </div>
  );
};
export default TiltParallaxDemo