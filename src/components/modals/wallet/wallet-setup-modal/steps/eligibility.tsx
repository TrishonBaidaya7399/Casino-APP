"use client";

import { Switch } from "@/components/ui/switch";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  useTurkishLira: z.boolean().default(false),
});
type FormData = z.infer<typeof formSchema>;

export default function EligibilitySwitchStep() {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as unknown as Resolver<FormData>,
    defaultValues: {
      useTurkishLira: false,
    },
  });

  const onSubmit = async (data: { useTurkishLira: boolean }) => {
    if (data?.useTurkishLira === true) {
      router.push("?wallet-step=3");
    }
  };

  return (
    <div className="w-full">
      <div className="font-semibold text-xl text-foreground/55 pb-2">
        You’re eligible to use{" "}
        <span className="text-foreground font-bold">“Turkish Lira”</span>
      </div>
      <div className="text-sm font-normal text-foreground/55">
        Aenean elementum libero vel facilisis tristique. Proin sed placerat
        elit, sed malesuada lectus. In sit amet nulla dui.
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6 mt-4"
      >
        <div className="flex-grow flex flex-col items-start justify-start mb-40">
          <Switch
            checked={form.watch("useTurkishLira")}
            onCheckedChange={(checked) =>
              form.setValue("useTurkishLira", checked)
            }
            className="data-[state=checked]:bg-green-600"
          />
        </div>
        <Button type="submit" className="w-full" variant="gray">
          Save
        </Button>
      </form>
    </div>
  );
}
