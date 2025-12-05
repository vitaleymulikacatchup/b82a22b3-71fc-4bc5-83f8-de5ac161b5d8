"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function AboutPage() {
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

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          icon={UtensilsCrossed}
          title="Where tradition meets innovation. Gloria celebrates authentic flavors elevated with contemporary techniques, crafted by passionate chefs dedicated to culinary excellence"
          description="Founded with passion"
          subdescription="Serving exceptional cuisine since 2015"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930867428-6n01j9cs.jpg"
          imageAlt="Gloria Restaurant elegant dining space"
          useInvertedBackground="noInvert"
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

      <div id="team" data-section="team">
        <TeamCardEleven
          title="Meet Our Team"
          description="Dedicated professionals passionate about creating unforgettable dining experiences"
          groups={[
            {
              id: "kitchen",
              groupTitle: "Culinary Team",
              members: [
                {
                  id: "1",
                  title: "Marco Rossi",
                  subtitle: "Executive Chef",
                  detail: "20 years of experience",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930874421-i9k4mvr9.jpg",
                  imageAlt: "Marco Rossi Executive Chef"
                },
                {
                  id: "2",
                  title: "Elena Moretti",
                  subtitle: "Sous Chef",
                  detail: "Italian culinary master",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930875307-qbhtz3yk.jpg",
                  imageAlt: "Elena Moretti Sous Chef"
                }
              ]
            },
            {
              id: "service",
              groupTitle: "Front of House",
              members: [
                {
                  id: "3",
                  title: "Lucas Santos",
                  subtitle: "Restaurant Manager",
                  detail: "15 years in hospitality",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930876317-zt13rkwr.jpg",
                  imageAlt: "Lucas Santos Manager"
                },
                {
                  id: "4",
                  title: "Sophia Laurent",
                  subtitle: "Head Server",
                  detail: "Wine & dining specialist",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930877341-kjvq9v5n.jpg",
                  imageAlt: "Sophia Laurent Head Server"
                }
              ]
            }
          ]}
          animationType="slide-up"
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
              { label: "Reserve", href: "/contact" }
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