import { Loader, Stack, Title } from "@mantine/core";
import { memo } from "react";
import { useHomeState } from "../contexts";

const CurrentLocation = () => {
  const { currentLocationTime } = useHomeState();
  return (
    <Stack
      data-testid="current-location-container"
      spacing={"lg"}
      align="center"
    >
      <Title order={3}>Bali</Title>
      {currentLocationTime ? (
        <Title data-testid="current-location-timer" order={1}>
          {currentLocationTime}
        </Title>
      ) : (
        <Loader />
      )}
    </Stack>
  );
};

export default memo(CurrentLocation);
