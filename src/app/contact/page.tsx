"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from "next/link";

export default function ContactPage() {
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
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Table"
          description="Join us for an unforgettable evening. Secure your reservation today and experience Gloria's culinary artistry"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Reservation Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary preferences",
            rows: 4,
            required: false
          }}
          useInvertedBackground="noInvert"
          buttonText="Confirm Reservation"
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