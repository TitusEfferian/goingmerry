import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";
import React from "react";
import Header from "../Header";

describe("Header Unit Test", () => {
  it("should render header correctly", async () => {
    const { getByTestId } = render(
      <ColorSchemeProvider colorScheme={"dark"} toggleColorScheme={() => {}}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "dark" }}
        >
          <Header />
        </MantineProvider>
      </ColorSchemeProvider>
    );
    expect(getByTestId("header-title")).toBeDefined();
  });
});
