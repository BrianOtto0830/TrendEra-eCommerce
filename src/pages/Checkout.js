import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { formatPrice } from "helpers/helpers";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useOrderContext } from "context/order_context";

const Checkout = () => {
  const { handleSubmit } = useForm();
  const { items, emptyCart } = useCart();

  // Todo
  // Panggil state dan juga fungsi createOrder dari ordercontext
  const { createOrder, formData, setFormData } = useOrderContext();

  const handleInputChange = (e) => {
    // Your code here
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckOut = async () => {
    // Your code here
    const response = await createOrder();
    emptyCart();
    console.log("response", response.data.data);
    toast.success(response.data.data.message);
  };

  const calculateProductsTotal = () => {
    // Your code here
    return items.reduce((total,item) =>{
      return total + item.price * item.quantity;
    },0);
  };
    

  useEffect(() => {
    // Your code here
    const updateOrderItems = items.map((item)=>({
      productId: item.trueId, //Assuming 'id' is the unique identifier for each product
      quantity: parseFloat(item.quantity),
      colorId: item.colorId,
    }));

    //updating the 'orderItems' in the 'formData' state
    setFormData((prevData) => ({
      ...prevData,
      orderItems: updateOrderItems,
    }));
  }, []);

  

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />
      {/* Your Code Here */}
      <form onSubmit={handleSubmit(handleCheckOut)}>
        <label className="block mt-4" htmlFor="address">
          Address
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md"
          type="text"
          name="address"
          id="address"
          onChange={handleInputChange}
          value={formData.address}
          required
        />
        <label className="block mt-4" htmlFor="postalCode">
          Postal Code
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md"
          type="text"
          name="postalCode"
          id="postalCode"
          onChange={handleInputChange}
          value={formData.postalCode}
          required
        />
        <label className="block mt-4" htmlFor="country">
          Country
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md"
          type="text"
          name="country"
          id="country"
          onChange={handleInputChange}
          value={formData.country}
          required
        />
        <label className="block mt-4" htmlFor="city">
          City
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md"
          type="text"
          name="city"
          id="city"
          onChange={handleInputChange}
          value={formData.city}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out"
          onClick={handleCheckOut}
        >
          Order Now
        </button>
      </form>
      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Checkout;
