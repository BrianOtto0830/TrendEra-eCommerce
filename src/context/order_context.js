import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrdersContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
    status: "",
    items: [],
  });

  const user = JSON.parse(localStorage.getItem("user"));
  // TODO
  // 1. Lengkapi fungsi getOrdersById
  // 2. Buatkan fungsi createOrder
  const getOrdersByUserId = async () => {
    try {
      // Your code here
      
      const response = await axios.get(
        `http://localhost:3001/api/orders`,
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );
      console.log("response", response.data.data);
      setOrders(response.data.data);
    } catch (err) {
      // Your code here
      console.log(err);
    }
  };

  // Buat fungsi create order disni
  const createOrder = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/orders`,
        formData,
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      );
      console.log("response", response.data.data);
      toast.success(response.data.message);
      setOrders(response.data.data);
      setFormData({
        address: "",
        city: "",
        postalCode: "",
        country: "",
        status: "",
        items: [],
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        order,
        formData,
        setFormData,
        // panggil fungsinya disini
        createOrder,
        getOrdersByUserId,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrdersContext);
};
