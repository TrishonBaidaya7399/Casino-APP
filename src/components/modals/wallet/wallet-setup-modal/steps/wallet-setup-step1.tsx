"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import Image from "next/image";

const formSchema = z.object({});
type FormData = z.infer<typeof formSchema>;

export default function WalletSetupStep1() {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async () => {
    router.push("?wallet-step=confirmEmail");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full flex flex-col items-center"
      >
        <div className="w-full text-center">
          <div className="">
            <Image
              src="/wallet-bg.webp"
              alt="Wallet Background"
              width={592}
              height={240}
              layout="lazy"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="mt-4 text-sm text-start text-foreground/55">
            Verify your email and account details to unlock full access to Brand
            Name. Once verified, you’ll be able to deposit and withdraw funds
            quickly and securely.
          </p>
        </div>
        <Button type="submit" className="w-full h-12 mt-4">
          Setup Wallet
        </Button>
      </form>
    </Form>
  );
}
