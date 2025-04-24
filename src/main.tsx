import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import GlobalStyle from "./styles/globalStyles.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { LoginProvider } from "./contexts/index.ts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <LoginProvider>
          <App />
          <GlobalStyle />
        </LoginProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
