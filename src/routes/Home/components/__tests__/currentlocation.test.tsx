import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { HomeProvider } from "../../contexts";
import CurrentLocation from "../CurrentLocation";

describe("Current Location Unit Test", () => {
  beforeAll(() => {
    require("fake-indexeddb/auto");
  });
  it("should render Current Location correctly", async () => {
    render(
      <HomeProvider>
        <CurrentLocation />
      </HomeProvider>
    );
    expect(screen.getByTestId("current-location-container")).toBeDefined();
  });

  it("should render Current Location with current time correctly", async () => {
    render(
      <HomeProvider>
        <CurrentLocation />
      </HomeProvider>
    );
    await waitFor(
      () => {
        expect(screen.getByTestId("current-location-timer")).toBeDefined();
      },
      {
        timeout: 10000,
      }
    );
  });
});
