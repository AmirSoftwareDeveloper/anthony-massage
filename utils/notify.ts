import { toast } from "@/components/ui/use-toast";

export const notifySuccess = (message: string) =>
  toast({
    title: "Success",
    description: message,
    className: "bg-teal-500 text-white",
  });

export const notifyError = (message: string) =>
  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  });
