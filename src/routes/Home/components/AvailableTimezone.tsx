import { Button, Group, Select, Stack, Text, TextInput } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { useState } from "react";
import { useHomeDispatch } from "../contexts";

const data_set = [
  {
    label: "Singapore",
    value: "asia/singapore",
  },
  {
    label: "Tokyo",
    value: "asia/tokyo",
  },
  {
    label: "Seoul",
    value: "asia/Seoul",
  },
  {
    label: "Sydney",
    value: "Australia/Sydney",
  },
  {
    label: "London",
    value: "Europe/London",
  },
  {
    label: "Paris",
    value: "Europe/Paris",
  },
  {
    label: "Berlin",
    value: "Europe/Berlin",
  },
  {
    label: "New York",
    value: "America/New_York",
  },
  {
    label: "Los Angeles",
    value: "America/Los_Angeles",
  },
];

const AvailableTimezone = () => {
  const modals = useModals();
  const homeDispatch = useHomeDispatch();
  const [timezone, setTimezone] = useState("");
  const [shortLabel, setShortLabel] = useState("");
  const [errorSelect, setErrorSelect] = useState({
    isError: false,
    message: "",
  });
  return (
    <Stack>
      <Select
        required
        error={errorSelect.isError ? errorSelect.message : null}
        label="Select Timezone"
        onChange={(e) => {
          setTimezone(e ?? "");
          if (errorSelect.isError) {
            setErrorSelect({
              isError: false,
              message: "",
            });
            return;
          }
        }}
        searchable
        data={data_set}
      />
      <TextInput
        onChange={(e) => {
          setShortLabel(e.target.value);
        }}
        placeholder="Label..."
        label="Short Label"
      />
      <Group position="right">
        <Button
          color="red"
          onClick={() => {
            modals.closeAll();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (!timezone) {
              setErrorSelect({
                isError: true,
                message: "Please select timezone",
              });
              return;
            }
            homeDispatch({
              type: "SET_SELECTED_TIMEZONE",
              data: {
                label: shortLabel,
                timezone,
              },
            });
            modals.closeAll();
          }}
        >
          Apply
        </Button>
      </Group>
    </Stack>
  );
};

export default AvailableTimezone;
