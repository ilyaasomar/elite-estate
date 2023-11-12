import About from "@/components/about";
import Agents from "@/components/agents";
import Hero from "@/components/hero";
import Listings from "@/components/listings";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Summary from "@/components/summary";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Summary />
      <Agents />
      <Listings />
    </div>
  );
}
