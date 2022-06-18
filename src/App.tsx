import { AppShell, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Helmet } from "react-helmet";
import { lazy, useEffect, useState } from "react";
import { SWRConfig } from "swr";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./routes/Home"));

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "dark" }}
      >
        <ModalsProvider>
          <AppShell>
            <Helmet>
              <title>Going Merry Clock</title>
            </Helmet>
            <Home />
          </AppShell>
        </ModalsProvider>
      </MantineProvider>
    </SWRConfig>
  );
}

export default App;
