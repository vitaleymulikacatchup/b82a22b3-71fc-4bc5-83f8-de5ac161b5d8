"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from "next/link";
import { Heart } from "lucide-react";

export default function ExperiencePage() {
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
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930223755-agjx1vvq.jpg"
          logoAlt="Gloria Restaurant"
          navItems={[
            { name: "Menu", id: "/menu" },
            { name: "About", id: "/about" },
            { name: "Experience", id: "/experience" },
            { name: "Reviews", id: "/reviews" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{ text: "Reserve Table", href: "/contact" }}
          buttonClassName="font-semibold"
          buttonTextClassName="text-sm"
        />
      </div>
      
      <div id="experience" data-section="experience">
        <MetricCardTwo
          title="Gloria by the Numbers"
          description="Our commitment to excellence reflected in our achievements"
          metrics={[
            {
              id: "1",
              value: "9+",
              description: "Years of Excellence"
            },
            {
              id: "2",
              value: "50K+",
              description: "Happy Guests Served"
            },
            {
              id: "3",
              value: "4.9★",
              description: "Average Rating"
            },
            {
              id: "4",
              value: "12",
              description: "Signature Dishes"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <FooterBaseReveal
        logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930223755-agjx1vvq.jpg"
        logoWidth={40}
        logoHeight={40}
        copyrightText="© 2025 Gloria Restaurant. All rights reserved."
        columns={[
          {
            title: "Restaurant",
            items: [
              { label: "Menu", href: "/menu" },
              { label: "Reserve", href: "/contact" },
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