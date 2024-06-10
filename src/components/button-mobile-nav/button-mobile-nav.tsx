"use client";

import { useState } from "react";

export default function ButtonMobileNav() {
  const [active, setActive] = useState<boolean>();

  const handleClickMenu = () => {
    setActive(!active);
  };

  return (
    <button
      className={`btn-header btn-nav ${active && "active"}`}
      popoverTarget="navigation-popover"
      onClick={handleClickMenu}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
}
