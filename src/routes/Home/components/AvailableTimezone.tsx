import { Button, Group, Select, Stack, TextInput } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { memo, useState } from "react";
import useSWR from "swr";
import { useHomeDispatch, useHomeState } from "../contexts";

const data_set = [
  {
    label: "Singapore",
    value: "Asia/Singapore",
  },
  {
    label: "Tokyo",
    value: "Asia/Tokyo",
  },
  {
    label: "Seoul",
    value: "Asia/Seoul",
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

  const [fetchTimezone, setFetchTimezone] = useState({
    shouldFetch: false,
    isLoading: false,
  });
  const { listOfTimezone } = useHomeState();

  useSWR(
    () => {
      if (!fetchTimezone.shouldFetch) {
        return null;
      }
      return `https://worldtimeapi.org/api/timezone/${timezone}`;
    },
    {
      onSuccess: () => {
        setFetchTimezone({
          shouldFetch: false,
          isLoading: false,
        });
        homeDispatch({
          type: "SET_SELECTED_TIMEZONE",
          data: {
            label: shortLabel,
            timezone,
          },
        });
        modals.closeAll();
      },
      onError: (err) => {
        showNotification({
          message: "error fetch api",
          title: "network error",
          color: "red",
        });
      },
    }
  );
  return (
    <Stack data-testid="available-timezone-container">
      <Select
        data-testid="available-timezone-select"
        required
        error={errorSelect.isError ? errorSelect.message : null}
        label="Select Timezone"
        onChange={(e) => {
          setTimezone(e || "");
          if (errorSelect.isError) {
            setErrorSelect({
              isError: false,
              message: "",
            });
            return;
          }
        }}
        searchable
        // validate no duplicate world clock
        data={data_set.filter(
          (item) => listOfTimezone.findIndex((i) => i.swrKey === item.value) < 0
        )}
      />
      <TextInput
        data-testid="available-timezone-textinput"
        onChange={(e) => {
          setShortLabel(e.target.value);
        }}
        error={
          shortLabel.length >= 20
            ? "Label can only contains up to 20 letters."
            : null
        }
        placeholder="Label..."
        label="Short Label"
      />
      <Group position="right">
        <Button
          data-testid="available-timezone-cancel"
          color="red"
          onClick={() => {
            modals.closeAll();
          }}
        >
          Cancel
        </Button>
        <Button
          data-testid="available-timezone-apply"
          loading={fetchTimezone.isLoading}
          onClick={() => {
            if (shortLabel.length >= 20) {
              return;
            }
            if (!timezone) {
              setErrorSelect({
                isError: true,
                message: "Please select timezone",
              });
              return;
            }
            setFetchTimezone({
              shouldFetch: true,
              isLoading: true,
            });
          }}
        >
          Apply
        </Button>
      </Group>
    </Stack>
  );
};

export default memo(AvailableTimezone);
