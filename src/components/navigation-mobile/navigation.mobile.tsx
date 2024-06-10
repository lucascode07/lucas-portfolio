import Link from "next/link";

export default function NavigationMobile() {
  return (
    <nav
      className="py-5 px-10 rounded-xl container"
      id="navigation-popover"
      popover="manual"
    >
      <ul>
        <li className="font-medium py-2">
          <Link
            href="/about"
            className="flex items-center gap-2 hover:text-[--primary-color] transition-colors"
          >
            <i className="fa-regular fa-user"></i>
            About
          </Link>
        </li>
        <li className="font-medium py-2">
          <Link
            href="/resume"
            className="flex items-center gap-2 hover:text-[--primary-color] transition-colors"
          >
            <i className="fa-regular fa-file-lines"></i>
            Resume
          </Link>
        </li>
        <li className="font-medium py-2">
          <Link
            href="/works"
            className="flex items-center gap-2 hover:text-[--primary-color] transition-colors"
          >
            <i className="fa-solid fa-cube"></i>
            Works
          </Link>
        </li>
        <li className="font-medium py-2">
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-[--primary-color] transition-colors"
          >
            <i className="fa-regular fa-address-book"></i>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
