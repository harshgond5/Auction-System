import Hero from "../components/home/Hero/Hero";
import FeaturedAuctions from "../components/home/FeaturedAuctions/FeaturedAuction";
import LiveActivity from "../components/home/LiveActivity/LiveActivity";
import HowItWorks from "../components/home/HowItWorks/HowItWorks";
import Categories from "../components/home/Categories/Categories";
import WhyChoose from "../components/home/WhyChoose/WhyChoose";
import Stats from "../components/home/Stats/Stats";
import Testimonials from "../components/home/Testimonials/Testimonials";

import { featuredAuctions } from "../data/dummyData";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedAuctions auctions={featuredAuctions} />

      <Categories />
      <LiveActivity />
      <WhyChoose />
      <Stats />

      <HowItWorks />

      <Testimonials />
     
    </>
  );
}