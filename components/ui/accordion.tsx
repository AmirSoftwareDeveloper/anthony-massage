"use client";

import * as React from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/utils";

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

type AccordionItemProps = {
  value: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
};

type AccordionTriggerProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
  isOpen?: boolean;
  children?: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({
  className,
  children,
  type = "multiple",
  defaultValue,
  value,
  onValueChange,
}) => {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (defaultValue) setOpenItem(defaultValue);
  }, [defaultValue]);

  const controlledValue = value !== undefined ? value : openItem;

  const handleToggle = (itemValue: string) => {
    if (type === "single") {
      const newValue = controlledValue === itemValue ? null : itemValue;
      setOpenItem(newValue);
      onValueChange?.(newValue || "");
    }
  };

  return (
    <div
      className={cn(className)}
      data-accordion-type={type}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            isOpen: mounted && controlledValue === child.props.value,
            onToggle: () => handleToggle(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
};

const AccordionItem = React.forwardRef<
  HTMLDetailsElement,
  React.ComponentPropsWithoutRef<"details"> & AccordionItemProps
>(({ className, value, isOpen, onToggle, children, ...props }, ref) => {
  const handleToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    onToggle?.();
  };

  return (
    <details
      ref={ref}
      className={cn("border-b transition-all duration-300 ease-in-out", className)}
      data-state={isOpen ? "open" : "closed"}
      open={isOpen}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<AccordionTriggerProps>(child) && child.type === AccordionTrigger) {
          return React.cloneElement(child, {
            onClick: handleToggle,
            isOpen,
          });
        }
        return child;
      })}
    </details>
  );
});

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"summary"> & AccordionTriggerProps
>(({ className, children, onClick, isOpen, ...props }, ref) => (
  <summary
    ref={ref as any}
    className={cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer",
      className
    )}
    onClick={onClick}
    data-state={isOpen ? "open" : "closed"}
    {...props}
  >
    {children}
    <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
  </summary>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("pb-4 pt-0 text-base transition-all duration-300 ease-in-out", className)}
      {...props}
    >
      {children}
    </p>
  )
);

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
