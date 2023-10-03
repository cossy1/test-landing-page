import Advert from "@/app/components/advert";
import Community from "@/app/components/community";
import Events from "@/app/components/events";
import Faq from "@/app/components/faq";
import Hero from "@/app/components/hero";
import Members from "@/app/components/members";
import Testimonial from "@/app/components/testimonial";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Members />
      <Advert />
      <Community />
      <Events />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
