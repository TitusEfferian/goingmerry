import { ModalsProvider } from "@mantine/modals";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import { HomeProvider, useHomeDispatch } from "../../contexts";
import CustomClockList from "../CustomClockList";

const MockEffectSingleClock = () => {
  const dispatch = useHomeDispatch();
  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_TIMEZONE",
      data: {
        label: "Tokyo",
        timezone: "Asia/Tokyo",
      },
    });
  }, [dispatch]);
  return <CustomClockList />;
};

const MockEffectMaxClock = () => {
  const dispatch = useHomeDispatch();
  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_TIMEZONE",
      data: {
        label: "Tokyo",
        timezone: "Asia/Tokyo",
      },
    });
    dispatch({
      type: "SET_SELECTED_TIMEZONE",
      data: {
        label: "Paris",
        timezone: "Europe/Paris",
      },
    });
    dispatch({
      type: "SET_SELECTED_TIMEZONE",
      data: {
        label: "Tokyo",
        timezone: "Asia/Singapore",
      },
    });
    dispatch({
      type: "SET_SELECTED_TIMEZONE",
      data: {
        label: "Tokyo",
        timezone: "Australia/Sydney",
      },
    });
  }, [dispatch]);
  return <CustomClockList />;
};

describe("Clock List Unit Test", () => {
  beforeAll(() => {
    require("fake-indexeddb/auto");
  });
  it("should render clock list correctly", async () => {
    render(
      <SWRConfig
        value={{
          fallback: {
            "https://worldtimeapi.org/api/timezone/Asia/Tokyo": {
              abbreviation: "JST",
              utc_offset: "+09:00",
              raw_offset: 32400,
              datetime: "2022-06-19T16:32:48.428852+09:00",
            },
          },
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ModalsProvider>
          <HomeProvider>
            <MockEffectSingleClock />
          </HomeProvider>
        </ModalsProvider>
      </SWRConfig>
    );
    await waitFor(
      () => {
        expect(screen.getByTestId("clock-card-tokyo")).toBeDefined();
      },
      {
        timeout: 10000,
      }
    );

    // try to delete
    fireEvent.click(screen.getByTestId("clock-card-trash-asia/tokyo"));
    await waitFor(
      () => {
        expect(screen.getByTestId("input-clock-card")).toBeDefined();
      },
      {
        timeout: 10000,
      }
    );
  });

  it("should render clock max with 4 list correctly", async () => {
    render(
      <SWRConfig
        value={{
          fallback: {
            "https://worldtimeapi.org/api/timezone/Asia/Tokyo": {
              abbreviation: "JST",
              utc_offset: "+09:00",
              raw_offset: 32400,
              datetime: "2022-06-19T16:32:48.428852+09:00",
            },
            "https://worldtimeapi.org/api/timezone/Europe/Paris": {
              abbreviation: "CEST",
              client_ip: "202.146.234.244",
              datetime: "2022-06-19T09:52:30.092172+02:00",
              day_of_week: 0,
              day_of_year: 170,
              dst: true,
              dst_from: "2022-03-27T01:00:00+00:00",
              dst_offset: 3600,
              dst_until: "2022-10-30T01:00:00+00:00",
              raw_offset: 3600,
              timezone: "Europe/Paris",
              unixtime: 1655625150,
              utc_datetime: "2022-06-19T07:52:30.092172+00:00",
              utc_offset: "+02:00",
              week_number: 24,
            },
            "https://worldtimeapi.org/api/timezone/Asia/Singapore": {
              abbreviation: "+08",
              client_ip: "202.146.234.244",
              datetime: "2022-06-19T15:44:12.765192+08:00",
              day_of_week: 0,
              day_of_year: 170,
              dst: false,
              dst_from: null,
              dst_offset: 0,
              dst_until: null,
              raw_offset: 28800,
              timezone: "Asia/Singapore",
              unixtime: 1655624652,
              utc_datetime: "2022-06-19T07:44:12.765192+00:00",
              utc_offset: "+08:00",
              week_number: 24,
            },
            "https://worldtimeapi.org/api/timezone/australia/sydney": {
              abbreviation: "AEST",
              client_ip: "202.146.234.244",
              datetime: "2022-06-19T17:44:37.046457+10:00",
              day_of_week: 0,
              day_of_year: 170,
              dst: false,
              dst_from: null,
              dst_offset: 0,
              dst_until: null,
              raw_offset: 36000,
              timezone: "Australia/Sydney",
              unixtime: 1655624677,
              utc_datetime: "2022-06-19T07:44:37.046457+00:00",
              utc_offset: "+10:00",
              week_number: 24,
            },
          },
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <ModalsProvider>
          <HomeProvider>
            <MockEffectMaxClock />
          </HomeProvider>
        </ModalsProvider>
      </SWRConfig>
    );
    await waitFor(
      () => {
        expect(screen.getByTestId("clock-card-jst")).toBeDefined();
      },
      {
        timeout: 10000,
      }
    );
  });

  it('should render empty clock list correctly', async () => {
    render(
        <ModalsProvider>
          <HomeProvider>
            <CustomClockList />
          </HomeProvider>
        </ModalsProvider>
    )
    await waitFor(()=>{
        expect(screen.getByText('add up to 4 of your additional timezone here')).toBeDefined();
    })
    fireEvent.mouseEnter(screen.getByTestId('input-clock-card'));
    fireEvent.click(screen.getByTestId('input-clock-card'));
  })
});
