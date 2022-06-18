import { Card, Group } from "@mantine/core";
import { useHomeState } from "../contexts";

import CustomClockCard from "./CustomClockCard";

const CustomClockList = () => {
  const { listOfTimezone } = useHomeState();
  return (
    <Group>
      {listOfTimezone.map((x) => {
        return <CustomClockCard />;
      })}
    </Group>
  );
};

export default CustomClockList;
