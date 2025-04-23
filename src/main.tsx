import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import GlobalStyle from "./styles/globalStyles.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>
);
