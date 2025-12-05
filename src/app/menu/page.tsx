"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Link from "next/link";

export default function MenuPage() {
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
      
      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Full Menu"
          description="Explore our complete collection of signature dishes and seasonal specialties"
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
            },
            {
              id: "4",
              name: "Duck Confit",
              price: "$32",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930226286-7wau40iu.jpg",
              imageAlt: "Traditional duck confit with herbs"
            },
            {
              id: "5",
              name: "Lobster Bisque",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930227385-zpmpg1qg.jpg",
              imageAlt: "Rich lobster bisque with cream"
            },
            {
              id: "6",
              name: "Chocolate Soufflé",
              price: "$14",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930228620-do6hd1nv.jpg",
              imageAlt: "Decadent chocolate soufflé dessert"
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