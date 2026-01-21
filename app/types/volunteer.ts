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

export interface VolunteerResponse {
  success: boolean;
  message: string;
}
