// app/fonts.ts
import { Cormorant, Montserrat } from "next/font/google";

export const cormorant = Cormorant({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: "--font-cormorant",
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: "--font-montserrat",
});