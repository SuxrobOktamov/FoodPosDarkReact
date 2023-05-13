import { Check, CreditCard} from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';


function Payment({nun, setNun}) {

  const payment = useRef();
  const [selectPayment, setSelectPayment] = useState([]);
  useEffect(()=>{
      setSelectPayment(payment.current.children);
  }, [])

  Array.from(selectPayment).forEach((el) => {
    el.addEventListener("click", ()=>{
      Array.from(selectPayment).forEach(item=>{
        item.classList.remove('active');
      })
      el.classList.add("active");
    })
  })

  const paymentHandler = () => {
    setNun(!nun)
  }

  return (
    <div className={`${nun ? 'trans': ''}`} id='Payment'>
        <div className='Payment-form'>
          <h2>Payment</h2>
          <p>3 payment method available</p>
          <form className='form'>
              <h3>Payment Method</h3>
              <div ref={payment} className='payment-method'>
                  <div className='credit-card active'>
                      <div className='icon'>
                        <Check color='success' fontSize='10px' />
                      </div>
                      <CreditCard  color="primary" style={{pointerEvents: 'none'}} />
                      <span style={{pointerEvents: 'none'}} >Credit Card</span>
                  </div>
                  <div className='credit-card '>
                      <div className='icon'>
                        <Check color='success' fontSize='10px' />
                      </div>
                      <CreditCard  color="primary" style={{pointerEvents: 'none'}} />
                      <span style={{pointerEvents: 'none'}} >Cash</span>
                  </div>
                  <div  className='credit-card '>
                      <div className='icon'>
                        <Check color='success' fontSize='10px' />
                      </div>
                      <CreditCard  color="primary" style={{pointerEvents: 'none'}} />
                      <span style={{pointerEvents: 'none'}} >Paypal</span>
                  </div>
              </div>
              <div className='form-control'>
                <label htmlFor='name'>Cardholder Name</label>
                <input type='text' name='name' placeholder='Levi Ackerman'  />
              </div>
              <div className='form-control'>
                <label htmlFor='number'>Card Number</label>
                <input type='number' name='number' placeholder='2564 1421 0897 1244' />
              </div>
              <div className='control'>
                <div className='form-control'>
                  <label htmlFor='date'>Expirtion Date</label>
                  <input type='date' name='date' placeholder='02/2022' />
                </div>
                <div className='form-control'>
                  <label htmlFor='password'>CVV</label>
                  <input type='password' name='password'  />
                </div>
              </div>
              <div className='control type'>
                <div className='form-control'>
                  <label htmlFor='date'>Order Type</label>
                  <select>
                    <option value='Dine in'>Dine in</option>
                  </select>
                </div>
                <div className='form-control'>
                  <label htmlFor='number'>Table</label>
                  <input type='number' name='number' placeholder='140' />
                </div>
              </div>
              <div className='btn-button'>
                <Button onClick={paymentHandler}  variant="outlined"  >Cancel</Button>
                <Button onClick={paymentHandler} variant="contained">Confirm Payment</Button>
              </div> 
          </form>
        </div>
    </div>
  )
}

export default Payment;