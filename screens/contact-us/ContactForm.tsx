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
        <div className="grid sm:grid-cols-2 gap-5">
          <CustomFormField
            name="name"
            label="Full Name"
            required
            className="col-span-2"
            labelClassName={labelClassName}
          >
            <Input
              placeholder="Full Name"
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
              className={fieldClassName}
            />
          </CustomFormField>

          <CustomFormField
            name="subject"
            label="Subject"
            required
            className="col-span-2"
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
            className="col-span-2"
            labelClassName={labelClassName}
          >
            <Textarea
              placeholder="Describe your inquiry"
              className={`${fieldClassName} min-h-32 h-auto py-3`}
            />
          </CustomFormField>

          <Button
            type="submit"
            disabled={isLoading}
            variant="experience"
            className="col-span-2 mt-2 justify-self-start bg-exp-glow text-exp-dusk hover:opacity-90"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
