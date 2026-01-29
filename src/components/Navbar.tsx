"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

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
      className={`flex items-center cursor-pointer hover:text-white dark:hover:text-white light:hover:text-black justify-center ${
        active ? "text-white dark:text-white light:text-black" : "text-zinc-400"
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

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "h") {
        router.push("/");
      } else if (e.key === "p") {
        router.push("/projects");
      } else if (e.key === "b") {
        router.push("/blog");
      } else if (e.key === "t") {
        toggleTheme();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [router, theme]);

  return (
    <div className="flex gap-6 sticky top-0 bg-zinc-950 dark:bg-zinc-950 light:bg-white justify-between sm:justify-start z-[100] h-fit items-stretch select-none py-4 text-sm">
      <NavLink to="/" active={pathname === "/"}>
        <span className="hidden sm:inline">[h]</span> home
      </NavLink>
      <NavLink to="/projects" active={pathname?.startsWith("/projects") ?? false}>
        <span className="hidden sm:inline">[p]</span> projects
      </NavLink>
      <NavLink to="/blog" active={pathname?.startsWith("/blog") ?? false}>
        <span className="hidden sm:inline">[b]</span> blog
      </NavLink>
      <button
        onClick={toggleTheme}
        className="flex sm:ml-auto items-center cursor-pointer justify-center text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black"
      >
        <span className="hidden sm:inline">[t]</span> theme
      </button>
    </div>
  );
};

export default Navbar;
