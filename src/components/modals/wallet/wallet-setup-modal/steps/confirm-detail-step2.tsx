"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { submitFormAction } from "@/lib/actions/wallet-actions";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  occupationIndustry: z.string().min(1, { message: "Occupation industry is required" }),
  occupation: z.string().min(1, { message: "Occupation is required" }),
  occupationExperience: z.string().min(1, { message: "Occupation experience is required" }),
});
type FormData = z.infer<typeof formSchema>;

export default function ConfirmDetailStep2() {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      occupationIndustry: "",
      occupation: "",
      occupationExperience: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const result = await submitFormAction(data);
    if (result.success) {
      router.push("?wallet-step=checkEligibility");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full flex flex-col items-center">
        <div className="w-full text-center">
          <h2 className="text-lg font-semibold text-foreground">Confirm Your Detail</h2>
          <p className="mt-4 text-sm text-foreground/55">
            Please fill in your details & confirm your identity to unlock additional services. All information is private
            & secure.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <FormField
            control={form.control}
            name="occupationIndustry"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-foreground/55">Occupation Industry*</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full h-12" placeholder="Enter occupation industry" />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-foreground/55">Occupation*</FormLabel>
                <FormControl>
                  <Input {...field} className="w-full h-12" placeholder="Enter occupation" />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="occupationExperience"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm text-foreground/55">Occupation Experience*</FormLabel>
              <FormControl>
                <Input {...field} className="w-full h-12" placeholder="Enter experience" />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-12 mt-4" disabled={!form.formState.isValid}>
          Save and Continue
        </Button>
      </form>
    </Form>
  );
}