"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Heart } from "lucide-react";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ReviewsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="animatedAurora"
      cardStyle="accent-corner-border"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Gloria"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930862436-twiyu224.jpg"
          logoAlt="Gloria Restaurant"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Menu", id: "/menu" },
            { name: "About", id: "/about" },
            { name: "Reviews", id: "/reviews" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{
            text: "Reserve Table",
            href: "/contact"
          }}
          buttonClassName="font-semibold"
          buttonTextClassName="text-sm"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="Guest Reviews"
          description="Hear from diners who have experienced Gloria"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Frequent Guest",
              testimonial: "An absolutely exquisite dining experience. Every detail from the presentation to the flavors was perfection. We'll be returning every month.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930868366-nppt803g.png",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Special Events",
              testimonial: "Gloria provided the perfect setting for our anniversary celebration. Outstanding service and remarkable cuisine made it unforgettable.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930869558-034soocd.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Regular Diner",
              testimonial: "The attention to detail is remarkable. From presentation to taste, every dish tells a story. This is fine dining at its best.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930870441-7vmf3bdq.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "James Patterson",
              role: "Food Critic",
              testimonial: "Gloria stands out as a beacon of culinary excellence. The chef's creativity combined with impeccable execution creates memorable moments.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930871402-d0bbmke4.jpg",
              imageAlt: "James Patterson"
            },
            {
              id: "5",
              name: "Victoria Scott",
              role: "Corporate Events",
              testimonial: "We hosted our company dinner here and were blown away. The team accommodated all requests gracefully while maintaining exceptional standards.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930872329-2rhfwuge.jpg",
              imageAlt: "Victoria Scott"
            },
            {
              id: "6",
              name: "David Thompson",
              role: "Weekly Guest",
              testimonial: "Gloria has become our favorite destination. The consistency in quality and the warmth of hospitality keep us coming back.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930873350-ragde4ii.jpg",
              imageAlt: "David Thompson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <FooterBaseReveal
        logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930862436-twiyu224.jpg"
        logoWidth={40}
        logoHeight={40}
        copyrightText="© 2025 Gloria Restaurant. All rights reserved."
        columns={[
          {
            title: "Restaurant",
            items: [
              { label: "Home", href: "/" },
              { label: "Menu", href: "/menu" },
              { label: "About", href: "/about" }
            ]
          },
          {
            title: "Contact",
            items: [
              { label: "Phone: (555) 123-4567", href: "tel:+15551234567" },
              { label: "Email: hello@gloria.com", href: "mailto:hello@gloria.com" },
              { label: "123 Culinary Lane, Food City, FC 12345", href: "https://maps.google.com" }
            ]
          },
          {
            title: "Hours",
            items: [
              { label: "Lunch: 12pm - 3pm", href: "#" },
              { label: "Dinner: 6pm - 11pm", href: "#" },
              { label: "Closed Mondays", href: "#" }
            ]
          }
        ]}
      />
    </ThemeProvider>
  );
}