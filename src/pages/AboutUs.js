import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
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
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Trend Era</Subheading>}
        heading="We are a modern design agency."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://i.pinimg.com/736x/ec/71/b6/ec71b627a5b992af285fb9ade2a9e4c7.jpg"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aspire to redefine modern fashion."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://i.pinimg.com/736x/5e/4c/ab/5e4cab7b1c9da47350069b83f195a3ba.jpg"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="What Drives Us."
        description="At Trend Era, we value quality, creativity, and customer satisfaction. Our goal is to bring timeless fashion to everyone, everywhere."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Always ready to assist with fashion inquiries and orders."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Experts curating the best selections to lead in fashion."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Prioritizing happiness with top service and quality."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
