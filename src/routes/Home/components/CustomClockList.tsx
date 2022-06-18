import { Card, Group, Text } from "@mantine/core";
import { memo } from "react";
import { useHomeState } from "../contexts";
import CustomClockCard from "./CustomClockCard";

import CustomInputClockCard from "./CustomInputClockCard";

const CustomClockList = () => {
  const { listOfTimezone } = useHomeState();
  if (listOfTimezone.length === 0) {
    return <CustomInputClockCard />;
  }
  if (listOfTimezone.length === 4) {
    return (
      <Group>
        {listOfTimezone.map((x) => {
          return <CustomClockCard swrKey={x.swrKey} />;
        })}
      </Group>
    );
  }
  return (
    <Group>
      {listOfTimezone.map((x, y) => {
        return <CustomClockCard swrKey={x.swrKey} />;
      })}
      <CustomInputClockCard />
    </Group>
  );
};

export default memo(CustomClockList);
