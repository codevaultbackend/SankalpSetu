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

export type EventItem = {
  _id: string;
  nameofevent: string;
  Place: string;
  title: string;
  description_of_event: string;
  eventDate: string; 
};

export interface GetEventsResponse {
  success: boolean;
  eventdetails: EventItem[];
  eventlength: number;
}
