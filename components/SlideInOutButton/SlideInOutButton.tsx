const SlideInOutButton = () => {
  return (
    <div className="group relative inline-block cursor-pointer overflow-hidden rounded-lg bg-white px-12 py-6 text-black">
      <span className="duration-600 relative z-10 text-2xl font-medium transition-colors ease-[cubic-bezier(0.53,0.21,0,1)] group-hover:text-white">
        Hover me
      </span>
      <div className="duration-600 absolute inset-0 z-0 origin-right scale-x-0 bg-[hsl(244,63%,69%)] transition-transform ease-[cubic-bezier(0.53,0.21,0,1)] group-hover:origin-left group-hover:scale-x-100"></div>
    </div>
  );
};

export default SlideInOutButton;
