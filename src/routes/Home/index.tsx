import { Box, Button, Center, Stack, Text } from "@mantine/core";
import CurrentLocation from "./components/CurrentLocation";
import CustomClockList from "./components/CustomClockList";
import { HomeProvider } from "./contexts";

const Home = () => {
  return (
    <HomeProvider>
      <Center mt={"xl"}>
        <Stack spacing={"xl"}>
          <CurrentLocation />
          <CustomClockList />
        </Stack>
      </Center>
    </HomeProvider>
  );
};

export default Home;
