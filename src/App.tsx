import { AppShell, MantineProvider } from "@mantine/core";
import { lazy, useEffect, useState } from "react";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./routes/Home"));

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <AppShell>
        <Home />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
