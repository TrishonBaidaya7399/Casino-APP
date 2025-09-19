import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
const OutlineCard = dynamic(
    () => import("@/components/global-components/cards/outline-card")
);

export default function AccountPage() {
    return (
        <div className="w-full grid grid-cols-2 gap-6">
            <OutlineCard title="Email">
                <div className="w-full h-full flex flex-col justify-between gap-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs text-white/55 mb-2"
                        >
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="mon1453@yandex.com"
                            className="w-full h-12 text-white placeholder:text-white"
                        />
                    </div>
                    <div className="w-full">
                        <Button
                            fullWidth
                            variant="orangeGradient"
                        >
                            Confirm Email
                        </Button>
                    </div>
                </div>
            </OutlineCard >
            <OutlineCard title="Phone Number">
                <div className="w-full h-full flex flex-col gap-6 justify-between">
                    <div className="text-sm">
                        We only service areas that are listed in the available country code list.
                    </div>
                    <div className="w-full">
                        <Button
                            fullWidth
                            variant="orangeGradient"
                        >
                            Confirm Email
                        </Button>
                    </div>
                </div>
            </OutlineCard >
        </div >
    );
}
