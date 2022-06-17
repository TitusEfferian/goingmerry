import { Select, Text } from "@mantine/core";

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
  return (
    <Select
      onChange={(e) => {
        console.log(e);
      }}
      searchable
      data={data_set}
    />
  );
};

export default AvailableTimezone;
