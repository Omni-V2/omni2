"use client"
import { useState } from 'react';

interface CartPageProps {
  user: { id: string }; 
}

export default function product() {
  const [cart, setCart] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [notification, setNotification] = useState('');

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);


  // const handleQuantityChange = (id: string, quantity: number) => {
  //   const updatedCart = cartList.map((item) =>
  //     item.id === id ? { ...item, quantity } : item
  //   );
  //   setCart(updatedCart);
  // };
  // const calculateSubtotal = (): number => {
  //   return cartList.reduce((acc, cartItem) => {
  //     return acc + cartItem.product.price * cartItem.quantity;
  //   }, 0);
  // };
  // const checkout = () => {
  //   const axiosRequests = cartList.map((e, i) =>
  //     axios.post('http://localhost:3000/api/cart', {
  //       UserId: user.id,
  //       ProductId: e.product.id,
  //       quantity: e.quantity,
  //       total: calculateTotal(),
  //     })
  //   );
  //   Promise.all(axiosRequests)
  //     .then((responses) => {
  //       setCartList([]);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleBothCheckouts = () => {
  //   checkoutt();
  //   checkout();
  // };

  // const calculateTotal = (): number => {
  //   const subtotal = calculateSubtotal();
  //   const shipping = 7;
  //   const totalBeforeDiscount = subtotal + shipping;

  //   const discountedTotal = totalBeforeDiscount - totalBeforeDiscount * discount;

  //   return discountedTotal;
  // };

  // const handleCouponApply = () => {
  //   if (couponCode === 'RBK20') {
  //     setDiscount(0.2);
  //     setNotification('Congratulation: You got a 20% discount!');
  //   } else {
  //     setNotification('Invalid coupon code.');
  //   }
  // };

  return (
    <div className="cart-container">
    <strong>Home / Cart</strong>
    <table className="w-full border-collapse mb-8">
      <thead>
        <tr>
          <th className="bg-gray-200 p-4">Product</th>
          <th className="bg-gray-200 p-4">Price</th>
          <th className="bg-gray-200 p-4">Quantity</th>
          <th className="bg-gray-200 p-4">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-4">Name</td>
          <td className="p-4">price DT</td>
          <td className="p-4"></td>
          <td className="p-4">DT</td>
          <td className="p-4"></td>
        </tr>
      </tbody>
    </table>
    <div className="summary-box">
      <div>
        <p>Cart Total</p>
        <p>Subtotal: DT </p>
        <p>Shipping: 7 DT</p>
        <p>Total: DT </p>
        <button className="bn14">Proceed To CheckOut</button>
        <div className="placebox-info">
          <div className="input-container">
            <input
              placeholder="Coupon Code"
              className="input-field"
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <span className="input-highlight"></span>
          </div>
          <button className="bn15">Apply Coupon</button>
        </div>
        {notification && <p>{notification}</p>}
      </div>
    </div>
  </div>
  )
}
