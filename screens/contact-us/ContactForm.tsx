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
        <div className="grid grid-cols-2 gap-4">
          <CustomFormField
            name="name"
            label="Full Name"
            required
            className="col-span-2"
          >
            <Input placeholder="Full Name" />
          </CustomFormField>

          <CustomFormField
            name="phoneNumber"
            label="Phone Number"
            required
          >
            <Input
              placeholder="Phone Number"
              onChange={handlePhoneChange}
            />
          </CustomFormField>

          <CustomFormField
            name="email"
            label="Email Address"
            required
          >
            <Input placeholder="Email Address" />
          </CustomFormField>

          <CustomFormField
            name="subject"
            label="Subject"
            required
            className="col-span-2"
          >
            <Input placeholder="Subject" />
          </CustomFormField>

          <CustomFormField
            name="message"
            label="Message"
            className="col-span-2"
          >
            <Textarea placeholder="Describe your inquiry" />
          </CustomFormField>

          <Button
            type="submit"
            disabled={isLoading}
            className="col-span-2"
          >
            {isLoading ? "Sending..." : "Get Started"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
