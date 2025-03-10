import Image from "next/image";
import { cormorant } from "./font";
import HomePage from "@/features/homepage";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Home | Co-Labs Space",
  description:
    "Discover our premium coworking spaces designed for productivity and collaboration",
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
