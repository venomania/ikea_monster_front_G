import React from 'react';
import { CardElement, useStripe, useElements, CardElementComponent, charges } from "@stripe/react-stripe-js";
import { useNavigate } from 'react-router-dom';
import httpClient from 'react-http-client';
import { number } from 'typed';


export const CheckoutForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const httpHandler = require('react-http-client');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });



    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      const id_cart = localStorage.getItem('cart_id')
      const Panier = JSON.parse(localStorage.getItem("panier"));
      const get_id = [];

      for(var i = 0 ; Panier[i];i++){
          var setid = Panier[i].id;
          get_id.push(setid);
       
      };
      console.log(get_id);
    
  
      const response = fetch('http://localhost:8080/api/cart/'+id_cart, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({ products : get_id}),
      }).then(data => {


        const Panier = JSON.parse(localStorage.getItem("panier"));
        var total = Number(0);
        for (var index = 0; Panier[index]; index++) {
            var recup = Number(0);
    
            console.log('index:', index, 'valeur:', Panier[index]);
    
            recup = Number(Panier[index].Price);
    
            if (Panier[index].Price == null) {
                recup = Number(0);
            }
            total = Math.round(total + recup);
        }

        console.log(total);
    


        const response = fetch('http://localhost:8080/api/stripe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({ amount : total}),
        })
       
      }).then(data =>{
         navigate('/valide'); 
      })

     

 
     

      //send token to backend here
    } else {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;    