"use client";

import Link from "next/link";
import FacebookIconSVG from "../svg_icons/FacebookIconSVG";
import XIconSVG from "../svg_icons/XIconSVG";
import MessageIconSVG from "../svg_icons/MessageIconSVG";
import InstaIconSVG from "../svg_icons/InstaIconSVG";
import YoutubeIconSVG from "../svg_icons/YoutubeIconSVG";
import TiktokIconSVG from "../svg_icons/TiktokIconSVG";
import LinkedinIconSVG from "../svg_icons/LinkedinIconSVG";

const footerLinks = {
    "Casino": [
        "Casino Games",
        "Slots",
        "Live Casino",
        "Roulette",
        "Blackjack",
        "Poker",
        "Publishers",
        "Promos & Competitions",
        "Brand Name Engine",
    ],
    "Sports": [
        "Sportsbook",
        "Live Sports",
        "Soccer",
        "Basketball",
        "Tennis",
        "eSports",
        "Bet Bonuses",
        "Sports Rules",
        "Racing Rules",
    ],
    "Support": [
        "Help Center",
        "Fairness",
        "Gambling Helpline",
        "Live SupportSelf Exclusion",
        "Law Enforcement Request",
    ],
    "About Us": [
        "VIP Club",
        "Affiliate",
        "Privacy Policy",
        "AML Policy",
        "Terms of Service",
    ],
    "Payment Info": [
        "Deposit & Withdrawals",
        "Currency Guide",
        "Crypto Guide",
        "Supported Crypto",
        "How to Use the Vault",
        "How Much to Bet With",
    ],
    "FAQ": [
        "How-to Guides",
        "Online Casino Guide",
        "Sports Betting Guide",
        "How to Live Stream Sports",
        "Brand Name VIP Guide",
        "House Edge Guide",
    ],
};

const socialIcons = [
    { Icon: FacebookIconSVG, href: "#" },
    { Icon: XIconSVG, href: "#" },
    { Icon: MessageIconSVG, href: "#" },
    { Icon: InstaIconSVG, href: "#" },
    { Icon: YoutubeIconSVG, href: "#" },
    { Icon: TiktokIconSVG, href: "#" },
    { Icon: LinkedinIconSVG, href: "#" },
];

export default function Footer() {
    return (
        <div className="app-container pb-10">
            <footer className="bg-background-1 p-6 rounded-lg overflow-hidden text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="space-y-2.5">
                            <h4 className="font-semibold text-white">{title}</h4>
                            <ul className="space-y-2.5 text-white/55">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="hover:text-white transition-all duration-300">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-col lg:flex-row items-center justify-between border-t border-border pt-4">
                    <div className="flex space-x-4">
                        {socialIcons.map(({ Icon, href }, i) => (
                            <Link key={i} href={href} className="group">
                                <Icon className="fill-white/55 group-hover:fill-white transition-all duration-300"/>
                            </Link>
                        ))}
                    </div>
                    <p className="text-xs mt-4 lg:mt-0 text-white/55">
                        © 2025 brandname.com | All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
