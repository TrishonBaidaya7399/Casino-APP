"use client";

import type { ReactNode } from "react";
import SettingsIconSvg from "@/components/common/svg_icons/settings-icon-svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const settingsLinks = [
    { name: "Account", href: "/settings/account" },
    { name: "Security", href: "/settings/security" },
    { name: "Preferences", href: "/settings/preferences" },
    { name: "API", href: "/settings/api" },
    { name: "Verification", href: "/settings/verification" },
    { name: "Offers", href: "/settings/offers" },
];

export default function SettingsLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            <div className="w-full bg-background-1 text-white py-4">
                <div className="app-container">
                    <div className="flex gap-3 font-medium">
                        <SettingsIconSvg />
                        <span>
                            Settings
                        </span>
                    </div>
                </div>
            </div>
            <div className="app-container py-6">
                <div className="flex items-start gap-6">
                    {/* Sidebar */}
                    <aside className="max-w-52 w-full text-white rounded-md overflow-hidden bg-background-1">
                        <ul className="">
                            {settingsLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`inline-block px-4 py-3 w-full text-sm transition-all duration-300 
                                            ${pathname === link.href
                                                ? "bg-background-2 text-white border-l-3 border-white"
                                                : "hover:bg-background-2/65 border-l-3 border-transparent"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Content */}
                    <main className="flex-1">{children}</main>
                </div>
            </div>
        </>
    );
}
