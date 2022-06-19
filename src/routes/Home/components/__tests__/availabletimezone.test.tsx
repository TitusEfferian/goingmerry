import { ModalsProvider } from "@mantine/modals";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { SWRConfig } from "swr";
import AvailableTimezone from "../AvailableTimezone";

describe("Available Timezone Test", () => {
  it("should render available timezone correctly", async () => {
    render(
      <SWRConfig
        value={{
          fallback: {},
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ModalsProvider>
          <AvailableTimezone />
        </ModalsProvider>
      </SWRConfig>
    );
    expect(screen.getByTestId("available-timezone-apply")).toBeDefined();
  });
  it("should onChange text input available timezone correctly", async () => {
    global.ResizeObserver = require("resize-observer-polyfill");
    render(
      <SWRConfig
        value={{
          fallback: {},
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ModalsProvider>
          <AvailableTimezone />
        </ModalsProvider>
      </SWRConfig>
    );
    expect(screen.getByTestId("available-timezone-apply")).toBeDefined();
    fireEvent.focus(screen.getByTestId("available-timezone-textinput"));
    fireEvent.change(screen.getByTestId("available-timezone-textinput"), {
      target: {
        value: "unit test",
      },
    });
  });
  it("should change select available timezone correctly", async () => {
    global.ResizeObserver = require("resize-observer-polyfill");
    render(
      <SWRConfig
        value={{
          fallback: {},
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ModalsProvider>
          <AvailableTimezone />
        </ModalsProvider>
      </SWRConfig>
    );
    expect(screen.getByTestId("available-timezone-apply")).toBeDefined();
    // still can't mock select from  mantine
    // fireEvent.focus(screen.getByTestId('available-timezone-select'));
    // fireEvent.click(screen.getByText('Singapore'));
    fireEvent.click(screen.getByTestId("available-timezone-apply"));
  });

  it("should cancel available timezone correctly", async () => {
    global.ResizeObserver = require("resize-observer-polyfill");
    render(
      <SWRConfig
        value={{
          fallback: {},
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ModalsProvider>
          <AvailableTimezone />
        </ModalsProvider>
      </SWRConfig>
    );
    expect(screen.getByTestId("available-timezone-apply")).toBeDefined();
    fireEvent.click(screen.getByTestId("available-timezone-cancel"));
  });

  it("should check text input only for 20 length character correctly", async () => {
    global.ResizeObserver = require("resize-observer-polyfill");
    render(
      <SWRConfig
        value={{
          fallback: {},
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ModalsProvider>
          <AvailableTimezone />
        </ModalsProvider>
      </SWRConfig>
    );
    expect(screen.getByTestId("available-timezone-apply")).toBeDefined();
    fireEvent.focus(screen.getByTestId("available-timezone-textinput"));
    fireEvent.change(screen.getByTestId("available-timezone-textinput"), {
      target: {
        value: "12345678901234567890123",
      },
    });
  });
});
