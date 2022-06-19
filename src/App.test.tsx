import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { wait } from "@testing-library/user-event/dist/utils";

test("renders learn react link", async () => {
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText("Going Merry Clock")).toBeDefined();
  });
});
