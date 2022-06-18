import { Card, Group } from "@mantine/core";
import useSWR from "swr";
import CustomClockCard from "./CustomClockCard";

const CustomClockList = () => {
  const {data} = useSWR('http://worldtimeapi.org/api/timezone')
  console.log(data)
  return (
    <Group>
      <CustomClockCard />
    </Group>
  );
};

export default CustomClockList;
