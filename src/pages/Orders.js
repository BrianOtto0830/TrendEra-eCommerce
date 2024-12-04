import React, { useEffect, useState } from "react";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { useOrderContext } from "context/order_context";
import { useParams } from "react-router-dom";

const Orders = () => {
  const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

  // Your code here
  // Panggil fungsi dan state dari order context
  const { id } = useParams();
  const { orders, setOrders, formData, setFormData, createOrder, getOrdersByUserId } = useOrderContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Your code here
    getOrdersByUserId(id);
  }, [id]);

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />

      <Container>
        <Content>
          {/* Your Code Here */}
        </Content>
      </Container>

      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Orders;
