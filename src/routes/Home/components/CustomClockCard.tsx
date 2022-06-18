import { Card, Stack, Text, Title } from "@mantine/core";
import { memo } from "react";
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
        <Title order={2}>19:00</Title>
        <Stack align={"center"}>
          <Text>AEST</Text>
          <Text>3 hours ahead</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

export default memo(CustomClockCard);
