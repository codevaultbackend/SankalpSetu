import { expressFormFetch } from "../lib/expressApi";
import { NgoFormState } from "@/app/ngo-registration/ngo.types";

export const ngoService = {
  registerNgo: (data: NgoFormState) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== undefined) {
        formData.append(key, value);
      }
    });

    return expressFormFetch("/api/form/ngo-register", formData);    
  },
};
