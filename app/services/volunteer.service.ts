import { expressFetch } from "../lib/expressApi";
import { expressFormFetch } from "../lib/expressApi";



export interface VolunteerPayload {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  address: string;
  skills: string[];
  availability: string[];
  interests: string[];
  notes?: string;
}


export const volunteerService = {
  submitVolunteer: (formData: FormData) =>
    expressFormFetch("/api/form/volienter-form", formData),
};


