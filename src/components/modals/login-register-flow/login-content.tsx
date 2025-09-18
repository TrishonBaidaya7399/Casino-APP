"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Eye, EyeClosed } from "lucide-react";
import { useSidebarStore } from "@/store/sidebar-store";
import { loginAction } from "@/lib/actions/auth-actions";
import LoginSVG from "@/components/common/svg_icons/login-svg";
import FacebookIconSVG from "@/components/common/svg_icons/facebook-icon-svg";
import XIconSVG from "@/components/common/svg_icons/x-Icon-svg";
import LinkedinIconSVG from "@/components/common/svg_icons/linkedin-Icon-svg";
import YoutubeIconSVG from "@/components/common/svg_icons/youtube-Icon-svg";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function LoginContent() {
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const { toggleForgetPasswordModalOpen } = useSidebarStore();
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    //   router.push("?auth-tab=otp");
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    const result = await loginAction(formData);
    if (result.success) {
      alert(result.message);
      router.push("?auth-tab=otp");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="text-foreground flex flex-col items-center gap-8 pt-8">
      <LoginSVG />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg text-foreground font-semibold">
          Account Creation Successful
        </h2>
        <p className="text-xs text-foreground/55">
          Nulla porttitor magna bibendum leo porttitor, vitae venenatis lectus
          pulvinar.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full flex flex-col items-center"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm text-foreground/55">
                    Mail Address
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full h-12"
                        placeholder="example@email.com"
                      />
                    </FormControl>
                    {form.watch("email") && !form.formState.errors.email && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 " />
                    )}
                  </div>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm text-foreground/55">
                    Password
                  </FormLabel>

                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        type={eyeOpen ? "text" : "password"}
                        className="w-full h-12"
                        placeholder="********"
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
          </div>
          <Link
            href="#"
            className="text-xs text-foreground/55 mb-4 block text-center w-fit"
            onClick={() => toggleForgetPasswordModalOpen()}
          >
            <u>Forgot Password</u>
          </Link>
          <Button
            type="submit"
            className="w-full h-12 mt-4"
            disabled={
              !form.watch("email") ||
              !form.watch("password") ||
              !!form.formState.errors.email ||
              !!form.formState.errors.password
            }
          >
            Continue
          </Button>
        </form>
      </Form>
      <div className="w-26 -mt-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 my-4">
          <div className="w-22 h-0.5 bg-foreground/15 rounded-xl" />
          <div className="text-foreground/55 text-xs">Or</div>
          <div className="w-22 h-0.5 bg-foreground/15 rounded-xl" />
        </div>
        <div className="flex flex-row items-center gap-3 justify-between text-foreground/55">
          <FacebookIconSVG />
          <XIconSVG />
          <YoutubeIconSVG />
          <LinkedinIconSVG />
        </div>
      </div>
    </div>
  );
}
