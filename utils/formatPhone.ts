import { FieldValues, Path, UseFormSetValue } from "react-hook-form";

export default function formatPhone(phone = "") {
  return `+1${phone.replace(/[\s+()\\-]/g, "")}`;
}

export const stylePhoneNumber = (phoneNumber: string) => {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
};

export const formatPhoneNumber = (inputValue: string): string => {
  const digitsOnly = inputValue?.replace(/\D/g, "");
  const firstThreeDigits = digitsOnly?.slice(0, 3);
  const nextThreeDigits = digitsOnly?.slice(3, 6);
  const lastFourDigits = digitsOnly?.slice(6, 10);

  let formattedPhoneNumber = "";

  if (digitsOnly?.length > 6) {
    formattedPhoneNumber = `(${firstThreeDigits}) ${nextThreeDigits}-`;
  } else if (digitsOnly?.length > 3) {
    formattedPhoneNumber = `(${firstThreeDigits}) ${nextThreeDigits}`;
  } else if (digitsOnly?.length > 0) {
    formattedPhoneNumber = `(${firstThreeDigits}`;
  }

  formattedPhoneNumber += lastFourDigits;

  return formattedPhoneNumber;
};

export function createPhoneNumberHandler<T extends FieldValues>(
  setValue: UseFormSetValue<T>,
  fieldName: Path<T>,
  isSubmitted: boolean
) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);

    setValue(fieldName, formattedValue as any, {
      shouldValidate: isSubmitted,
    });
  };
}
