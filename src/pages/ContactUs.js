import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
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
          },
          {
            title: "Bangkok, Thailand",
            description: (
              <>
                <Address>
                  <AddressLine>15 Sukhumvit Rd.</AddressLine>
                  <AddressLine>Bangkok, 10110</AddressLine>
                </Address>
                <Email>contact@trendera.com</Email>
                <Phone>+66 2 1234 5678</Phone>
              </>
            )
          },
          {
            title: "Manila, Philippines",
            description: (
              <>
                <Address>
                  <AddressLine>101 Bonifacio Global City</AddressLine>
                  <AddressLine>Taguig, Metro Manila</AddressLine>
                </Address>
                <Email>contact@trendera.com</Email>
                <Phone>+63 2 1234 5678</Phone>
              </>
            )
          },
          {
            title: "Seoul, South Korea",
            description: (
              <>
                <Address>
                  <AddressLine>123 Gangnam District</AddressLine>
                  <AddressLine>Seoul, 06155</AddressLine>
                </Address>
                <Email>contact@trendera.com</Email>
                <Phone>+82 2 1234 5678</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
