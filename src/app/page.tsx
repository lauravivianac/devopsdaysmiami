import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Audience from "@/components/Audience";
import Topics from "@/components/Topics";
import Miami from "@/components/Miami";
import CallForInterest from "@/components/CallForInterest";
import SponsorTeaser from "@/components/SponsorTeaser";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#fdf8f3" }}>
      <Navbar />
      <Hero />
      <About />
      <Audience />
      <Topics />
      <Miami />
      <CallForInterest />
      <SponsorTeaser />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
