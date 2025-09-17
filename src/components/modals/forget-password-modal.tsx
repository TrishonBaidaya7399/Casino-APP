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
import { CheckCircle, Eye, EyeClosed } from "lucide-react";
import CheckedBadgeSVG from "../common/svg_icons/checked-badge-svg";
import { useSidebarStore } from "@/store/sidebar-store";

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
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

function ForgetPasswordModal() {
  const { forgetPasswordModalOpen, toggleForgetPasswordModalOpen } =
    useSidebarStore();
  const [step, setStep] = useState<Step>("default");
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const [eyeReOpen, setEyeReOpen] = useState<boolean>(false);
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
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="w-full h-12 pr-12"
                      />
                    </FormControl>
                    {emailForm.watch("email") &&
                      !emailForm.formState.errors.email && (
                        <CheckCircle className="bg-foreground/55 rounded-full absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground" />
                      )}
                  </div>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              type="submit"
              disabled={
                !emailForm.watch("email") || !!emailForm.formState.errors.email
              }
              variant="orangeGradient"
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
            className="space-y-8 flex-col justify-between h-full"
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
                      className="w-full h-12 "
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Recover Password
            </Button>
          </form>
        </Form>
      );
      break;
    case "successSent":
      content = (
        <div className="text-center space-y-4 flex flex-col items-center justify-between gap-6 h-full">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-chart-2 w-fit pb-8">
              <CheckedBadgeSVG />
            </div>
            <h2 className="text-lg font-semibold text-foreground pb-4">
              Successfully Sent
            </h2>
            <p className="text-xs text-foreground/55">
              Nulla porttitor magna bibendum leo porttitor, vitae venenatis
              lectus pulvinar.
            </p>
          </div>
          <Button
            className="w-full"
            variant="gray"
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
            className="space-y-8 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 w-full h-full">
              <FormField
                control={passwordForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-medium text-foreground/55">
                      Password
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={eyeOpen ? "text" : "password"}
                          placeholder="********"
                          {...field}
                          className="w-full h-12 pr-12"
                        />
                      </FormControl>
                      {eyeOpen ? (
                        <EyeClosed
                          onClick={() => setEyeOpen(!eyeOpen)}
                          className='className="bg-foreground-55 absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground'
                        />
                      ) : (
                        <Eye
                          onClick={() => setEyeOpen(!eyeOpen)}
                          className='className="bg-foreground-55 absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground'
                        />
                      )}
                    </div>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="repeatPassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-medium text-foreground/55">
                      Repeat Password
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={eyeReOpen ? "text" : "password"}
                          placeholder="********"
                          {...field}
                          className="w-full h-12 pr-12"
                        />
                      </FormControl>
                      {eyeReOpen ? (
                        <EyeClosed
                          onClick={() => setEyeReOpen(!eyeReOpen)}
                          className='className="bg-foreground-55 absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground'
                        />
                      ) : (
                        <Eye
                          onClick={() => setEyeReOpen(!eyeReOpen)}
                          className='className="bg-foreground-55 absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground'
                        />
                      )}
                    </div>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="w-full"
              variant="orangeGradient"
              type="submit"
              disabled={
                !passwordForm.watch("password") ||
                !passwordForm.watch("repeatPassword") ||
                !!passwordForm.formState.errors.password ||
                !!passwordForm.formState.errors.repeatPassword
              }
            >
              Create Password
            </Button>
          </form>
        </Form>
      );
      break;
    case "successCreated":
      content = (
        <div className="text-center space-y-4 flex flex-col items-center justify-between gap-6 h-full">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-chart-2 w-fit pb-8">
              <CheckedBadgeSVG />
            </div>
            <h2 className="text-lg font-semibold text-foreground pb-4">
              Password Creation Successful
            </h2>
            <p className="text-xs text-foreground/55">
              Nulla porttitor magna bibendum leo porttitor, vitae venenatis
              lectus pulvinar.
            </p>
          </div>
          <Button className="w-full" variant="orangeGradient">
            Login
          </Button>
        </div>
      );
      break;
    default:
  }

  return (
    <GlobalModal
      open={forgetPasswordModalOpen}
      onOpenChange={toggleForgetPasswordModalOpen}
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
