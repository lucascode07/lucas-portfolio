"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ButtonTheme() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button className="btn-header"></button>;
  }

  if (resolvedTheme === "dark") {
    return (
      <button className="btn-header" onClick={() => setTheme("light")}>
        <i className="fa-regular fa-sun"></i>
      </button>
    );
  } else {
    return (
      <button className="btn-header" onClick={() => setTheme("dark")}>
        <i className="fa-solid fa-moon"></i>
      </button>
    );
  }
}
