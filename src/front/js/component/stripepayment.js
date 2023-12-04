import React from "react";
import {Elements, CardElement,useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const StripePayment = ({ totalACobrar }) =>{
    const stripePromise = loadStripe('pk_test_51NvPj0GmhMwvqVPthRRewXoaKBfZlIqEM2cma9Ag6NlrgXm2dQ6Zvdrg7Wj8BhdOuvrVCWyGsqSJ6TnVJMhvTJDY002JjXnEzr');

    const CheckoutForm = ()=>{ 
	const stripe = useStripe()
	const elements = useElements()

	const payStripe = async (e)=>{
			e.preventDefault()
	
			const {error, paymentMethod} = await stripe.createPaymentMethod({
				type: "card",
				card: elements.getElement(CardElement)
			})
			if(!error){
				const {id} = paymentMethod

				fetch(process.env.BACKEND_URL + 'api/payment-stripe', { 
					method: "POST", 
					headers: { 
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ id, totalACobrar}) 
				})
				.then((res) => res.json())
				.then((result) => { 
				
					console.log(result);
				})
				.catch((err) => {
				console.log(err);
				})
		}
	}
	return <form onSubmit={payStripe} className="form-group mt-3 d-flex flex-column justify-content-center" >
			<CardElement className="bg-light p-3" />
				<button className="btn btn-success " style={{marginTop:20}}>
					Buy
				</button>
			</form>
	}

    return(
        <>
			<Elements stripe={stripePromise}  >
				<CheckoutForm />
			</Elements>			
        </>
    )
}
export default StripePayment