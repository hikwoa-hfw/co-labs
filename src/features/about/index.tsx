import { cormorant, montserrat } from "@/app/font";
import TeamsComponent from "@/components/Teams";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className={`${montserrat.className} min-h-screen flex flex-col`}>
      {/* Hero Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${cormorant.className}`}>
            Our Story,{" "}
            <span className="relative">
              Mission
              <div className="absolute -bottom-5 left-0 -z-20 w-full h-[80px] md:h-[110px]">
                <Image
                  src="/Vector 1.svg"
                  alt="Vector"
                  fill
                  className="object-contain"
                />
              </div>
            </span>{" "}
            & Values
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl">
            Founded in 2018, Co-Labs has been redefining the workspace experience
            by creating environments where innovation thrives and communities
            flourish.
          </p>
        </div>
      </section>

      {/* Company History Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`${cormorant.className} text-3xl md:text-5xl font-bold mb-6`}>
              Our Journey
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Co-Labs was born from a simple observation: traditional
                workspaces weren't meeting the evolving needs of today's
                professionals. Our founders, having experienced the limitations
                of conventional offices, envisioned a space that would foster
                creativity, collaboration, and community.
              </p>
              <p className="text-gray-700">
                What started as a single location in downtown has now expanded
                to multiple premium spaces across the city, each designed with
                our core philosophy in mind: that the right environment can
                transform how we work and create.
              </p>
              <p className="text-gray-700">
                Through economic shifts and a global pandemic, we've adapted and
                evolved, always keeping our members' needs at the center of
                every decision. Today, Co-Labs stands as a testament to
                resilience and innovation in the workspace industry.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-[#c5ff6b] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="font-bold">2018</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">First Location Opens</h3>
                  <p className="text-gray-600">
                    Our flagship space launched in the heart of downtown
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#c5ff6b] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="font-bold">2020</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Pandemic Pivot</h3>
                  <p className="text-gray-600">
                    Introduced flexible membership options and enhanced digital
                    services
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#c5ff6b] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="font-bold">2022</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Expansion Phase</h3>
                  <p className="text-gray-600">
                    Opened three new locations and launched enterprise solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/history.avif"
              alt="Co-Labs office space evolution"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

     

      <TeamsComponent/>

      {/* Culture Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className={`text-3xl md:text-5xl font-bold ${cormorant.className}`}>
              Our Culture & Values
            </h2>
            <p className="mt-4 text-gray-300">
              At Co-Labs, our culture is built on principles that guide
              everything we do. We believe that the right environment fosters
              innovation, collaboration, and growth.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#2a2a2a] p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[#c5ff6b] flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center">
        <h2 className={`text-3xl md:text-5xl font-bold ${cormorant.className}`}>
          Ready to experience Co-Labs?
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Join our community of innovators, creators, and entrepreneurs.
          Discover a workspace that inspires productivity and fosters
          connections.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </main>
  );
}

// Team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    title: "Founder & CEO",
    bio: "With over 15 years in commercial real estate and workplace strategy, Sarah founded Co-Labs to reimagine how we work together.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Michael Chen",
    title: "Chief Operations Officer",
    bio: "Michael ensures our spaces run smoothly and efficiently, bringing his experience from leading operations at tech startups.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Aisha Patel",
    title: "Head of Community",
    bio: "Aisha creates programs and events that foster meaningful connections among our diverse community of members.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "David Rodriguez",
    title: "Design Director",
    bio: "David leads our space design, creating environments that balance aesthetics, functionality, and member wellbeing.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "Emma Wilson",
    title: "Marketing Manager",
    bio: "Emma shares the Co-Labs story with the world, highlighting our unique approach to collaborative workspaces.",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "James Taylor",
    title: "Technology Lead",
    bio: "James ensures our digital infrastructure supports seamless experiences for members across all locations.",
    image: "/placeholder.svg?height=800&width=600",
  },
];

// Company values data
const values = [
  {
    title: "Community First",
    description:
      "We believe in the power of community to inspire, support, and drive innovation. Every decision we make prioritizes the needs of our members.",
    icon: <span className="text-black font-bold text-xl">C</span>,
  },
  {
    title: "Thoughtful Design",
    description:
      "Our spaces are intentionally designed to enhance productivity, creativity, and wellbeing, with attention to every detail.",
    icon: <span className="text-black font-bold text-xl">D</span>,
  },
  {
    title: "Inclusive Environment",
    description:
      "We create spaces where everyone feels welcome, valued, and empowered to contribute their unique perspectives.",
    icon: <span className="text-black font-bold text-xl">I</span>,
  },
  {
    title: "Sustainable Practices",
    description:
      "We're committed to environmentally responsible operations, from our building materials to our daily practices.",
    icon: <span className="text-black font-bold text-xl">S</span>,
  },
  {
    title: "Continuous Innovation",
    description:
      "We constantly evolve our spaces and services to meet the changing needs of our members and the future of work.",
    icon: <span className="text-black font-bold text-xl">I</span>,
  },
  {
    title: "Work-Life Harmony",
    description:
      "We believe in creating environments that support balanced, fulfilling lives both in and outside of work.",
    icon: <span className="text-black font-bold text-xl">H</span>,
  },
];
