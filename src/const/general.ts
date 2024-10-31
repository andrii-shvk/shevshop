import {ReactComponent as Facebook} from "../assets/icons/SocialIcons/facebook.svg";
import {ReactComponent as Twitter} from "../assets/icons/SocialIcons/twitter.svg";
import {ReactComponent as Instagram} from "../assets/icons/SocialIcons/instagram.svg";
import React from "react";

export type Locale = "en" | "ua";
export type Theme = "light" | "dark";
export enum ThemeEnum {
    light = "light",
    dark = "dark",
    plusMinus = "plusMinus",
}

interface ISocialLinks {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    to: string;
    alt: string;
}

export const SOCIAL_LINKS:ISocialLinks[] = [
    {icon: Facebook, to: "/", alt: "Facebook" },
    {icon: Twitter, to: "/", alt: "Twitter" },
    {icon: Instagram, to: "/", alt: "Instagram" },
]