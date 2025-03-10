// pages/index.tsx
import Image from "next/image";
import Head from "next/head";
import { cormorant, montserrat } from "@/app/font";
import CompanyValue from "./components/CompanyValue";
import ServicesComponent from "@/components/Services";
import CompanyNumberSection from "./components/CompanyNumber";
import CompanyTagline from "./components/CompanyTagline";
import Testimonials from "./components/Testimonials";

import TrustedSection from "./components/TrustedSection";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <CompanyValue />
        <TrustedSection />
        <ServicesComponent />
        <CompanyNumberSection />
        <CompanyTagline />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
