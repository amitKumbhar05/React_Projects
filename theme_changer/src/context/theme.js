import { createContext,useContext } from "react";

export const themechange = createContext({
    themeMode : 'light',
    lightMode : ()=>{},
    darkMode : ()=>{},
})

export const Themeprovider = themechange.Provider

export default function useTheme () {
    return useContext(themechange);
}