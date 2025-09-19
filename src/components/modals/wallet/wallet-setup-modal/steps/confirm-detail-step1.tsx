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
import { Input } from "@/components/ui/input";
import { submitFormAction } from "@/lib/actions/wallet-actions";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  placeOfBirth: z.string().min(1, { message: "Place of birth is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  residentialAddress: z
    .string()
    .min(1, { message: "Residential address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  postalCode: z.string().min(1, { message: "Postal code is required" }),
  occupationIndustry: z
    .string()
    .min(1, { message: "Occupation industry is required" }),
  occupation: z.string().min(1, { message: "Occupation is required" }),
  occupationExperience: z
    .string()
    .min(1, { message: "Occupation experience is required" }),
});
type FormData = z.infer<typeof formSchema>;

export default function ConfirmDetailStep1() {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      placeOfBirth: "",
      dateOfBirth: "",
      residentialAddress: "",
      city: "",
      postalCode: "",
      occupationIndustry: "",
      occupation: "",
      occupationExperience: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const result = await submitFormAction(data);
    if (result.success) {
      router.push("?wallet-step=2");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <p className="text-sm text-foreground">
          Please fill in your details & confirm your identity to unlock
          additional services. All information is private & secure.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full flex flex-col"
        >
          <div className="relative w-full">
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-background to-transparent pointer-events-none" />
            <div className="flex flex-col overflow-y-auto max-h-95 no-scrollbar space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-foreground/55">
                      First Name (including middle name, if applicable)*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full !h-12"
                        placeholder="Enter first name"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-foreground/55">
                        Last Name*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full !h-12"
                          placeholder="Enter last name"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-foreground/55">
                        Country*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full !h-12"
                          placeholder="Select country"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <FormField
                  control={form.control}
                  name="placeOfBirth"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-foreground/55">
                        Place of Birth*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full !h-12"
                          placeholder="Enter place of birth"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-foreground/55">
                        Date of Birth*
                      </FormLabel>
                      <FormControl>
                        <DatePicker
                          name={field.name}
                          control={form.control}
                          placeholder="Select date"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="residentialAddress"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-foreground/55">
                      Residential Address*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full !h-12"
                        placeholder="Enter residential address"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-foreground/55">
                        City*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full !h-12"
                          placeholder="Enter city"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-foreground/55">
                        Postal Code*
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full !h-12"
                          placeholder="Enter postal code"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <FormField
                  control={form.control}
                  name="occupationIndustry"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-foreground/55">
                        Occupation Industry*
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full !h-12">
                            <SelectValue placeholder="Select occupation industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="health">Healthcare</SelectItem>
                          </SelectContent>
                        </Select>
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
                      <FormLabel className="text-sm text-foreground/55">
                        Occupation*
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full !h-12">
                            <SelectValue placeholder="Select occupation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                            <SelectItem value="doctor">Doctor</SelectItem>
                          </SelectContent>
                        </Select>
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
                    <FormLabel className="text-sm text-foreground/55">
                      Occupation Experience*
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full !h-12">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
          <div className="w-full mt-4 bg-gradient-to-t from-bg-background to-background/0">
            <Button
              type="submit"
              className="w-full h-12"
              disabled={!form.formState.isValid}
            >
              Save and Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
