import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import Header from "../Header";

describe("Header Unit Test", () => {
  it("should render header dark correctly", async () => {
    render(
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
    expect(screen.getByTestId("header-title")).toBeDefined();
    expect(screen.getByTestId("header-sun")).toBeDefined();
  });
  it("should render header light correctly", async () => {
    const mockFunc = jest.fn();
    render(
      <ColorSchemeProvider colorScheme={"light"} toggleColorScheme={mockFunc}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "light" }}
        >
          <Header />
        </MantineProvider>
      </ColorSchemeProvider>
    );
    fireEvent.click(screen.getByTestId("header-action-icon"));
    expect(screen.getByTestId("header-title")).toBeDefined();
    expect(screen.getByTestId("header-moon")).toBeDefined();
    expect(mockFunc).toHaveBeenCalled();
  });
});
