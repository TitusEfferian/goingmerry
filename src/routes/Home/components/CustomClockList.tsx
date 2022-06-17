import { Card, Group } from "@mantine/core";
import CustomClockCard from "./CustomClockCard";

const CustomClockList = () => {
  return (
    <Group>
      <CustomClockCard />
      <CustomClockCard />
      <CustomClockCard />
      <CustomClockCard />
    </Group>
  );
};

export default CustomClockList;
