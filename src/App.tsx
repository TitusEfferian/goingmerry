import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { Helmet } from "react-helmet";
import { lazy, useState } from "react";
import { SWRConfig } from "swr";
import { NotificationsProvider } from "@mantine/notifications";

import MantineHeader from "./routes/Home/components/Header";

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./routes/Home"));

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <NotificationsProvider>
            <AppShell header={<MantineHeader />}>
              <Helmet>
                <title>Going Merry Clock</title>
              </Helmet>
              <Home />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </SWRConfig>
  );
}

export default App;
