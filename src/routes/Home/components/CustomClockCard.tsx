import { Card, Stack, Text, Title } from "@mantine/core";
import { memo, useMemo } from "react";
import useSWR from "swr";
import { world_timezone_api } from "../../../swr_types/timezone";

interface AppProps {
  swrKey: string;
  city: string;
}

const CustomClockCard = ({ swrKey, city }: AppProps) => {
  const { data } = useSWR<world_timezone_api>(
    `http://worldtimeapi.org/api/timezone/${swrKey}`
  );
  const currTime = useMemo(() => {
    return new Date().toLocaleString("en-GB", {
      timeZone: swrKey,
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [swrKey]);
  return (
    <Card
      shadow={"md"}
      sx={{
        width: 280,
        height: 400,
      }}
    >
      <Stack
        align={"center"}
        justify="space-around"
        sx={{
          height: "100%",
        }}
      >
        <Text size="xl" weight={"bold"}>
          {city}
        </Text>
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
