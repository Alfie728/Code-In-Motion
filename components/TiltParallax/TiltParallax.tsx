import Image from "next/image";
import { useRef } from "react";

const TiltParallax = () => {
  const boundingRef = useRef<DOMRect | null>(null);

  return (
    <a
      href=""
      className="block w-full max-w-[300px] aspect-[3/2] lg:hover:transform-style-3d lg:hover:translate-z-[50px] lg:translate-z-0 lg:transition-transform lg:duration-100 lg:hover:z-10"
    >
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * -30;
          const yRotation = (0.5 - yPercentage) * -15;

          ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
        className="lg:hover:transform-style-3d group relative flex h-full w-full flex-col items-center justify-center rounded-lg text-center text-white outline-none hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] ring-offset-gray-900 hover:z-10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
      >
        {/* Background */}
        <div className="ease-out-back-smooth absolute -top-1/2 flex h-[200%] w-full origin-center scale-y-[50%] flex-col items-center rounded-lg text-center ring-1 ring-white ring-opacity-0 transition-transform duration-300 group-hover:ring-opacity-100 lg:group-hover:scale-y-100 bg-[#F57097]">
          {/* Glare Effect */}
          <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)] rounded-lg" />
          {/* Spotlight Effect */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="ease-out-back-smooth absolute top-6 hidden h-64 w-full mix-blend-overlay transition-opacity duration-300 lg:block lg:opacity-0 lg:group-hover:opacity-100"
          >
            <g filter="url(#filter0_f_655_3134)">
              <circle
                cx="45"
                cy="50"
                r="25"
                fill="#ffffff"
                shape-rendering="optimizeSpeed"
              ></circle>
              <circle
                cx="55"
                cy="50"
                r="25"
                fill="#ffffff"
                shape-rendering="optimizeSpeed"
              ></circle>
            </g>
            <defs>
              <filter
                id="filter0_f_655_3134"
                x="0"
                y="0"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
                width="120%"
                height="120%"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="10"
                  result="effect1_foregroundBlur_655_3134"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div
            className="ease-out-back-smooth absolute h-36 rounded-lg opacity-60 transition-opacity duration-300 lg:group-hover:opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          ></div>
        </div>
        {/* Initial Image */}
        <div className="lg:group-hover:transform-style-3d ease-out-back-smooth absolute top-12 origin-top transition-transform duration-300 lg:group-hover:translate-y-[-120px] lg:group-hover:scale-75">
          <div className="lg:group-hover:transform-style-3d translate-z-6 h-11 w-40 md:h-14 md:w-52">
            <Image
              src="https://growth.design/_next/image?url=%2Fcontent%2Flogos%2Fscarcity.png&w=640&q=75"
              alt="logo"
              width={208}
              height={56}
            />
          </div>
        </div>
        {/* Main Image */}
        <div
          className="ease-out-back-smooth absolute hidden h-32 w-32 origin-center -translate-y-5 scale-0 opacity-0 transition duration-300 lg:block lg:group-hover:scale-100 lg:group-hover:opacity-95"
          style={{
            maskImage: "linear-gradient(black 0%, black 75%, transparent 100%)",
          }}
        >
          <Image
            src="https://growth.design/_next/image?url=https://s3.amazonaws.com/files.growth.design/cms/cm0y8s88j001y0tlc3ybybs7l.png&w=384&q=75"
            alt="logo"
            width={144}
            height={144}
            className="w-full h-full"
          />
        </div>
        {/* Footer */}
        <div className="lg:group-hover:transform-style-3d ease-out-back-smooth absolute bottom-6 flex min-h-[96px] w-full flex-col items-center justify-start text-center transition-transform duration-300 lg:group-hover:translate-y-[100%]">
          <div className="lg:group-hover:transform-style-3d ease-out-back-smooth translate-z-6 absolute -top-4 hidden h-full w-full flex-col items-center justify-center gap-1 px-3 duration-300 lg:flex">
            <div className="background py-0.25 lg:group-hover:transform-style-3d rounded-md bg-black bg-opacity-20 px-1.5 text-[0.625rem] font-medium uppercase tracking-widest text-white text-opacity-70 opacity-0 transition-opacity lg:group-hover:opacity-100">
              Other
            </div>
            <p className="text-shadow lg:group-hover:transform-style-3d text-balance text-sm font-medium leading-tight opacity-0 transition-opacity md:text-base md:leading-tight lg:group-hover:opacity-100">
              Scarcity: The&nbsp;3&nbsp;pillars&nbsp;to using it&nbsp;ethically
            </p>
            <div className="lg:group-hover:transform-style-3d flex items-center gap-1 text-xs text-white text-opacity-50 opacity-0 transition-opacity lg:group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.2"
                preserveAspectRatio="none"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p>5 min</p>
            </div>
          </div>
          <p className="lg:group-hover:transform-style-3d ease-out-back-smooth absolute bottom-4 px-3 text-center text-xl font-medium capitalize leading-tight text-white opacity-100 transition-opacity duration-300 md:leading-tight lg:group-hover:opacity-0">
            Scarcity
          </p>
        </div>
      </div>
    </a>
  );
};

export default TiltParallax;
