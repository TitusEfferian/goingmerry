import { Box, Button, Center, Text } from "@mantine/core";
import CurrentLocation from "./components/CurrentLocation";

const Home = () => {
  return (
    <Center mt={'xl'}>
      <CurrentLocation />
    </Center>
  );
};

export default Home;
