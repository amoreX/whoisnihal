"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "@phosphor-icons/react";
import { motion } from "motion/react";

const Control = ({
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
      className={`flex items-center cursor-pointer justify-center active:bg-accent/40 transition-colors ${active ? "text-accent" : "text-stone-400 light:text-stone-900"}`}
    >
      {children}
    </button>
  );
};

const Controls = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Handle potential theme context unavailability gracefully
  let theme: "dark" | "light" = "dark";
  let toggleTheme = () => {};

  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch {
    // Theme context not available, use defaults
    console.warn("Theme context not available, using default theme");
  }

  // Use ref to avoid dependency issues
  const toggleThemeRef = useRef(toggleTheme);
  toggleThemeRef.current = toggleTheme;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "h") {
        router.push("/");
      } else if (e.key === "p") {
        router.push("/projects");
      } else if (e.key === "b") {
        router.push("/blog");
      } else if (e.key === "t") {
        toggleThemeRef.current();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <div className="flex gap-6 sticky top-0 bg-background z-[100] h-fit items-stretch select-none py-4  text-base">
      <Control to="/" active={pathname === "/"}>
        [h] Home
      </Control>
      <Control to="/projects" active={pathname?.startsWith("/projects")}>
        [p] Projects
      </Control>
      <Control to="/blog" active={pathname?.startsWith("/blog")}>
        [b] Blog
      </Control>
      <button
        onClick={toggleTheme}
        className={`flex items-center cursor-pointer justify-center text-stone-400 light:text-stone-900 hover:text-accent active:bg-accent/40 transition-colors`}
      >
        [t] Theme
      </button>
      {/*<button
        onClick={toggleTheme}
        className="flex ml-auto items-center cursor-pointer justify-center text-stone-400 hover:text-accent"
        title={`[t] Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>*/}

      <div className="absolute bg-gradient-to-b from-background to-transparent pointer-events-none size-full top-full left-0 "></div>
    </div>
  );
};

export default Controls;
