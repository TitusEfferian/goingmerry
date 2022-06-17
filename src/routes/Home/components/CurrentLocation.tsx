import { Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

const CurrentLocation = () => {
  return (
    <Stack spacing={"lg"} align="center">
      <Title order={3}>Bali</Title>
      <Title order={1}>21:00</Title>
    </Stack>
  );
};

export default CurrentLocation;
