import localFont from "next/font/local";
import "./globals.css";
import { ContactUsSection } from "./components/contactussection-component/contactussection.component";
import { FooterSection } from "./components/footersection-component/footersection.component";

const gtPlanar = localFont({
  src: [
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Italic-15-Regular.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Italic-15-Light.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/GT-Planar/GT-Planar-AC-Italic-15-Thin.otf",
      weight: "300",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "Certified Global Enterprise",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gtPlanar.className}>
        <main>
          {children}
          <div>
            <ContactUsSection />
            <FooterSection />
          </div>
        </main>
      </body>
    </html>
  );
}
