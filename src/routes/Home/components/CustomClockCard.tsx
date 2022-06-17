import { ActionIcon, Card, Center, Loader, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { lazy, Suspense } from "react";
import { CirclePlus } from "tabler-icons-react";

const AvailableTimezone = lazy(
  () =>
    import(
      /* webpackChunkName: "availab-timezone-select" */ "./AvailableTimezone"
    )
);

const CustomClockCard = () => {
  const { ref, hovered } = useHover();
  const modals = useModals();
  const handleOpenModal = () => {
    modals.openModal({
      title: "hello",
      children: (
        <Suspense fallback={<Loader size={"sm"} />}>
          <AvailableTimezone />
        </Suspense>
      ),
    });
  };
  return (
    <Card
      shadow={"md"}
      ref={ref}
      onClick={handleOpenModal}
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
