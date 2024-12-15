import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';

import LogoImage from 'images/logo.svg';
import SimpleLogoTE from 'images/T.png';
import SimpleLogoTEdark from 'images/Tdark.png';
import { ReactComponent as FacebookIcon } from 'images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg';
import { ReactComponent as YoutubeIcon } from 'images/youtube-icon.svg';

const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const ContactColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const ContactContainer = tw.div`max-w-sm mx-auto lg:mx-0`;
const ContactText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
const ContactDetails = tw.div`mt-4 lg:mt-6 text-sm`;
const Detail = tw.p`mb-2`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start border-2 border-black border-opacity-25`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default ({ background }) => {
  return (
    <div
      className={`relative ${background} text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`}
    >
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/">Home</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/products">Products</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/about-us">About Us</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/contact-us">Contact Us</Link>
              </LinkListItem>
            </LinkList>
          </Column>

          <ContactColumn>
            <ContactContainer>
              <ColumnHeading>Contact Us</ColumnHeading>
              <ContactText>
                We'd love to hear from you! Reach out to us via the following
                channels:
              </ContactText>
              <ContactDetails>
                <Detail>Email: support@trendera.com</Detail>
                <Detail>Phone: +123-456-7890</Detail>
                <Detail>Address: 123 Trend Era Blvd, Fashion City</Detail>
              </ContactDetails>
            </ContactContainer>
          </ContactColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={SimpleLogoTEdark} />
            <LogoText>Trend Era</LogoText>
          </LogoContainer>
          <CopywrightNotice>
            &copy; 2018 Trend Era. All Rights Reserved.
          </CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </div>
  );
};
