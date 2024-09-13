import Link from "next/link";
import { animations } from "@/components/data";

const Nav = () => {
  return (
    <nav className="border-b border-gray-200 py-4">
      <ul className="flex justify-center space-x-6 overflow-hidden">
        <li>
          <Link href="/" className="group relative block">
            <span className="block transition-all duration-300 group-hover:-translate-y-full">
              Home
            </span>
            <span className="absolute left-0 top-0 translate-y-full transform transition-all duration-300 group-hover:translate-y-0">
              Home
            </span>
          </Link>
        </li>
        {animations.map((animation) => (
          <li key={animation.path}>
            <Link href={animation.path} className="group relative block">
              <span className="block transform transition-all duration-300 group-hover:-translate-y-full">
                {animation.shortName}
              </span>
              <span className="absolute left-0 top-0 translate-y-full transform transition-all duration-300 group-hover:translate-y-0">
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
