"use client";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-2xl hover:text-amber-500 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-2xl hover:text-amber-500 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
