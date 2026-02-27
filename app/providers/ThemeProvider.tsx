"use client";

import React, { useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: (() => {
          const isDark = mode === "dark";
          return {
            mode,
            primary: {
              main: "#1976d2",
            },
            secondary: {
              main: "#ff8c42",
            },
            background: {
              default: isDark ? "#111418" : "#ffffff",
              paper: isDark ? "#1a1f27" : "#ffffff",
            },
            ...(isDark
              ? {
                  text: {
                    primary: "#f5f7fa",
                    secondary: "#b5beca",
                  },
                }
              : {}),
          };
        })(),
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === "dark" ? "#0f1f3a" : undefined,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
