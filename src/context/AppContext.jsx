import { Children, createContext, useState } from "react";



export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const[activeMenuItem, setActiveMenuItem] = useState("");

    const updateActiveMenuItem = (menuItem) => {
        setActiveMenuItem(menuItem);
    }

    return <AppContext.Provider value={{activeMenuItem, updateActiveMenuItem}}>
        {children}
    </AppContext.Provider>
}