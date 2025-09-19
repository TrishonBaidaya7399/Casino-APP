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
import { useRouter } from "next/navigation";
import { submitFormAction } from "@/lib/actions/wallet-actions";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  emailCode: z.string().min(6, { message: "Email code must be 6 digits" }),
});
type FormData = z.infer<typeof formSchema>;

export default function ConfirmEmailStep() {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", emailCode: "" },
  });

  const onSubmit = async (data: FormData) => {
    const result = await submitFormAction(data);
    if (result.success) {
      router.push("?wallet-step=1");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full flex flex-col items-center"
      >
        <div className="w-full">
          <p className="text-sm text-foreground/55">
            Please check your email for the verification code we sent and enter
            it in the form below to confirm your email address.
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm text-foreground/55">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full h-12"
                  placeholder="example@email.com"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailCode"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm text-foreground/55">
                Email Code
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full h-12"
                  placeholder="Enter 6-digit code"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex items-end justify-end w-full">
          <Button
            variant="link"
            className="text-sm text-foreground/55"
            onClick={() => {}}
          >
            Resend Email
          </Button>
        </div>
        <Button
          type="submit"
          className="w-full h-12 mt-12"
          disabled={!form.formState.isValid}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
