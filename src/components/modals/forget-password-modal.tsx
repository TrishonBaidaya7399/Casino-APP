"use client";
import React, { useState } from "react";
import GlobalModal from "../global-components/global-modal/global-modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

type Step =
  | "email"
  | "successSent"
  | "setPassword"
  | "successCreated"
  | "default";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

function ForgetPasswordModal({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  const [step, setStep] = useState<Step>("default");

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  function onEmailSubmit(values: z.infer<typeof emailSchema>) {
    console.log(values);
    setStep("successSent");
  }

  function onPasswordSubmit(values: z.infer<typeof passwordSchema>) {
    console.log(values);
    setStep("successCreated");
  }

  let content;
  switch (step) {
    case "default":
      content = (
        <Form {...emailForm}>
          <form
            onSubmit={emailForm.handleSubmit(onEmailSubmit)}
            className="space-y-8 flex flex-col justify-between h-full"
          >
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground/55">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-gray-600 hover:bg-gray-700"
              type="submit"
            >
              Recover Password
            </Button>
          </form>
        </Form>
      );
      break;
    case "email":
      content = (
        <Form {...emailForm}>
          <form
            onSubmit={emailForm.handleSubmit(onEmailSubmit)}
            className="space-y-8"
          >
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground/55">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="mon143@yandex.com"
                      {...field}
                      className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-gray-600 hover:bg-gray-700"
              type="submit"
            >
              Recover Password
            </Button>
          </form>
        </Form>
      );
      break;
    case "successSent":
      content = (
        <div className="text-center space-y-4">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="text-lg font-semibold">Successfully Sent</h2>
          <p className="text-sm text-gray-500">
            Nulla porttitor magna bibendum leo porttitor, vitae venenatis lectus
            pulvinar.
          </p>
          <Button
            className="w-full bg-gray-600 hover:bg-gray-700"
            onClick={() => setStep("setPassword")}
          >
            Return to Set Password
          </Button>
        </div>
      );
      break;
    case "setPassword":
      content = (
        <Form {...passwordForm}>
          <form
            onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
            className="space-y-8"
          >
            <FormField
              control={passwordForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground/55">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={passwordForm.control}
              name="repeatPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground/55">
                    Repeat Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="123456789"
                      {...field}
                      className="w-full h-12 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:opacity-90"
              type="submit"
            >
              Create Password
            </Button>
          </form>
        </Form>
      );
      break;
    case "successCreated":
      content = (
        <div className="text-center space-y-4">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="text-lg font-semibold">
            Password Creation Successful
          </h2>
          <p className="text-sm text-gray-500">
            Nulla porttitor magna bibendum leo porttitor, vitae venenatis lectus
            pulvinar.
          </p>
          <Link href="/#">
            <Button className="w-full" variant="orangeGradient">``
              Login
            </Button>
          </Link>
        </div>
      );
      break;
    default:
  }

  return (
    <GlobalModal
      open={open}
      onOpenChange={close}
      className="min-h-129 h-129"
      title={
        step === "setPassword" || step === "successCreated"
          ? "Set a New Password"
          : step === "default"
          ? "Forgot Password?"
          : "I forgot my password"
      }
    >
      {content}
    </GlobalModal>
  );
}

export default ForgetPasswordModal;
