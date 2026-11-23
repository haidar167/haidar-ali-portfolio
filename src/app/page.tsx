import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Process } from "@/components/portfolio/process";
import { TechStack } from "@/components/portfolio/tech-stack";
import { WhyMe } from "@/components/portfolio/why-me";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="portfolio-root flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Process />
        <TechStack />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
