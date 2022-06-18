import {
  ActionIcon,
  Group,
  Header,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { memo } from "react";
import { MoonStars, Sun } from "tabler-icons-react";

const MantinHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Header height={70} p="md">
      <Group
        position="apart"
        sx={{
          height: "100%",
        }}
      >
        <Text>Going Merry Clock</Text>
        <ActionIcon
          onClick={() => {
            toggleColorScheme();
          }}
          variant="transparent"
        >
          {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
      </Group>
    </Header>
  );
};

export default memo(MantinHeader);
