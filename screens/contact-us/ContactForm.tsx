"use client";

import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";

import { createPhoneNumberHandler } from "@/utils/formatPhone";
import { googleTagsTrigger } from "@/utils/googleTagsTrigger";
import { notifyError, notifySuccess } from "@/utils/notify";

import { ContactFormValues, contactFormSchema } from "@/lib/validations/contact";

import CustomFormField from "@/components/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClassName =
  "h-12 rounded-md border-[rgba(51,39,17,0.18)] bg-[#fdf8ec] text-[#241c0d] placeholder:text-[#8a7a5c] focus-visible:ring-(--color-exp-gold) focus-visible:ring-offset-0";
const labelClassName = "text-2xs font-medium tracking-[0.14em] text-[#4a3a1c] uppercase";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  const handlePhoneChange = createPhoneNumberHandler(form.setValue, "phoneNumber", form.formState.isSubmitted);

  const onSubmit = async (values: ContactFormValues) => {
    setIsLoading(true);

    try {
      const { data } = await axios.post("/api/contact", values);

      if (data?.success) {
        notifySuccess("Your request has been submitted successfully.");
        form.reset();
        googleTagsTrigger({ slug: "thank-you" });
      } else {
        notifyError("Something went wrong. Please try again.");
      }
    } catch {
      notifyError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <CustomFormField
            name="name"
            label="Full Name"
            required
            className="sm:col-span-2"
            labelClassName={labelClassName}
          >
            <Input
              placeholder="Full Name"
              autoComplete="name"
              className={fieldClassName}
            />
          </CustomFormField>

          <CustomFormField
            name="phoneNumber"
            label="Phone Number"
            required
            labelClassName={labelClassName}
          >
            <Input
              placeholder="Phone Number"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              onChange={handlePhoneChange}
              className={fieldClassName}
            />
          </CustomFormField>

          <CustomFormField
            name="email"
            label="Email Address"
            required
            labelClassName={labelClassName}
          >
            <Input
              placeholder="Email Address"
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              className={fieldClassName}
            />
          </CustomFormField>

          <CustomFormField
            name="subject"
            label="Subject"
            required
            className="sm:col-span-2"
            labelClassName={labelClassName}
          >
            <Input
              placeholder="Subject"
              className={fieldClassName}
            />
          </CustomFormField>

          <CustomFormField
            name="message"
            label="Message"
            className="sm:col-span-2"
            labelClassName={labelClassName}
          >
            <Textarea
              placeholder="Describe your inquiry"
              className={`${fieldClassName} h-auto min-h-32 py-3`}
            />
          </CustomFormField>

          <Button
            type="submit"
            disabled={isLoading}
            variant="experience"
            size="experience"
            className="mt-2 w-full justify-center sm:col-span-2 sm:w-auto sm:justify-self-start"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
