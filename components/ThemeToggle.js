import React, { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../app/content/ThemeContent";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <Moon size={20} />
            ) : (
                <Sun size={20} />
            )}
        </button>
    );
};

export default ThemeToggle;
