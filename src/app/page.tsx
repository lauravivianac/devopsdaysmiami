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
    <main style={{ background: "#040f1c" }} className="min-h-screen">
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
