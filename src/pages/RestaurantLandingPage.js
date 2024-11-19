import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithVideo.js';
import Features from 'components/features/ThreeColSimple.js';
import MainFeature from 'components/features/TwoColWithButton.js';
import MainFeature2 from 'components/features/TwoColSingleFeatureWithStats2.js';
import ProductGrid from 'components/cards/TabCardGrid.js';
import Testimonial from 'components/testimonials/ThreeColumnWithProfileImage.js';
import DownloadApp from 'components/cta/DownloadApp.js';
import Footer from 'components/footers/FiveColumnWithInputForm.js';
import logoPC from '../images/Green And Black Gaming PC YouTube Thumbnail.png';
import chefIconImageSrc from 'images/chef-icon.svg';
import celebrationIconImageSrc from 'images/celebration-icon.svg';
import shopIconImageSrc from 'images/shop-icon.svg';

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-green-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedText2 = tw.span`bg-red-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  // TODO
  // 1. Panggil component yang harusnya ada di halaman ini
  // 2. Modifikasi styling dan value property yang dimiliki component

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Explore the Latest Trend Collection at{' '}
            <HighlightedText>Trend Era</HighlightedText>
          </>
        }
        description={
          <Subheading>
            {' '}
            Providing clothes, bags and hats for your modern lifestyle.
          </Subheading>
        }
        imageSrc={logoPC}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Shop Now"
        watchVideoButtonText="View Collection"
      />
      <Features />
      <MainFeature2 />
      <ProductGrid />

      <DownloadApp
        text={
          <>
            Temukan kami di{' '}
            <HighlightedTextInverse>Shopee</HighlightedTextInverse> and{' '}
            <HighlightedTextInverse>Tokopedia</HighlightedTextInverse> for exclusive discounts!
          </>
        }
      />
      <Testimonial />
      <Footer background={'bg-gray-200'} />
    </AnimationRevealPage>
  );
};
