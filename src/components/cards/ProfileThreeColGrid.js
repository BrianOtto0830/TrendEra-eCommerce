import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div`mb-16`;
const Heading = tw(SectionHeading)`text-center font-black text-4xl sm:text-5xl lg:text-6xl`;
const Subheading = tw(SubheadingBase)`text-center mt-4 text-primary-500 font-semibold tracking-wide text-sm sm:text-base lg:text-lg`;
const Description = tw(SectionDescription)`text-center mt-8 text-gray-600 max-w-screen-md mx-auto sm:text-lg lg:text-xl`;

const Cards = tw.div`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-screen-xl`;
const Card = styled.div`
  ${tw`relative flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white`}
`;
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`rounded-full h-40 w-40 bg-cover bg-center hover:scale-110 transition-transform duration-300`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6 text-center`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500 mb-1`}
  }
  .name {
    ${tw`text-2xl font-medium text-gray-900`}
  }
  .bio {
    ${tw`text-sm text-gray-600 mt-2`}
  }
`;
const CardLinks = styled.div`
  ${tw`mt-4 flex space-x-4`}
  .link {
    ${tw`text-gray-400 hover:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Meet the Trendsetters.",
  subheading = "Our Team",
  description = "Our team at Trend Era is made up of passionate fashion experts, creative minds, and dedicated professionals who work together to bring you the latest styles and the best shopping experience.",
  cards = [
    {
      imageSrc: "https://i.pinimg.com/736x/4d/70/ba/4d70baea85c8f2ae4a5bc8f67669230f.jpg",
      position: "Founder",
      name: "Brian Otto",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.pinimg.com/736x/03/58/16/035816652e01a9686fae900e697d36f0.jpg",
      position: "Sr. Designer",
      name: "Christina Mckay",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.pinimg.com/736x/9f/09/cd/9f09cddcba0b456474f678471a746fc2.jpg",
      position: "Jr. Designer",
      name: "Jhonatan Mark",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.pinimg.com/736x/a8/3e/91/a83e91998c5d14ad882a22b280760ab8.jpg",
      position: "Lead Developer",
      name: "Kevin jones",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.pinimg.com/736x/78/62/f7/7862f73b81c10a44ab0b8915d229d75d.jpg",
      position: "Sr. Developer",
      name: "Kim jo",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://i.pinimg.com/736x/f5/22/1f/f5221ff484810110cd52e2197cfa8806.jpg",
      position: "Quality Assurance",
      name: "Selia Wolfe",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
