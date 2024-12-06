import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";
import { AuthProvider, useAuth } from "./AuthProvider";
import { set } from "react-hook-form";

const OrdersContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const { items, emptyCart } = useCart();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
    status: "PENDING",
    items: [],
  });

  const localUser = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  console.log("localUser", localUser);  
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
            Authorization: `Bearer ${user?.token || localUser?.token}`,
          },
        }
      );
      console.log("response ordercontext", response.data);
      setOrders(response.data);
    } catch (err) {
      // Your code here
      console.log(err);
    }
  };

  // Buat fungsi create order disni
  const createOrder = async () => {
    const url = `http://localhost:3001/api/orders`;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token || localUser?.token}`, // Pastikan menggunakan "Bearer" jika diperlukan
        "Content-Type": "application/json", // Header tambahan untuk format JSON
      },
    };
    const body = {
      ...formData, // Mengirim data form yang telah diisi
    };
    console.log("body",body)
    console.log("formdata",formData)
    console.log("Creating order...");
  
    try {
      setLoading(true);
      const response = await axios.post(url, body, config);
      console.log("Order created successfully:", response.data.data);
  
      // Notifikasi sukses
      toast.success(response.data.message);
  
      // Update state untuk daftar pesanan
      setOrders((prevOrders) => [...prevOrders, response.data.data]);
  
      // Reset form data setelah berhasil
      setFormData({
        address: "",
        city: "",
        postalCode: "",
        country: "",
        status: "",
        items: [],
      });
      setLoading(false);
    } catch (error) {
      // Menangkap error dan memberikan informasi
      if (error.response) {
        console.error("Error Response:", error.response.data);
        toast.error(error.response.data.message || "Failed to create order.");
        setLoading(false);
      } 
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
        loading,
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
