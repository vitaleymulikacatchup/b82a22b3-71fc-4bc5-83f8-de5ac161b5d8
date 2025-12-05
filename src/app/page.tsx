"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function HomePage() {
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
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Gloria"
          description="Culinary excellence meets warm hospitality. Experience elevated dining in an atmosphere of refined elegance"
          buttons={[
            { text: "View Menu", href: "/menu" },
            { text: "Reserve Now", href: "/contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930225160-rvncmjqv.jpg"
          imageAlt="Gloria Restaurant fine dining atmosphere"
          showDimOverlay={true}
          ariaLabel="Gloria Restaurant hero section"
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Menu"
          description="Discover our carefully curated selection of signature dishes"
          products={[
            {
              id: "1",
              name: "Pan-Seared Salmon",
              price: "$28",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930226286-7wau40iu.jpg",
              imageAlt: "Pan-seared salmon with seasonal vegetables"
            },
            {
              id: "2",
              name: "Truffle Risotto",
              price: "$24",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930227385-zpmpg1qg.jpg",
              imageAlt: "Creamy truffle risotto with parmesan"
            },
            {
              id: "3",
              name: "Prime Ribeye",
              price: "$42",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930228620-do6hd1nv.jpg",
              imageAlt: "Premium prime ribeye steak"
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