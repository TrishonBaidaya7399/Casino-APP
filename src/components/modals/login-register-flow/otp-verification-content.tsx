"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { verifyOTPAction } from "@/lib/actions/auth-actions";
import MailBox from "@/components/common/svg_icons/mail-box";

const _otpSchema = z.object({
  otp: z.string().min(5, { message: "OTP must be 5 digits" }).max(5),
});

export default function OTPVerificationContent() {
  const form = useForm<z.infer<typeof _otpSchema>>({
    defaultValues: { otp: "" },
  });

  const onSubmit = async (values: z.infer<typeof _otpSchema>) => {
    const formData = new FormData();
    formData.append("otp", values.otp);
    const result = await verifyOTPAction(formData);
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <MailBox />
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-foreground">
          Enter Email Code
        </h2>
        <p className="text-xs text-foreground/15">
          Nulla porttitor magna bibendum leo porttitor, vitae venenatis lectus
          pulvinar.
        </p>
      </div>
      <Form {...form}>
        <form
          className="w-full flex flex-col items-center gap-12"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={5}
                    value={field.value}
                    onChange={field.onChange}
                    containerClassName="flex justify-center space-x-2"
                  >
                    <InputOTPGroup className="flex flex-row items-center h-17 gap-4 rounded-none">
                      <InputOTPSlot
                        index={0}
                        className="w-11 border  h-full rounded-md"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-11 border  h-full rounded-md"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-11 border  h-full rounded-md"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-11 border  h-full rounded-md"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-11 border  h-full rounded-md"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="orangeGradient"
            className="w-full"
            disabled={!form.watch("otp") || !!form.formState.errors.otp}
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
