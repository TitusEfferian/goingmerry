import { Button, Group, Select, Stack, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";

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
];

const AvailableTimezone = () => {
  const modals = useModals();
  return (
    <Stack>
      <Select
        onChange={(e) => {
          console.log(e);
        }}
        searchable
        data={data_set}
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
        <Button>Apply</Button>
      </Group>
    </Stack>
  );
};

export default AvailableTimezone;
