import { Box, Button, Center, Stack, Text } from "@mantine/core";
import CurrentLocation from "./components/CurrentLocation";
import CustomClockList from "./components/CustomClockList";

const Home = () => {
  return (
    <Center mt={"xl"}>
      <Stack spacing={"xl"}>
        <CurrentLocation />
        <CustomClockList />
      </Stack>
    </Center>
  );
};

export default Home;
