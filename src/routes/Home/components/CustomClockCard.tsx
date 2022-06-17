import { ActionIcon, Card, Center, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { lazy, Suspense } from "react";
import { CirclePlus } from "tabler-icons-react";

const LazyTest = lazy(() => import("./TestLazy"));

const CustomClockCard = () => {
  const { ref, hovered } = useHover();
  const modals = useModals();
  const handleOpenModal = () => {
    modals.openModal({
      title: "hello",
      children: (
        <Suspense>
          <LazyTest />
        </Suspense>
      ),
    });
  };
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
          <ActionIcon
            onClick={handleOpenModal}
            size={"xl"}
            variant="transparent"
          >
            <CirclePlus />
          </ActionIcon>
        </Tooltip>
      </Center>
    </Card>
  );
};

export default CustomClockCard;
