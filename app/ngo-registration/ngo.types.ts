export interface NgoFormState {
  organisation_name: string;
  organisation_type: string;
  organisation_email: string;
  website?: string;
  working_area: string;

  mobile: string;
  phone?: string;
  address: string;

  registration_certificate?: File;
  form_80g?: File;
  form_12a?: File;
  logo?: File;
  other_image?: File;
}
