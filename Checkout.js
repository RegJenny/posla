import React, {useState} from 'react';


const Checkout = () =>{

	const [display, setDisplay] = useState("");
	const [error, setError] = useState("");
	const [amount, setAmount] = useState(0);

	 const handleSubmit =(e)=>{
        e.preventDefault()

    var raw = JSON.stringify({
    "amount": amount})
    
	  var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", "Bearer ");

      var formdata = new FormData();
      formdata.append("transaction_reference", "{{paystack_transaction_reference}}");
      formdata.append("deal_id", "{{deal_id}}");
      formdata.append("deal_type_id", "{{deal_type_id}}");

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
};

   fetch("https://jbuit.com/api/contact/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));}
	return(
		<>
			<div class="container">
		        <div class="row">
		            
		            <div class="col-md-12 col-lg-8">

		                <div class="section section-checkout">
		                    <div class="section-title">
		                        Checkout
		                    </div>
		                    <div>
		                        
		                        <div class="b-1-ddd bg-eee p-10">
		                            Select Payment Option
		                        </div>

		                        <div class="b-1-ddd p-20">
		                        
		                            <div class="row checkout-payment-options">
		                                <div class="col-sm-6">
		                                    <form action="" method="POST">
		                                        
		                                        <input type="hidden" name="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />

		                                        <button type="submit" onClick={handleSubmit} >
		                                            <div>
		                                                <span class="fa fa-angle-right"></span>
		                                            </div>
		                                            <div>
		                                                <img src='/images/paypal.jpg' alt="PayPal" class="dp-contain" />
		                                            </div>
		                                        </button>
		                                    </form>
		                                </div>
		                                <div class="col-sm-6">
		                                    <form action="" method="POST">
		                                        

		                                        <button type="submit" onClick={handleSubmit} >
		                                            <div>
		                                                <span class="fa fa-angle-right"></span>
		                                            </div>
		                                            <div>
		                                                <img src='/images/paystack.jpg' alt="paystack" class="dp-contain" />
		                                            </div>
		                                        </button>
		                                    </form>
		                                </div>
		                            </div>
		                            
		                        </div>

		                    </div>
		                </div>

		            </div>

		            <div class="col-md-12 col-lg-4">

		                <div class="sticky-top">
		                    <div class="section">
		                        <div class="section-title">
		                            Summary
		                        </div>
		                        <div>

		                            <div class="">
		                                <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="deal pb-10" style={{height: "auto"}}>
		                                    <div class="deal-info-top">
		                                        <div>
		                                            <img src='/images/deal-1.png' alt="Olawale Lawal" class="dp-cover" />
		                                        </div>
		                                        <div class="">
		                                            <div>
		                                                <img src='/images/user.png'  alt="Olawale Lawal" class="dp-contain" />
		                                            </div>
		                                            <div class="text-fade font-13 ellipsis">
		                                                Olawale lawal
		                                            </div>
		                                        </div>
		                                        <div class="font-bold ellipsis-2-lines mt-5 pr-10 pl-10">
		                                            I will create awesome & on-point podcast script for your episodes
		                                        </div>
		                                    </div>
		                                </a>
		                            </div>

		                            <div class="text-left-right text-left-right-p-10 text-left-right-60-40 bt-1-ddd">
		                                <div>
		                                    <div>
		                                        Subtotal:
		                                    </div>
		                                    <div class="text-right">
		                                        $100
		                                    </div>
		                                </div>
		                                <div>
		                                    <div>
		                                        Service fee & VAT:
		                                    </div>
		                                    <div class="text-right">
		                                        $50
		                                    </div>
		                                </div>
		                                <hr class="mt-10 mb-10 hr-2"/>
		                                <div class="bg-eee">
		                                    <div class="font-bold">
		                                        Total:
		                                    </div>
		                                    <div class="font-bold text-right">
		                                        $150
		                                    </div>
		                                </div>
		                                <div>
		                                    <div>
		                                        Delivery Time:
		                                    </div>
		                                    <div class="text-right">
		                                        1 day
		                                    </div>
		                                </div>
		                            </div>

		                        </div>
		                    </div>

		                    <div class="section mb-0">
		                        <div class="text-center overflow-hidden" style={{height: "40px"}}>
		                            <img src='/images/payment-cards.png' alt="Payment Options" class="dp-contain" />
		                        </div>
		                        <div class="text-fade mt-15 text-center d-none">
		                            Secured Payment System
		                        </div>
		                    </div>
		                </div>
		            
		            </div>

		        </div>


		    </div>
		</>
		)
} 
export default Checkout;