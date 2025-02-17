import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { ContentWithPaddingXl, Container } from 'components/misc/Layouts.js';
import {
  SectionHeading as Heading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-7.svg';
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-8.svg';

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  subheading = 'Testimonials',
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:
        'https://i.pinimg.com/736x/2d/3f/aa/2d3faaec52fbda21fcdf790f8d3cbcbb.jpg',
      quote: 'The product quality is amazing! It’s so comfortable and stylish. My order arrived quickly too.',
      customerName: 'Jessica Lee',
    },
    {
      imageSrc:
        'https://i.pinimg.com/736x/2a/31/de/2a31de108bf780d3219add7b45687804.jpg',
      quote: 'I love the trendy designs! The bag I ordered is exactly as pictured and very durable.',
      customerName: 'Emily Carter',
    },
    {
      imageSrc:
        'https://i.pinimg.com/736x/20/04/14/20041499ff62d4806f1e6dbf8ac3e144.jpg',
      quote: 'Shopping here is so convenient. Great customer service and fast delivery!',
      customerName: 'Michael Brown',
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
