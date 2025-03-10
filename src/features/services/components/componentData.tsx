export const servicesData = [
    {
      title: "Private Office",
      overview:
        "Secure and flexible office spaces for teams of all sizes. Enjoy privacy, customization, and access to all our amenities.",
      icon: "/privateoffice.avif",
    },
    {
      title: "Event Spaces",
      overview:
        "Host your next conference, workshop, or networking event in our versatile event spaces. We offer full-service support and state-of-the-art technology.",
      icon: "/eventspace.avif",
    },
    {
      title: "Meeting Rooms",
      overview:
        "Book our fully equipped meeting rooms for your next team meeting, client presentation, or brainstorming session. Available by the hour or day.",
      icon: "/meetingroom.avif",
    },
    {
      title: "Cafe and Co-Working Spaces",
      overview:
        "Drop in and work from our vibrant co-working spaces. Enjoy premium coffee, high-speed internet, and a collaborative atmosphere.",
      icon: "/cafe.avif",
    },
  ]
  
  export const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Moving our team to Co-Labs private office was the best decision we made. The space is beautiful, the amenities are top-notch, and the community has led to valuable connections.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "We've hosted several client events in their event spaces and have always been impressed. The staff is incredibly helpful and the facilities are state-of-the-art.",
    },
    {
      name: "Aisha Patel",
      role: "Freelance Designer",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "As a freelancer, the co-working space gives me the perfect balance of community and focus. The coffee is amazing and the networking events have led to new clients.",
    },
    {
      name: "David Rodriguez",
      role: "Project Manager",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The meeting rooms are perfect for our client presentations. High-quality video conferencing equipment and the professional environment have helped us close more deals.",
    },
    {
      name: "Emma Wilson",
      role: "Remote Team Lead",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Our remote team uses Co-Labs when we need to collaborate in person. The flexible options mean we can scale up or down as needed, and the staff always remembers our preferences.",
    },
    {
      name: "James Taylor",
      role: "Tech Entrepreneur",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "I've worked from co-working spaces around the world, and Co-Labs stands out for its attention to detail, community focus, and thoughtful design. It's become my second home.",
    },
  ];

 export function getServiceFeatures(serviceTitle: any) {
    switch (serviceTitle) {
      case "Private Office":
        return [
          "Secure, lockable offices for teams of 1-20+ people",
          "24/7 building access with personalized security",
          "Ergonomic furniture and customizable layouts",
          "Dedicated high-speed internet connection",
          "Access to meeting rooms and common areas",
          "Mail handling and business address services",
        ];
      case "Event Spaces":
        return [
          "Flexible configurations for 10-150+ attendees",
          "State-of-the-art AV equipment and presentation tools",
          "Catering options and refreshment services",
          "Event planning assistance and on-site support",
          "Networking areas and breakout spaces",
          "Branding opportunities throughout the venue",
        ];
      case "Meeting Rooms":
        return [
          "Professional spaces for 4-20 people",
          "High-definition video conferencing equipment",
          "Interactive whiteboards and presentation displays",
          "Complimentary tea, coffee, and water service",
          "Easy online booking system with flexible hours",
          "Technical support available when needed",
        ];
      case "Cafe and Co-Working Spaces":
        return [
          "Hot desks and casual seating options",
          "Premium coffee, tea, and light refreshments",
          "High-speed WiFi and power outlets throughout",
          "Community events and networking opportunities",
          "Quiet zones for focused work",
          "Flexible day passes and membership options",
        ];
      default:
        return [];
    }
  }
  
  export function getServicePricing(serviceTitle: any) {
    switch (serviceTitle) {
      case "Private Office":
        return [
          { plan: "1-2 Person Office", price: "Starting at $800/month" },
          { plan: "3-4 Person Office", price: "Starting at $1,500/month" },
          { plan: "5-8 Person Office", price: "Starting at $2,800/month" },
          { plan: "9+ Person Office", price: "Custom pricing" },
        ];
      case "Event Spaces":
        return [
          { plan: "Half Day (4 hours)", price: "Starting at $500" },
          { plan: "Full Day (8 hours)", price: "Starting at $900" },
          { plan: "Evening Event (6pm-10pm)", price: "Starting at $700" },
          { plan: "Weekend Full Day", price: "Starting at $1,100" },
        ];
      case "Meeting Rooms":
        return [
          { plan: "Small Room (4-6 people)", price: "$30/hour" },
          { plan: "Medium Room (8-12 people)", price: "$50/hour" },
          { plan: "Large Room (14-20 people)", price: "$80/hour" },
          { plan: "Monthly Package (40 hours)", price: "20% discount" },
        ];
      case "Cafe and Co-Working Spaces":
        return [
          { plan: "Day Pass", price: "$25/day" },
          { plan: "10-Day Pass Package", price: "$200 ($20/day)" },
          { plan: "Hot Desk Membership", price: "$275/month" },
          { plan: "Dedicated Desk", price: "$450/month" },
        ];
      default:
        return [];
    }
  }
  
  // Testimonial data
  
  // FAQ data
  export const faqs = [
    {
      question: "What's included in a private office membership?",
      answer:
        "Private office memberships include 24/7 access to your secure office, high-speed internet, use of meeting rooms (credits based on team size), access to all common areas and amenities, mail handling, and inclusion in community events. Utilities, cleaning, and maintenance are all included in your monthly fee.",
    },
    {
      question: "Can I customize my office space?",
      answer:
        "Yes, we offer various customization options for private offices. Basic branding and decoration are included, while more extensive renovations can be accommodated for an additional fee and with management approval.",
    },
    {
      question: "Do you offer virtual office services?",
      answer:
        "Yes, our virtual office plans include a professional business address, mail handling and forwarding, and optional phone answering services. You can also add meeting room credits and day passes to use the physical space when needed.",
    },
    {
      question: "How do I book an event space or meeting room?",
      answer:
        "Members can book through our online portal or mobile app. Non-members can contact our events team directly. We recommend booking at least 48 hours in advance for meeting rooms and 2 weeks for event spaces, though last-minute bookings may be accommodated based on availability.",
    },
    {
      question: "Are there any discounts for long-term commitments?",
      answer:
        "Yes, we offer discounted rates for 6-month and 12-month commitments across all our membership types. The specific discount varies by location and membership type, so please contact our sales team for details.",
    },
  ];
  