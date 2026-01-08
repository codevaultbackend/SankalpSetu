export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;     
  location?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface EventItem {
  _id: string;
  nameofevent: string;
  when: string;
  Place: string;
  description_of_event: string;
}

export interface GetEventsResponse {
  success: boolean;
  eventdetails: EventItem[];
  eventlength: number;
}
