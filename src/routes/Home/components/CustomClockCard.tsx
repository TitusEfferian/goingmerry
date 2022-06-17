import { ActionIcon, Card, Center } from "@mantine/core";
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
        <ActionIcon size={"xl"} variant="transparent">
          <CirclePlus />
        </ActionIcon>
      </Center>
    </Card>
  );
};

export default CustomClockCard;
