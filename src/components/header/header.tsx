import Link from "next/link";
import "./header.css";
import ButtonMobileNav from "../button-mobile-nav/button-mobile-nav";
import NavigationMobile from "../navigation-mobile/navigation.mobile";
import ButtonTheme from "../button-theme/button-theme";

export default function Header() {
  return (
    <header className="mb-12 flex justify-between items-center container">
      <h1 className="text-3xl font-bold">
        <Link href="/">Lucas</Link>
      </h1>
      <div className="flex items-center gap-[10px]">
        <ButtonTheme />
        <ButtonMobileNav />
      </div>

      <NavigationMobile />
    </header>
  );
}
