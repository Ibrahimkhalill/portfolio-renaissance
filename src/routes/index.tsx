import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Tech } from "@/components/Tech";
import { Works } from "@/components/Works";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ibrahim Hossen — Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ibrahim Hossen — Full Stack Developer building AI-powered web and mobile applications with React, Next.js, Django.",
      },
      { property: "og:title", content: "Ibrahim Hossen — Full Stack Developer" },
      {
        property: "og:description",
        content: "Full Stack Developer & AI Engineer. Selected work, experience, and tech stack.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </main>
      {/* <Footer /> */}
      <Toaster />
    </div>
  );
}
