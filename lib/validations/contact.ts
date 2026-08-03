import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  email: yup.string().trim().email("Enter a valid email").required("Email is required"),
  phoneNumber: yup.string().trim().required("Phone number is required"),
  subject: yup.string().trim().required("Subject is required"),
  message: yup.string().trim().default(""),
});

export type ContactFormValues = yup.InferType<typeof contactFormSchema>;
