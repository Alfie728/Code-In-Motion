import Link from "next/link";
import { animations } from "@/components/data";

const Nav = () => {
  return (
    <nav className="border-b border-gray-200 py-4">
      <ul className="flex justify-center space-x-6 overflow-hidden">
        <li>
          <Link href="/" className="relative inline-block group">
            <span className="block transition-all duration-300 transform group-hover:-translate-y-full">
              Home
            </span>
            <span className="absolute top-0 left-0 block w-full h-full transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
              Home
            </span>
          </Link>
        </li>
        {animations.map((animation) => (
          <li key={animation.path}>
            <Link href={animation.path} className="relative inline-block group">
              <span className="block transition-all duration-300 transform group-hover:-translate-y-full">
                {animation.shortName}
              </span>
              <span className="absolute top-0 left-0 block w-full h-full transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
                {animation.shortName}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
