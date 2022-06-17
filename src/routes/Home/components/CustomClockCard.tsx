import { ActionIcon, Card, Center, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { CirclePlus } from "tabler-icons-react";

const CustomClockCard = () => {
  const { ref, hovered } = useHover();
  return (
    <Card
      shadow={"md"}
      ref={ref}
      sx={{
        width: 280,
        height: 400,
        cursor: hovered ? "pointer" : "unset",
      }}
    >
      <Center sx={{ height: "100%" }}>
        <Tooltip
          opened
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
      </Center>
    </Card>
  );
};

export default CustomClockCard;