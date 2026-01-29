"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState, useCallback } from "react";

const NavLink = ({
  children,
  active,
  to,
}: {
  children: ReactNode;
  active: boolean;
  to: string;
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(to)}
      className={`cursor-pointer transition-colors duration-200 ${
        active 
          ? "text-white dark:text-white light:text-black" 
          : "text-zinc-600 hover:text-zinc-300"
      }`}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.remove("dark", "light");
      document.body.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      document.body.classList.remove("dark", "light");
      document.body.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "h") router.push("/");
      else if (e.key === "b") router.push("/blog");
      else if (e.key === "t") toggleTheme();
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [router, toggleTheme]);

  return (
    <div className="flex gap-6 sticky top-0 bg-zinc-950/90 dark:bg-zinc-950/90 light:bg-white/90 backdrop-blur-md z-[100] py-6 text-sm">
      <NavLink to="/" active={pathname === "/"}>
        <span className="text-zinc-500 mr-1">[h]</span>
        home
      </NavLink>
      <NavLink to="/blog" active={pathname?.startsWith("/blog") ?? false}>
        <span className="text-zinc-500 mr-1">[b]</span>
        blog
      </NavLink>
      <button
        onClick={toggleTheme}
        className="ml-auto cursor-pointer text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
      >
        <span className="text-zinc-500 mr-1">[t]</span>
        {mounted && (theme === "dark" ? "light" : "dark")}
        {!mounted && "theme"}
      </button>
    </div>
  );
};

export default Navbar;
