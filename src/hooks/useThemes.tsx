import React, { FC, createContext, useContext, ReactNode, useState } from 'react';

type Themes = 'dark' | 'light';

interface ThemesStates {
  themes: Themes
  setThemes(themes: Themes): void
}

export const ThemesContext = createContext<ThemesStates>({} as ThemesStates);

export function useThemes(): ThemesStates {
  const context = useContext(ThemesContext);
  if (context === undefined) {
    throw new Error("useThemes must be used within a ThemesProvider");
  }
  return context;
}

export const ThemespProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themes, setThemes] = useState('light' as Themes);

  return (
    <ThemesContext.Provider value={{themes, setThemes}}>{children}</ThemesContext.Provider>
  )
}