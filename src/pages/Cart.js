import React from 'react';
import { useCart } from 'react-use-cart';
import Header from '../components/headers/light';
import Footer from '../components/footers/FiveColumnWithInputForm.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import { formatPrice } from 'helpers/helpers';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

const Cart = () => {
  // Panggil fungsi dan state yang diperlukan dari useCart
  const { items, updateItemQuantity, removeItem, emptyCart, cartTotal } =
    useCart();

  const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

  const handleUpdateQuantity = (id, newQuantity, maxQuantity) => {
    // Your code here
    if(newQuantity > 0){
      updateItemQuantity(id, Math.max(1, Math.min(maxQuantity, newQuantity)));
    }
    
  };

  const handleRemoveItem = (id) => {
    // Your code here
  };

  const handleEmptyCart = () => {
    // Your code here
  };

  const calculateTotalPrice = () => {
    // Your code here
  };
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <AnimationRevealPage>
      <Header className="mb-8" />
      <Container>
        <Content>
          <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight">
            Your Shopping Cart
          </h1>
  
          {items.length > 0 ? (
            <div className="space-y-12">
              {/* Cart Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  {/* Product Image */}
                  <div className="flex items-center space-x-6 w-full lg:w-1/2">
                    <img
                      src={`https://qhsdnskiusrydliavrxp.supabase.co/storage/v1/object/public/images/${item.images[0]}`}
                      alt={item.title}
                      className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                    />
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 mt-1">{formatPrice(item.price)}</p>
                      <div className="flex items-center mt-3">
                        <span className="text-gray-600 mr-3">Color: </span>
                        <span
                          className="inline-block w-6 h-6 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </div>
                    </div>
                  </div>
  
                  {/* Quantity and Actions */}
                  <div className="mt-4 lg:mt-0 lg:flex lg:items-center lg:space-x-6">
                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow hover:bg-gray-200 transition"
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            item.quantity - 1,
                            item.maxQuantity
                          )
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-lg font-medium text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg shadow hover:bg-gray-200 transition"
                        onClick={() =>
                          handleUpdateQuantity(
                            item.id,
                            item.quantity + 1,
                            item.maxQuantity
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    
                    

  
                    {/* Price */}
                    <div>
                      <p className="text-xl font-semibold text-gray-900 mt-4 lg:mt-0">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
  
                    {/* Remove Button */}
                    <button
                      className="text-red-500 hover:text-red-700 mt-4 lg:mt-0"
                      onClick={() => removeItem(item.id)}
                    >
                      <AiOutlineDelete size={28} />
                    </button>
                  </div>
                </div>
              ))}
  
              {/* Cart Summary */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-extrabold text-gray-900">
                    Total Price
                  </h4>
                  <p className="text-2xl font-extrabold text-blue-600">
                    {formatPrice(cartTotal)}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-6">
                  <Link
                    to="/checkout"
                    className={`w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:opacity-90 transition ${
                      user ? '' : 'cursor-not-allowed'
                    }`}
                  >
                    {user ? 'Proceed to Checkout' : 'Login to Checkout'}
                  </Link>
                  <button
                    className="w-full lg:w-auto px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-red-600 transition"
                    onClick={() => emptyCart()}
                  >
                    Empty Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-500 text-lg">
                Your cart is empty. Start shopping now to find the latest trends!
              </p>
              <Link
                to="/products"
                className="mt-8 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Shop Now
              </Link>
            </div>
          )}
        </Content>
      </Container>
      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
  
};

export default Cart;
