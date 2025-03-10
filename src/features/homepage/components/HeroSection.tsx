import { cormorant, montserrat } from "@/app/font"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-8 md:py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold leading-tight ${cormorant.className}`}
          >
            Elevate Your Workspace with{" "}
            <span className="relative inline-block">
              Co-Labs
              <div className="absolute -bottom-2 left-0 -z-20 w-full h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px] xl:h-[120px]">
                <Image src="/Vector 1.svg" alt="Vector" fill className="object-contain" />
              </div>
            </span>
          </h1>

          <p className={`${montserrat.className} text-gray-600 text-base md:text-lg max-w-2xl`}>
            Welcome to Co-Labs – where innovation meets collaboration in the heart of productivity! Unleash your
            potential in our thoughtfully designed coworking spaces, tailored to inspire creativity and foster
            connections.
          </p>

          <div>
            <button
              className="bg-black text-white px-6 py-3 md:px-8 md:py-3 rounded-full 
              hover:bg-gray-800 transition duration-300 text-sm md:text-base"
            >
              Claim Your Spot
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src="/herosection.avif"
              alt="Modern coworking space interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

