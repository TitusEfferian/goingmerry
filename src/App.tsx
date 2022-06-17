import { AppShell, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { lazy, useEffect, useState } from "react";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./routes/Home"));

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <ModalsProvider>
        <AppShell>
          <Home />
        </AppShell>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
