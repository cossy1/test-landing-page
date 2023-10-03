import Advert from "@/app/components/sections/advert";
import Community from "@/app/components/sections/community";
import Events from "@/app/components/sections/events";
import Faq from "@/app/components/sections/faq";
import Hero from "@/app/components/sections/hero";
import Members from "@/app/components/sections/members";
import Testimonial from "@/app/components/sections/testimonial";
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
