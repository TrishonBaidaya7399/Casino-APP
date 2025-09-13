import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AppHeader() {

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b border-border bg-background transition-all">
      <div className="app-container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          {/* <div className="block md:hidden">
            <button onClick={toggleMobileOpen}>
              <HamburgerSVG className="stroke-white-3" />
            </button>
          </div> */}

          {/* Logo + Brand */}
          <Link href="/" className="inline-flex items-center gap-3">
            <span>
              <Image
                src="/logos/logo.webp"
                alt="Branch logo"
                width={32}
                height={32}
                loading="lazy"
              />
            </span>
            <span className="hidden text-lg font-semibold text-foreground lg:block">
              BRAND NAME
            </span>
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Button href="/" variant="outline" asChild>
            Login
          </Button>

          <Button href="/" variant="orangeGradient" asChild>
            Register
          </Button>
        </div>
      </div>
    </header>
  );
}
