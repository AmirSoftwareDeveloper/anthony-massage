"use client";

import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/components/ui/native-select";

import { Option, OptionGroup } from "@/types";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  options?: Option[];
  groups?: OptionGroup[];
};

const Select = ({ value, onChange, placeholder = "Select an option", options = [], groups = [] }: Props) => {
  return (
    <NativeSelect
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <NativeSelectOption value="">{placeholder}</NativeSelectOption>

      {options.map((opt) => (
        <NativeSelectOption
          key={opt.value}
          value={opt.value}
        >
          {opt.label}
        </NativeSelectOption>
      ))}

      {groups.map((group) => (
        <NativeSelectOptGroup
          key={group.label}
          label={group.label}
        >
          {group.options.map((opt) => (
            <NativeSelectOption
              key={opt.value}
              value={opt.value}
            >
              {opt.label}
            </NativeSelectOption>
          ))}
        </NativeSelectOptGroup>
      ))}
    </NativeSelect>
  );
};

export default Select;
