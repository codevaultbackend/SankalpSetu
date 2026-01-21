import { expressFetch } from "../lib/expressApi";

export interface ContactPayload {
  full_name: string;
  phone: string;
  email: string;
  resone: string;
  city: string;
  message?: string;
}

export interface ContactResponse {
  message: string;
}

export const contactService = {
  submitContact: (payload: ContactPayload) =>
    expressFetch<ContactResponse>("/api/form/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
