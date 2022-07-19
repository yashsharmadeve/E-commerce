import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'

const KEY = "pk_test_51LMsO0SGlvFbPqNJ4IK3jgtTV4FVIUqV09665OQ93abuzkmaHbTmIpH46g8xg9Yf5lDgEtBx3diTb3Za5xNnSDke006EYPxlyI"

const Pay = () => {

  const [stripeToken,setstripeToken] = useState(null)

  const onToken = (token) =>{
    setstripeToken(token)
  }

  useEffect(()=>{
    const makeRequest = async () => {
      try{
        const res = await axios.post("http://localhost:4500/api/checkout/payment" , {
          tokenId: stripeToken.id,
          amount:2000,
        })
        console.log(res.data);
      }catch(err){
        console.log(err);
      }
    }
    stripeToken && makeRequest()
  },[stripeToken])
  
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh"
    }}>

      <StripeCheckout 
       name='Yash Shop'
       image='https://avatars.githubusercontent.com/u/1486366?v=4'
       billingAddress
       shippingAddress
       description='Your total is $20'
       amount={2000}
       token={onToken}
       stripeKey={KEY}
       >


        <button style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
          width: "100px",
          padding: "15px 20px",
          cursor: "pointer"
        }}>
          Pay Now
        </button>

      </StripeCheckout>

    </div>
  )
}

export default Pay