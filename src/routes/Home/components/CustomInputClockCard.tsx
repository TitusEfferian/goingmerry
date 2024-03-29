import { ActionIcon, Card, Center, Loader, Tooltip } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useModals } from "@mantine/modals";
import { get, set } from "idb-keyval";
import { lazy, memo, Suspense } from "react";
import { CirclePlus } from "tabler-icons-react";
import { useHomeDispatch, useHomeState } from "../contexts";

const AvailableTimezone = lazy(
  () =>
    import(
      /* webpackChunkName: "availab-timezone-select" */ "./AvailableTimezone"
    )
);

const CustomClockCard = () => {
  const { ref, hovered } = useHover();
  const modals = useModals();
  const { showCardTooltip } = useHomeState();
  const homeDispatch = useHomeDispatch();
  const handleOpenModal = async () => {
    homeDispatch({
      type: "CLOSE_CARD_TOOLTIP",
    });
    modals.openModal({
      title: "Choose additional timezone",
      children: (
        <Suspense fallback={<Loader size={"sm"} />}>
          <AvailableTimezone />
        </Suspense>
      ),
    });
    const getTooltipData = await get("show-tooltip");
    if (typeof getTooltipData === "boolean") {
      return;
    }
    if (typeof getTooltipData === "undefined") {
      await set("show-tooltip", false);
    }
  };
  return (
    <Card
      data-testid="input-clock-card"
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
          opened={showCardTooltip}
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

export default memo(CustomClockCard);
