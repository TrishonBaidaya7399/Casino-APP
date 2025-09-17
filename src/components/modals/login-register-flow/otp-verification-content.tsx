// "use client";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
//   InputOTPSeparator,
//   type InputOTPRenderFn,
// } from "@/components/ui/input-otp"; // Adjust import path if needed
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { verifyOTPAction } from "@/lib/actions/auth-actions";

// // Prefix with underscore to suppress unused var warning
// const _otpSchema = z.object({
//   otp: z.string().min(5, { message: "OTP must be 5 digits" }).max(5),
// });

// export default function OTPVerificationContent() {
//   const form = useForm<z.infer<typeof _otpSchema>>({
//     defaultValues: { otp: "" },
//   });

//   const onSubmit = async (values: z.infer<typeof _otpSchema>) => {
//     const formData = new FormData();
//     formData.append("otp", values.otp);
//     const result = await verifyOTPAction(formData);
//     if (result.success) {
//       alert(result.message);
//     } else {
//       alert(result.message);
//     }
//   };

//   const renderInput: InputOTPRenderFn = ({ ref, ...props }, index) => (
//     <InputOTPGroup>
//       <InputOTPSlot
//         index={index}
//         {...props}
//         ref={ref}
//         className="w-12 h-12"
//       />
//       {index < 4 && <InputOTPSeparator />}
//     </InputOTPGroup>
//   );

//   return (
//     <div className="p-6 text-white flex flex-col items-center">
//       <div className="w-16 h-16 bg-gray-500 rounded flex items-center justify-center mb-4">
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M12 2C6.48 2 2 6.48 2 12C2 16.41 4.42 20.2 7.9 21.65C8.5 21.78 8.68 21.3 8.68 20.95C8.68 20.62 8.66 19.85 8.65 18.98C5.85 19.43 5.2 17.85 5 17.42C4.85 17.1 4.3 16.1 3.85 15.75C3.5 15.45 3 15.05 3.65 15C4.25 14.97 4.85 15.42 5.1 15.8C5.85 16.75 6.9 16.35 7.3 16C7.45 15.3 7.75 14.9 8.1 14.65C6.1 14.3 4.05 13.5 4.05 9.75C4.05 8.65 4.35 7.7 4.9 6.9C4.75 6.65 4.35 5.5 4.95 4.15C4.95 4.15 5.75 3.85 7.65 5.05C8.45 4.85 9.3 4.75 10.15 4.75C10.85 4.75 11.55 4.85 12.25 5C13.95 4.75 15.65 4.75 17.35 5C17.4 5 17.45 5 17.5 5C19.4 5 20.2 5.3 20.2 5.3C20.8 5.65 20.4 6.8 20.2 7.05C20.75 7.85 21.05 8.8 21.05 9.75C21.05 13.5 19 14.3 17 14.65C17.4 14.95 17.7 15.4 17.7 16C17.7 17.5 17.7 18.7 17.7 19C17.7 19.35 17.85 19.8 18.45 19.65C21.95 18.2 24.42 14.41 24.42 10C24.42 6.48 19.94 2 14.48 2C14.48 2 14.48 2 14.48 2C14.48 2 12 2 12 2Z"
//             fill="white"
//           />
//         </svg>
//       </div>
//       <h2 className="text-lg font-semibold mb-2">Enter Email Code</h2>
//       <p className="text-xs text-gray-400 mb-6">
//         Nulla porttitor magna bibendum leo porttitor, vitae venenatis lectus
//         pulvinar.
//       </p>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="space-y-4 w-full"
//         >
//           <FormField
//             control={form.control}
//             name="otp"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-sm text-gray-400">OTP</FormLabel>
//                 <FormControl>
//                   <InputOTP
//                     value={field.value}
//                     onChange={field.onChange}
//                     numInputs={5}
//                     render={renderInput}
//                     containerClassName="flex justify-center space-x-2"
//                   />
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//           <Link
//             href="?tab=login"
//             className="text-xs text-gray-400 mb-4 block text-left"
//           >
//             ← Back
//           </Link>
//           <Button
//             type="submit"
//             variant="orangeGradient"
//             disabled={!form.watch("otp") || !!form.formState.errors.otp}
//           >
//             Continue
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// }


import React from 'react'

function OTPVerificationContent() {
  return (
    <div>
      OTPVerificationContent
    </div>
  )
}

export default OTPVerificationContent
