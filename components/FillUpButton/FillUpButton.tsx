const FillUpButton = () => {
  return (
    <a
      href="#"
      draggable="false"
      aria-labelledby="title"
      className="group relative flex max-w-fit items-center justify-center rounded-lg border-2 border-indigo-600 px-12 py-6 text-indigo-600"
    >
      <span
        id="title"
        className="text-2xl font-medium uppercase tracking-wider"
      >
        Hover me
      </span>
      <div
        className="absolute inset-0 flex items-center justify-center bg-indigo-600 px-12 py-6 text-white ease-out [clip-path:circle(20%_at_-20%_-20%)] group-hover:[clip-path:circle(170%_at_120%_120%)] motion-safe:transition-[clip-path] motion-safe:duration-500"
        aria-hidden="true"
      >
        <span className="text-2xl font-light uppercase tracking-wider">
          Hover me
        </span>
      </div>
    </a>
  );
};

export default FillUpButton;
