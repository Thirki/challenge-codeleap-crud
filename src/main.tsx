
import App from "./App.tsx";
import GlobalStyle from "./styles/globalStyles.ts";
import Modal from 'react-modal';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.ts";
import { LoginProvider } from "./contexts/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

Modal.setAppElement('#root');

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
