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
        <Text data-testid="header-title">Going Merry Clock</Text>
        <ActionIcon
          onClick={() => {
            toggleColorScheme();
          }}
          variant="transparent"
        >
          {colorScheme === "dark" ? (
            <Sun data-testid="header-sun" size={18} />
          ) : (
            <MoonStars data-testid="header-moon" size={18} />
          )}
        </ActionIcon>
      </Group>
    </Header>
  );
};

export default memo(MantinHeader);
