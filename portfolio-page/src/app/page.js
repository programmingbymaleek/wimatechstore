import { ContactUsSection } from "@/app/components/contactussection-component/contactussection.component";
import { AboutSection } from "@/app/components/aboutsection-component/aboutsection.component";
import { FooterSection } from "@/app/components/footersection-component/footersection.component";
import { OurTeamSection } from "@/app/components/ourteamsection-component/ourteamsection.component";
import { ServicesSection } from "@/app/components/servicessection-component/servicessection.component";

import BackgroundImageShuffler from "./components/backgroundimageshuffler-component/background-image-shuffler.component";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundImageShuffler/>
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
