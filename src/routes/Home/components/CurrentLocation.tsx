import { Loader, Stack, Title } from "@mantine/core";
import { memo } from "react";
import { useHomeState } from "../contexts";

const CurrentLocation = () => {
  const { currentLocationTime } = useHomeState();
  return (
    <Stack spacing={"lg"} align="center">
      <Title order={3}>Bali</Title>
      {currentLocationTime ? (
        <Title order={1}>{currentLocationTime}</Title>
      ) : (
        <Loader />
      )}
    </Stack>
  );
};

export default memo(CurrentLocation);
