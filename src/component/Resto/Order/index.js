import React from 'react';
import Content from './content';


function Order({Datas, SetDatas, Subtotal, setNun, nun }) {

  const paymentHandler = () => {
    setNun(!nun)
  } 
  return (
    <div className='Order'>
         <h2>Orders #34562</h2>
            <div className="order-btn">
                <button className="DineIn active">Dine In</button>
                <button className="ToGo">To Go</button>
                <button className="Delivery">Delivery</button>
            </div>
            <div className="order-item">
                <h3>Item</h3>
                <div>
                    <h3>Qty</h3>
                    <h3>Price</h3>
                </div>
            </div>
            <Content Datas={Datas} SetDatas={SetDatas} />
            <div className="total">
                <div className="Discount">
                    <p>Discount</p>
                    <span>$0</span>
                </div>
                <div className="Subtotal">
                    <p>Subtotal</p>
                    <span>${Subtotal}</span>
                </div>
            </div>
            <button className="Payment" onClick={paymentHandler}>Continue to Payment</button>
    </div>
  )
}

export default Order;