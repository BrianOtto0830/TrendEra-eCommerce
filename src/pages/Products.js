import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import ProductList from "components/products/ProductList";
import Sort from "components/sort/Sort";
import Filters from "components/Filters";

export const Products = () => {
  const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
  const Main = tw.main`flex flex-col md:flex-row md:gap-8`;
  const FiltersContainer = tw.div`w-full md:w-1/4 mb-6 md:mb-0`;
  const ProductContainer = tw.div`w-full md:w-3/4`;

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />

      <Container>
        <Content>
          <Main>
            {/* Filters Section */}
            <FiltersContainer>
              <Filters />
            </FiltersContainer>

            {/* Product List and Sort */}
            <ProductContainer>
              <Sort />
              <ProductList />
            </ProductContainer>
          </Main>
        </Content>
      </Container>

      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};
