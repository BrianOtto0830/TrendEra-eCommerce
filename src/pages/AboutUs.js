import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { motion } from "framer-motion";

import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

// Motion configuration for Framer Motion
const motionVariants = {
  fadeIn: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  },
};

export default () => {
  return (
    <AnimationRevealPage>
      {/* Header Section */}
      <Header />

      {/* Main Feature 1 Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.fadeIn}
      >
        <MainFeature1
          subheading={<Subheading>About Trend Era</Subheading>}
          heading="We are a modern design agency."
          buttonRounded={false}
          primaryButtonText="See Portfolio"
          imageSrc="https://i.pinimg.com/736x/ec/71/b6/ec71b627a5b992af285fb9ade2a9e4c7.jpg"
        />
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.fadeIn}
      >
        <MainFeature1
          subheading={<Subheading>Our Vision</Subheading>}
          heading="We aspire to redefine modern fashion."
          description="At Trend Era, our vision is to revolutionize the way people experience fashion by providing a seamless blend of style, quality, and affordability. We believe in empowering individuals to express their unique personalities through a wide range of curated clothing, bags, and accessories. With a focus on global trends and sustainable choices, we are committed to offering products that are not only fashionable but also ethically sourced and crafted. Our aim is to create a diverse platform where customers can explore the latest in fashion, whether it's for a casual day out, a formal gathering, or a special occasion. By embracing innovation, we're building an inclusive shopping experience that ensures everyone finds something that resonates with their unique taste. Our commitment to exceptional customer service means we strive to deliver an experience that goes beyond just a transaction, fostering long-term relationships with our global customer base."
          buttonRounded={false}
          primaryButtonText="Contact Us"
          imageSrc="https://i.pinimg.com/736x/5e/4c/ab/5e4cab7b1c9da47350069b83f195a3ba.jpg"
          textOnLeft={false}
        />

        />
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.fadeIn}
      >
        <MainFeature1
          subheading={<Subheading>Our Achievements</Subheading>}
          heading="Leading the Fashion Industry Since 2020"
          description="We've successfully served over 10,000+ happy customers, launched multiple successful fashion collections, and maintained a 4.8/5 customer satisfaction rating. Our commitment to quality and style has earned us recognition in the fashion industry."
          buttonRounded={false}
          primaryButtonText="Learn More"
          imageSrc="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
          textOnLeft={true}
        />
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.fadeIn}
      >
        <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants.stagger}
      >
        <Features
          subheading={<Subheading>Our Values</Subheading>}
          heading="What Drives Us."
          description="At Trend Era, we value quality, creativity, and customer satisfaction. Our goal is to bring timeless fashion to everyone, everywhere."
          cards={[
            {
              imageSrc: SupportIconImage,
              title: "24/7 Support",
              description: "Always ready to assist with fashion inquiries and orders.",
            },
            {
              imageSrc: ShieldIconImage,
              title: "Strong Teams",
              description: "Experts curating the best selections to lead in fashion.",
            },
            {
              imageSrc: CustomerLoveIconImage,
              title: "Customer Satisfaction",
              description: "Prioritizing happiness with top service and quality.",
            },
          ]}
          linkText=""
        />
      </motion.div>

      {/* Footer Section */}
      <Footer />
    </AnimationRevealPage>
  );
};
