import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as FacebookIcon } from "feather-icons/dist/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "feather-icons/dist/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "feather-icons/dist/icons/instagram.svg";
import { ReactComponent as PhoneIcon } from "feather-icons/dist/icons/phone.svg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";
import { ReactComponent as MapPinIcon } from "feather-icons/dist/icons/map-pin.svg";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw(SectionHeading)`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4 max-w-xl text-center`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8`}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }
`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const HeroContainer = tw.div`relative -mx-8 -mt-8 bg-gradient-to-b from-purple-100 to-white`;
const HeroContent = tw.div`px-4 py-20 lg:py-32 max-w-screen-xl mx-auto relative z-10`;
const HeroText = tw.h1`text-5xl lg:text-6xl font-black tracking-wide text-center text-gray-800`;
const HeroSubText = tw.p`mt-8 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 text-center max-w-lg mx-auto`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      {/* Hero Section */}
      <HeroContainer>
        <HeroContent>
          <HeroText>Let's Build Something Amazing Together</HeroText>
          <HeroSubText>
            Whether you have a project in mind or just want to chat about an idea, we'd love to hear from you!
          </HeroSubText>
        </HeroContent>
      </HeroContainer>

      <Container>
        <Content>
          {/* Quick Contact Methods */}
          <HeadingInfoContainer>
            <HeadingTitle>Contact Methods</HeadingTitle>
            <HeadingDescription>Choose the most convenient way to reach us</HeadingDescription>
          </HeadingInfoContainer>
          <ThreeColumn>
            <Column>
              <Card>
                <span className="imageContainer">
                  <PhoneIcon />
                </span>
                <span className="title">Call Us</span>
                <p className="description">
                  Mon-Fri from 8am to 5pm<br />
                  +62 21 1234 5678
                </p>
              </Card>
            </Column>
            <Column>
              <Card>
                <span className="imageContainer">
                  <EmailIcon />
                </span>
                <span className="title">Email Us</span>
                <p className="description">
                  Send us your questions<br />
                  contact@trendera.com
                </p>
              </Card>
            </Column>
            <Column>
              <Card>
                <span className="imageContainer">
                  <MapPinIcon />
                </span>
                <span className="title">Visit Us</span>
                <p className="description">
                  Come to our headquarters<br />
                  Jakarta, Indonesia
                </p>
              </Card>
            </Column>
          </ThreeColumn>
        </Content>
      </Container>

      
      
      <ContactDetails
        cards={[
          {
            title: "Jakarta, Indonesia",
            description: (
              <>
                <Address>
                  <AddressLine>Jl. Raya Jakarta No. 40</AddressLine>
                  <AddressLine>Jakarta Selatan, DKI Jakarta 12150</AddressLine>
                </Address>
                <Email>contact@trendera.com</Email>
                <Phone>+62 21 1234 5678</Phone>
              </>
            )
          },
          {
            title: "Singapore",
            description: (
              <>
                <Address>
                  <AddressLine>10 Anson Road</AddressLine>
                  <AddressLine>Singapore 079903</AddressLine>
                </Address>
                <Email>contact@trendera.com</Email>
                <Phone>+65 6767 1234</Phone>
              </>
            )
          },
          {
            title: "Kuala Lumpur, Malaysia",
            description: (
              <>
                <Address>
                  <AddressLine>Level 3, Menara KL</AddressLine>
                  <AddressLine>Kuala Lumpur, 50450</AddressLine>
                </Address>
                <Email>contact@trendera.com</Email>
                <Phone>+60 3 1234 5678</Phone>
              </>
            )
          }
        ]}
      />

      {/* Social Links Section */}
      <Container>
        <Content>
          <HeadingInfoContainer>
            <HeadingTitle>Follow Us</HeadingTitle>
            <HeadingDescription>Stay connected with us on social media</HeadingDescription>
          </HeadingInfoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
        </Content>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
