import { Card, Text } from "@mantine/core";
import { memo } from "react";
import useSWR from "swr";
import { world_timezone_api } from "../../../swr_types/timezone";

interface AppProps {
  swrKey: string;
}

const CustomClockCard = ({ swrKey }: AppProps) => {
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
      <Text>{data?.abbreviation || ""}</Text>
      {/* <Center sx={{ height: "100%" }}>
        <Tooltip
          opened={showCardTooltip}
          transition={"slide-up"}
          transitionDuration={1000}
          withArrow
          label="add up to 4 of your additional timezone here"
          position="bottom"
        >
          <ActionIcon size={"xl"} variant="transparent">
            <CirclePlus />
          </ActionIcon>
        </Tooltip>
      </Center> */}
    </Card>
  );
};

export default memo(CustomClockCard);
