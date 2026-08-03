import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components";

import type { ContactFormValues } from "@/lib/validations/contact";

export const ContactEmail = ({ name, email, phoneNumber, subject, message }: ContactFormValues) => (
  <Html>
    <Head />
    <Preview>New inquiry from {name}</Preview>
    <Body style={{ fontFamily: "Helvetica, Arial, sans-serif", backgroundColor: "#f5f5f5" }}>
      <Container style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "8px" }}>
        <Heading style={{ fontSize: "20px" }}>New contact form submission</Heading>

        <Section>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Phone:</strong> {phoneNumber}
          </Text>
          <Text>
            <strong>Subject:</strong> {subject}
          </Text>
        </Section>

        <Hr />

        <Section>
          <Text>{message || "No message provided."}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
