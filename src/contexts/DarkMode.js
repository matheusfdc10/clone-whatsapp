import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

const theme = {
    light: {
        colorChat: '#e5ddd5',

        color3: '#fff',

        colorFont: '#fff'
    },
    dark: {
        colorChat: '#182026',
        colorSidebar: '#111b21',
        color3: '#202c33',
        colorSelected: '#2a3942',
        colorIcon: '#aebac1',
        colorInput: '#d1d7db',
        colorDate: '#8696a0',
        colorFont: '#000'
    }
}

export function DarkModeProvider({ children }) {
    const themeLocalStorage = localStorage.getItem('theme')
    const [themeLocal, setThemeLocal] = useState(themeLocalStorage)


    const handleDarkMode = () => {
        if(!themeLocal){
            localStorage.setItem("theme", 'dark')
        }
        
        localStorage.setItem("theme", themeLocal == 'dark' ? 'light' : 'dark')
        setThemeLocal(localStorage.getItem('theme'))
    }

    return (
        <DarkModeContext.Provider
            value={{
                handleDarkMode,
                theme: theme ? theme[themeLocal] : theme.light,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    );
}