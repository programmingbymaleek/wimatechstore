import { ContactUsSection } from "@/app/components/contactussection-component/contactussection.component";
import { AboutSection } from "@/app/components/aboutsection-component/aboutsection.component";
import { FooterSection } from "@/app/components/footersection-component/footersection.component";
import { OurTeamSection } from "@/app/components/ourteamsection-component/ourteamsection.component";
import { ServicesSection } from "@/app/components/servicessection-component/servicessection.component";

import BackgroundImageShuffler from "./components/backgroundimageshuffler-component/background-image-shuffler.component";
import { NavBarComponent } from "./components/navbar-component/navbar.component";
import { HeroSectionComponent } from "./components/herosection-component/herosection.component";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundImageShuffler>
        <NavBarComponent />
        <HeroSectionComponent />
      </BackgroundImageShuffler>
      <div className="w-full mx-auto max-w-7xl">
        <AboutSection />
        <ServicesSection />
        <OurTeamSection />
      </div>
    </div>
  );
}
