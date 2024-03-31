'use client'
import React from "react";

function MyAwesomeThemeComponent() {
    const [theme, setTheme] = React.useState('fantasy');
    const toggleTheme = () => {
        setTheme(theme === 'black' ? 'fantasy' : 'black');
    };

    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
        document?.querySelector('html')?.setAttribute('data-theme', theme);
    }, [theme]);
    return (
        <label className="swap swap-rotate">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on">DARKMODE</div>
            <div className="swap-off">LIGHTMODE</div>
        </label>
    );
}

export default MyAwesomeThemeComponent