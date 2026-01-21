import { expressFetch } from "../lib/expressApi";

export interface ContactPayload {
  email: string;
}

export interface ContactResponse {
  message: string;
}

export const contactService = {
  submitContact: (payload: ContactPayload) =>
    expressFetch<ContactResponse>("/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
