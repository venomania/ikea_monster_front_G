import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '../Hook';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import "./card.css";
import "./progresse.css";
const stripePromise = loadStripe('pk_test_51KCos0BbvjBvzwSPdycLvKrUAzzfyb5XT8m6caeice8B38OJgjzC80KsjfRzpL31eIP7lbAO7G1sOZSb0CyxR1L80023bSuAOU');


function Card() {
    return (
        <div>
            <div className="parallax fond">
                <div className="const">
                    <div className="one" ></div>
                    <div className="tow" >

                        <div className='card'>
                            <div className='postxt'>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm></CheckoutForm>
                                </Elements>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card;