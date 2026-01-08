import { expressFetch } from "../lib/expressApi";
import { GetEventsResponse } from "../types/event";

export const eventService = {
  getEvents: () =>
    expressFetch<GetEventsResponse>("/activity/getevent"),
};
