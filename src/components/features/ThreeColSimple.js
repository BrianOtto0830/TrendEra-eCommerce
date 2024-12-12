import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js';
import { ReactComponent as ArrowRightIcon } from 'images/arrow-right-icon.svg';
import SupportIconImage from 'images/support-icon.svg';
import ShieldIconImage from 'images/shield-icon.svg';
import CustomizeIconImage from 'images/customize-icon.svg';
import { ReactComponent as SvgDecoratorBlob3 } from 'images/svg-decorator-blob-3.svg';

const Heading = tw(SectionHeading)``; 
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`};
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`}; 
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}; 
    img {
      ${tw`w-8 h-8`};
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`};
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-gray-500`}; 
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`};
    .icon {
      ${tw`ml-2 w-4`};
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`};
`;

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: 'Convenient Products',
      description:
        'We design all our clothing with high-quality materials for your comfort throughout the day.',
      url: '/products',
    },
    {
      imageSrc: SupportIconImage,
      title: '24/7 Support',
      description:
        'We are always ready to assist you with any questions or concerns about the products you have purchased, at any time.',
      url: '/contact-us',
    },
    {
      imageSrc: CustomizeIconImage,
      title: 'Design to Your Needs',
      description:
        'We offer a wide range of clothing and accessories that are designed to suit your specific needs and preferences.',
      url: '/contact-us',
    },
  ],
  linkText = 'Learn More',
  heading = 'Our Key Features',
  subheading = 'Why Choose Us',
  description = 'We offer the best services to support your tech needs. Explore the benefits of working with us.',
  imageContainerCss = null,
  imageCss = null,
}) => {
  /*
   * This component accepts a prop - `cards` which is an array of object denoting the cards.
   * You can customize them as needed. Each card has:
   * - imageSrc: The image at the top
   * - title: The title of the card
   * - description: The description of the card
   * - url: The URL it links to
   */
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt={card.title} css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {linkText && (
                  <span className="link">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
