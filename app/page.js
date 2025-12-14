import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import IndustryExperience from "@/components/IndustryExperience";
import AuditSocialProof from "@/components/AuditSocialProof";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FadeIn>
        <FeaturedWork />
      </FadeIn>
      <FadeIn>
        <IndustryExperience />
      </FadeIn>
      <FadeIn>
        <AuditSocialProof />
      </FadeIn>
      <Footer />
    </main>
  );
}
