import { Center, Stack } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import CurrentLocation from "./components/CurrentLocation";
import CustomClockList from "./components/CustomClockList";
import { HomeProvider } from "./contexts";

const Home = () => {
  return (
    <HomeProvider>
      <ModalsProvider>
        <Center mt={"xl"}>
          <Stack spacing={"xl"}>
            <CurrentLocation />
            <CustomClockList />
          </Stack>
        </Center>
      </ModalsProvider>
    </HomeProvider>
  );
};

export default Home;
