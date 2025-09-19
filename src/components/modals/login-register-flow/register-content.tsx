"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import CheckedBadgeSVG from "@/components/common/svg_icons/checked-badge-svg";
import FacebookIconSVG from "@/components/common/svg_icons/facebook-icon-svg";
import XIconSVG from "@/components/common/svg_icons/x-Icon-svg";
import YoutubeIconSVG from "@/components/common/svg_icons/youtube-Icon-svg";
import LinkedinIconSVG from "@/components/common/svg_icons/linkedin-Icon-svg";
import GlobeSVG from "@/components/common/svg_icons/globe-svg";
import { DatePicker } from "@/components/ui/date-picker";
import { Eye, DoorClosed as EyeClosed, CheckCircle } from "lucide-react";
import { useForm, type Resolver } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState, useEffect, useMemo } from "react";
import { useSidebarStore } from "@/store/sidebar-store";
import Link from "next/link";

const formSchema = z.object({
  language: z.string().default("en"),
  email: z.string().email("Invalid email address"),
  username: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dob: z.string().optional(),
  referral: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number.parseInt(searchParams.get("reg-step") || "1");
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const { toggleAuthModalOpen } = useSidebarStore();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as unknown as Resolver<FormData>,
    defaultValues: {
      language: "en",
      email: "",
      username: "",
      phone: "",
      password: "",
      dob: "",
      referral: "",
      terms: false,
    },
    mode: "onChange",
  });

  const {
    watch,
    handleSubmit,
    trigger,
    control,
    getValues,
    // formState: { errors },
  } = form;

  // const email = watch("email");
  // const password = watch("password");
  // const terms = watch("terms");

  const [isStepValid, setIsStepValid] = useState<boolean>(false);

  const watchDependencies = useMemo(
    () => [
      watch("language"),
      watch("email"),
      watch("password"),
      watch("terms"),
    ],
    [watch]
  );

  useEffect(() => {
    let mounted = true;
    const validateForCurrentStep = async () => {
      try {
        if (step === 1) {
          const val = !!getValues("language");
          if (mounted) {
            setIsStepValid(val);
          }
        } else if (step === 2) {
          const valid = await trigger(["email", "password"]);
          if (mounted) {
            setIsStepValid(valid);
          }
        } else if (step === 3) {
          const valid = await trigger(["terms"]);
          if (mounted) {
            setIsStepValid(valid);
          }
        } else {
          if (mounted) {
            setIsStepValid(false);
          }
        }
      } catch {
        if (mounted) {
          setIsStepValid(false);
        }
      }
    };

    validateForCurrentStep();

    return () => {
      mounted = false;
    };
  }, [step, watchDependencies, getValues, trigger]);

  const goToStep = async (target: number) => {
    if (target <= step) {
      router.replace(`?auth-tab=register&reg-step=${target}`);
      return;
    }

    let valid = false;
    if (step === 1) {
      valid = !!getValues("language");
    } else if (step === 2) {
      valid = await trigger(["email", "password"]);
    } else if (step === 3) {
      valid = await trigger(["terms"]);
    }

    if (valid) {
      router.replace(`?auth-tab=register&reg-step=${target}`);
    } else {
      toast.error("Please complete the current step before continuing.");
    }
  };

  const onLoginClick = () => {
    router.push("?auth-tab=login");
  };

  // const handleConfirmLang = (data: FormData) => {
  //   router.replace("?auth-tab=register&reg-step=2");
  // };
  const handleConfirmLang = () => {
    router.replace("?auth-tab=register&reg-step=2");
  };

  // const handleContinue = (data: FormData) => {
  //   router.replace("?auth-tab=register&reg-step=3");
  // };
  const handleContinue = () => {
    router.replace("?auth-tab=register&reg-step=3");
  };

  const handleFinalSubmit = async (data: FormData) => {
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast.success("Account created successfully!");
      router.replace("?auth-tab=register&reg-step=4");
    } catch (error) {
      console.error(error);
      toast.error("Error creating account. Please try again.");
    }
  };

  const onReturnHome = () => {
    router.push("/");
    toggleAuthModalOpen();
  };

  if (step === 4) {
    return (
      <div className="text-center space-y-4 flex flex-col items-center justify-between gap-6 h-full">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-chart-2 w-fit pb-8">
            <CheckedBadgeSVG />
          </div>
          <h2 className="text-lg font-semibold text-foreground pb-4">
            Account Creation Successful
          </h2>
          <p className="text-xs text-foreground/55">
            Nulla portti magna bibendum leo portti, vitae venenatis lectus
            pulvinar.
          </p>
        </div>
        <Button className="w-full" variant="gray" onClick={onReturnHome}>
          Return to Home Page
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className=" flex flex-row items-center gap-4 w-full mb-6">
        <div className="grid grid-cols-3 gap-4 w-full">
          <div
            onClick={() => goToStep(1)}
            className={`h-0.5 w-full rounded-lg cursor-pointer ${
              step === 1 ? "bg-foreground" : "bg-foreground/55"
            }`}
          />
          <div
            onClick={() => goToStep(2)}
            className={`h-0.5 w-full rounded-lg cursor-pointer ${
              step === 2 ? "bg-foreground" : "bg-foreground/55"
            }`}
          />
          <div
            onClick={() => goToStep(3)}
            className={`h-0.5 w-full rounded-lg cursor-pointer ${
              step === 3 ? "bg-foreground" : "bg-foreground/55"
            }`}
          />
        </div>
        <p className="text-sm text-foreground/55 text-nowrap">
          Step <span className="text-foreground">{step}</span> of 3
        </p>
      </div>

      {step === 1 && (
        <>
          <div className="flex flex-col items-start gap-2 mb-8">
            <h2 className="text-lg font-semibold text-foreground">
              Select Your Preferred Language
            </h2>
            <p className="text-sm text-foreground/55 leading-relaxed">
              Brand is available in several languages. Feel free to personalise
              your language across our site from the options below.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(handleConfirmLang)}
              className="space-y-6 w-full flex flex-col items-center justify-between"
            >
              <div className="w-full mb-25">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            id="language"
                            className="w-full relative"
                          >
                            <SelectValue className="!pl-12" />
                            <div className="absolute left-2 top-1/5">
                              <GlobeSVG />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en" className="!pl-12">
                              Language English
                            </SelectItem>
                            <SelectItem value="fr" className="!pl-12">
                              Language Français
                            </SelectItem>
                            <SelectItem value="es" className="!pl-12">
                              Language Español
                            </SelectItem>
                            <SelectItem value="de" className="!pl-12">
                              Language Deutsch
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                variant="orangeGradient"
                className="w-full"
                disabled={!isStepValid}
                onClick={() => handleSubmit(handleConfirmLang)()}
              >
                Confirm
              </Button>
            </form>
          </Form>
        </>
      )}

      {step === 2 && (
        <div className="w-full">
          <h2 className="text-start text-lg font-semibold text-foreground mb-8">
            Create an Account
          </h2>
          <Form {...form}>
            <form onSubmit={handleSubmit(handleContinue)} className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-22">
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="w-full h-12"
                              placeholder="Enter your email"
                            />
                          </FormControl>
                          {form.watch("email") &&
                            !form.formState.errors.email && (
                              <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                            )}
                        </div>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              className="w-full h-12"
                              placeholder="Enter your username*"
                            />
                          </FormControl>
                          {form.watch("username") &&
                            !form.formState.errors.username && (
                              <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                            )}
                        </div>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-full">
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
                              className="bg-foreground-55 absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground cursor-pointer"
                            />
                          ) : (
                            <Eye
                              onClick={() => setEyeOpen(!eyeOpen)}
                              className="bg-foreground-55 absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground cursor-pointer"
                            />
                          )}
                        </div>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <DatePicker
                            name={field.name}
                            control={control}
                            placeholder="Select your date of birth"
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              id="phoneOpt"
                              checked={!!field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked ? "" : undefined);
                              }}
                              className="mt-0.5"
                            />
                          </FormControl>
                          <label
                            htmlFor="phoneOpt"
                            className="text-sm font-normal"
                          >
                            Phone (Optional)
                          </label>
                        </div>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name="referral"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <div className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              id="referralOpt"
                              checked={!!field.value}
                              onCheckedChange={(checked) => {
                                field.onChange(checked ? "" : undefined);
                              }}
                              className="mt-0.5"
                            />
                          </FormControl>
                          <label
                            htmlFor="referralOpt"
                            className="text-sm font-normal"
                          >
                            Referral Code (Optional)
                          </label>
                        </div>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="gray"
                className="w-full"
                disabled={!isStepValid}
                onClick={() => handleSubmit(handleContinue)()}
              >
                Continue
              </Button>
            </form>
          </Form>
        </div>
      )}

      {step === 3 && (
        <div className="w-full">
          <h2 className="text-lg text-start w-full font-semibold mb-2 text-foreground">
            Create an Account
          </h2>
          <div className="mb-6 p-4 bg-background-1 rounded-lg max-h-150 overflow-y-auto">
            <p className="text-sm font-medium text-foreground">
              Terms and Conditions
            </p>
            <p className="text-xs text-foreground/55">
              Feel free to personalise your language across site from the
              options below.
            </p>
            <div className="text-xs text-foreground/80 leading-relaxed whitespace-pre-wrap">
              1. brandname.com
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum varius pharetra lacus ac semper. Donec iaculis varius
              lorem eget sollicitudin. Etiam ac nisl tellus. Curabitur a enim
              nunc. Ut mi diam, vehicula vel accumsan sed, pellentesque eget
              ante. Donec dapibus turpis lorem, in facilisis justo facilisis id.
              Vestibulum a laoreet tellus. Pellentesque pretium a felis sed
              lacinia. Aenean quis dui gravida, gravida lacus vel, mollis odio.
              Nunc ut pellentesque arcu. Aliquam auctor eget arcu non viverra.
              Nam lorem est, porta non varius at, tincidunt sed magna.
              Vestibulum vel ipsum nisi. Curabitur vehicula euismod consectetur.
              Vestibulum justo dolor, aliquam id tellus quis, sodales cursus
              velit. Fusce placerat arcu nec risus malesuada sagittis.
              Pellentesque at rhoncus risus. Curabitur convallis, magna at
              bibendum hendrerit, orci mi suscipit lorem, sit amet egestas arcu
              libero at nulla. Nam vulputate mauris et libero accumsan aliquet.
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(handleFinalSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-0.5"
                        />
                      </FormControl>
                      <label
                        htmlFor="terms"
                        className="text-sm leading-relaxed cursor-pointer"
                      >
                        Read and agree to the terms and conditions
                      </label>
                    </div>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="orangeGradient"
                className="w-full"
                disabled={!isStepValid}
                onClick={() => handleSubmit(handleFinalSubmit)()}
              >
                Create an Account
              </Button>
            </form>
          </Form>
        </div>
      )}

      {step !== 4 && (
        <div className="mt-auto w-full">
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <div className="flex items-center justify-center gap-4 my-4 w-full">
              <div className="w-22 h-0.5 bg-foreground/55 rounded-xl" />
              <div className="text-foreground/55 text-xs">Or</div>
              <div className="w-22 h-0.5 bg-foreground/55 rounded-xl" />
            </div>
            <div className="flex flex-row items-center gap-12 justify-center text-foreground/55">
              <Link href="#">
                <FacebookIconSVG />
              </Link>
              <Link href="#">
                <XIconSVG />
              </Link>
              <Link href="#">
                <YoutubeIconSVG />
              </Link>
              <Link href="#">
                <LinkedinIconSVG />
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-foreground/55 w-full mt-4">
            Already have an account?{" "}
            <button
              onClick={onLoginClick}
              className="text-foreground hover:underline hover:text-primary duration-300 font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
