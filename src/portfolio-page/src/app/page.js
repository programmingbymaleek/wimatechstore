import { ContactUsSection } from "@/app/components/contactussection-component/contactussection.component";
import { AboutSection } from "@/app/components/aboutsection-component/aboutsection.component";
import { FooterSection } from "@/app/components/footersection-component/footersection.component";
import { HeroSectionComponent } from "@/app/components/herosection-component/herosection.component";
import { NavBarComponent } from "@/app/components/navbar-component/navbar.component";
import { OurTeamSection } from "@/app/components/ourteamsection-component/ourteamsection.component";
import { ServicesSection } from "@/app/components/servicessection-component/servicessection.component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-center backgroundDiv w-full ">
        <div className="bg-gray-900/70">
          <NavBarComponent />
          <HeroSectionComponent />
        </div>
      </div>
      <div className="w-full mx-auto max-w-7xl">
        <AboutSection />
        <ServicesSection />
        <OurTeamSection />
        <ContactUsSection />
      </div>

      <FooterSection />
    </main>
  );
}
