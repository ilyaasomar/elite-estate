import About from "@/components/about";
import Agents from "@/components/agents";
import Blog from "@/components/blog";
import Facilities from "@/components/facilities";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Listings from "@/components/listings";
import Navbar from "@/components/navbar";
import Newsletter from "@/components/newsletter";
import Partners from "@/components/partners";
import PopularProperties from "@/components/popular-property";
import Services from "@/components/services";
import Summary from "@/components/summary";
import Testmonials from "@/components/testmonials";

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
      <Testmonials />
      <PopularProperties />
      <Partners />
      <Facilities />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
