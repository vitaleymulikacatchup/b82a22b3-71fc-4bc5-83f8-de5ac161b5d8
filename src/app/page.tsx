"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { UtensilsCrossed, Heart } from "lucide-react";

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
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Gloria"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930223755-agjx1vvq.jpg"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Table", href: "contact" }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Gloria"
          description="Culinary excellence meets warm hospitality. Experience elevated dining in an atmosphere of refined elegance"
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Now", href: "contact" }
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
      
      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          icon={UtensilsCrossed}
          title="Where tradition meets innovation. Gloria celebrates authentic flavors elevated with contemporary techniques, crafted by passionate chefs dedicated to culinary excellence"
          description="Founded with passion"
          subdescription="Serving exceptional cuisine since 2015"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930229973-tluynq5t.jpg"
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
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930239089-p830myjm.jpg",
                  imageAlt: "Marco Rossi Executive Chef"
                },
                {
                  id: "2",
                  title: "Elena Moretti",
                  subtitle: "Sous Chef",
                  detail: "Italian culinary master",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930240424-hlhgfoj9.jpg",
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
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930241721-tkcgen93.jpg",
                  imageAlt: "Lucas Santos Manager"
                },
                {
                  id: "4",
                  title: "Sophia Laurent",
                  subtitle: "Head Server",
                  detail: "Wine & dining specialist",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930242824-ttom4onp.jpg",
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930231240-zrrsu11r.png",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Special Events",
              testimonial: "Gloria provided the perfect setting for our anniversary celebration. Outstanding service and remarkable cuisine made it unforgettable.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930232841-sbscmqsv.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Regular Diner",
              testimonial: "The attention to detail is remarkable. From presentation to taste, every dish tells a story. This is fine dining at its best.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930234123-9g2a65kn.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "James Patterson",
              role: "Food Critic",
              testimonial: "Gloria stands out as a beacon of culinary excellence. The chef's creativity combined with impeccable execution creates memorable moments.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930235503-b97bv966.jpg",
              imageAlt: "James Patterson"
            },
            {
              id: "5",
              name: "Victoria Scott",
              role: "Corporate Events",
              testimonial: "We hosted our company dinner here and were blown away. The team accommodated all requests gracefully while maintaining exceptional standards.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930236629-ex21bpwd.jpg",
              imageAlt: "Victoria Scott"
            },
            {
              id: "6",
              name: "David Thompson",
              role: "Weekly Guest",
              testimonial: "Gloria has become our favorite destination. The consistency in quality and the warmth of hospitality keep us coming back.",
              icon: Heart,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930237973-jttrd3gc.jpg",
              imageAlt: "David Thompson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
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
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764930223755-agjx1vvq.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 Gloria Restaurant. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "menu" },
                { label: "Reserve", href: "contact" },
                { label: "About", href: "about" }
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
      </div>
    </ThemeProvider>
  );
}