import { ActionIcon, Card, Stack, Text, Title } from "@mantine/core";
import { memo, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { Adjustments, Trash } from "tabler-icons-react";
import { world_timezone_api } from "../../../swr_types/timezone";
import { useHomeDispatch, useHomeState } from "../contexts";

interface AppProps {
  swrKey: string;
  city: string;
  label: string;
}

const CustomClockCard = ({ swrKey, city, label }: AppProps) => {
  const { data } = useSWR<world_timezone_api>(
    `http://worldtimeapi.org/api/timezone/${swrKey}`
  );
  const { currentLocationTime } = useHomeState();
  const [currTime, setCurrTime] = useState("");
  const homeDispatch = useHomeDispatch();

  // listen to single listener to broadcast all the minutes changes.
  useEffect(() => {
    if (currentLocationTime) {
      setCurrTime(
        new Date().toLocaleString("en-GB", {
          timeZone: swrKey,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
  }, [currentLocationTime, swrKey]);
  return (
    <Card
      shadow={"md"}
      sx={{
        width: 280,
        height: 400,
        position: "relative",
        overflow: "unset",
      }}
    >
      <ActionIcon
        size={"sm"}
        variant="transparent"
        onClick={() => {
          homeDispatch({
            type: "DELETE_SELECTED_TIMEZONE",
            data: swrKey,
          });
        }}
        sx={{
          position: "absolute",
          top: -10,
          right: -8,
        }}
      >
        <Trash />
      </ActionIcon>
      <Stack
        align={"center"}
        justify="space-around"
        sx={{
          height: "100%",
        }}
      >
        <Stack>
          <Text size="xl" weight={"bold"}>
            {city}
          </Text>
          <Text>{label}</Text>
        </Stack>
        <Title order={2}>{currTime}</Title>
        <Stack align={"center"}>
          <Text>{data?.abbreviation || ""}</Text>
          <Text>3 hours ahead</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

export default memo(CustomClockCard);
