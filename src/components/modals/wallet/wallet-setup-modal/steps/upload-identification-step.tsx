"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { submitFormAction } from "@/lib/actions/wallet-actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GlobalFileUpload from "@/components/global-components/global-file-upload";
import { useSidebarStore } from "@/store/sidebar-store";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  documentType: z.string().min(1, { message: "Document type is required" }),
  frontSide: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Front side is required",
    })
    .refine(
      (file) =>
        file instanceof File &&
        ["image/png", "image/jpeg", "application/pdf"].includes(file.type),
      { message: "Invalid file type. Use .png, .jpg, or .pdf" }
    ),
  backSide: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Back side is required",
    })
    .refine(
      (file) =>
        file instanceof File &&
        ["image/png", "image/jpeg", "application/pdf"].includes(file.type),
      { message: "Invalid file type. Use .png, .jpg, or .pdf" }
    ),
});
type FormData = z.infer<typeof formSchema>;

export default function UploadIdentificationStep() {
  const { toggleWalletSetupModalOpen } = useSidebarStore();
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentType: "",
      frontSide: null,
      backSide: null,
    },
  });

  const onSubmit = async (data: FormData) => {
    const result = await submitFormAction(data);
    if (result.success) {
      toast.success(`Wallet registration successful!`)
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.delete("wallet-step");
      router.push(
        currentParams.toString() ? `?${currentParams.toString()}` : "/",
        { scroll: false }
      );
      toggleWalletSetupModalOpen();
    } else {
      toast.error("Submission failed");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full flex flex-col"
      >
        <p className="w-full text-sm text-foreground/55">
          Please upload your identification. This step will unlock more
          capabilities such as higher betting limits and enhanced account
          security.
        </p>
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-foreground/55">
                  Document Type*
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="passport">Passport</SelectItem>
                      <SelectItem value="idcard">ID Card</SelectItem>
                      <SelectItem value="driving">Driving License</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <p className="text-sm text-foreground/55">
            Following file types are accepted: .png, .jpg, .pdf
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="frontSide"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-foreground/55">
                  Front Side*
                </FormLabel>
                <FormControl>
                  <GlobalFileUpload
                    {...field}
                    value={field.value}
                    onChange={field.onChange}
                    id={`file-upload-front-${Date.now()}`}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backSide"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-foreground/55">
                  Back Side*
                </FormLabel>
                <FormControl>
                  <GlobalFileUpload
                    {...field}
                    value={field.value}
                    onChange={field.onChange}
                    id={`file-upload-back-${Date.now()}`}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full h-12 mt-14"
          disabled={!form.formState.isValid}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
