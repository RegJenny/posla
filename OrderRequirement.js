import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const OrderRequirement = () =>{
    const [question1, setQuestion1]= useState("");
    const [question2, setQuestion2]= useState("");
    const [question3, setQuestion3]= useState("");
    const [question4, setQuestion4]= useState("");
    const [question5, setQuestion5]= useState("");
    const [question6, setQuestion6]= useState("");
    const [display, setDisplay] = useState("none");
    const [errors, setErrors] = useState("");

    
 const handleSubmit =(e)=>{
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer ");
    var raw = JSON.stringify({

        "question1": question1,
        "question2": question2,
        "question3": question3,
        "question4":question4,
        "question5": question5,
        "question6": question6
    })

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
};
fetch("https://jbuit.com/api/contact/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

	return(
			<>
		<Header/>
		<div class="container">

        <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/account">Account</a></li>
                <li class="breadcrumb-item"><a href="/account/orders">Orders</a></li>
                <li class="breadcrumb-item"><a href="/account/orders/123456789012">123456789012</a></li>
                <li class="breadcrumb-item active" aria-current="page">Requirements</li>
            </ol>
        </div>

        <div class="section">
            <div class="section-title section-title-sm">
                Requirements - Order #123456789012
            </div>

            <div class="row">
                <div class="col-lg-3">
                    
                    <div class="row sticky-top">
                        <div class="col-sm-6 col-lg-12">
                            <div class="floated-content p-10 mb-30 b-1-ddd">
                                <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="pull-left mr-10 d-block d-lg-none d-xl-block overflow-hidden" style={{width: "70px", height: "70px"}}>
                                    <img src='/images/boxes.jpg' alt="" class="dp-contain" />
                                </a>
                                <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="mr-10 d-none d-lg-block d-xl-none overflow-hidden" style={{width: "70px", height: "70px"}}>
                                    <img src='/images/boxes.jpg' alt="" class="dp-contain" />
                                </a>
                                <div class="overflow-hidden">
                                    <a href="/deal/0d8aa710-c3b7-4d4d-b7f0-61da7b23af9f" class="font-bold hover-underline">
                                        I will design a beautiful logo for your business
                                    </a>
                                    <div class="text-fade mt-5">
                                        <div>
                                            Category (Subcategory)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
                <div class="col-lg-9">

                    <form method="post" action="/account/order/123456789012" class="form b-1-ddd p-20-10">
                        <div class="mb-20">
                            <h5 class="font-13 font-bold text-center">
                                Deal requirements
                            </h5>
                        </div>

                        <div class="note text-center">
                            Please fill in these requirements correctly.
                            An error in your filled requirements may affect your project completion time.
                            The countdown will start immediately when you submit these requirements.
                             <br/> 
                        </div>

                        <div class="row mt-30">
                            
                            <div class="col-md-6 mb-30">
                                <div class="b-1-ddd p-20 bg-eee">
                                    <div class="font-bold">
                                        The question will be right here:
                                        The question will be right here:
                                        The question will be right here:
                                    </div>
                                    <div class="mt-5">
                                        <div class="form-group">
                                            <textarea name="question1"  style={{height: "90px"}} class="form-control resize-none" value={question1} onChange={(e)=>{setQuestion1(e.target.value)}}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 mb-30">
                                <div class="b-1-ddd p-20 bg-eee">
                                    <div class="font-bold">
                                        The question will be right here:
                                    </div>
                                    <div class="mt-5">
                                        <div class="form-group">
                                            <textarea name="question2" style={{height: "90px"}} class="form-control resize-none" value={question2} onChange={(e)=>{setQuestion2(e.target.value)}}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 mb-30">
                                <div class="b-1-ddd p-20 bg-eee">
                                    <div class="font-bold">
                                        The question will be right here:
                                    </div>
                                    <div class="mt-5">
                                        <div class="form-group">
                                            <textarea name="question3" style={{height: "90px"}} class="form-control resize-none" value={question3} onChange={(e)=>{setQuestion3(e.target.value)}}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 mb-30">
                                <div class="b-1-ddd p-20 bg-eee">
                                    <div class="font-bold">
                                        The question will be right here:
                                    </div>
                                    <div class="mt-5">
                                        <div class="form-group">
                                            <textarea name="question4" style={{height: "90px"}} class="form-control resize-none" value={question4} onChange={(e)=>{setQuestion4(e.target.value)}}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 mb-30">
                                <div class="b-1-ddd p-20 bg-eee">
                                    <div class="font-bold">
                                        The question will be right here:
                                    </div>
                                    <div class="mt-5">
                                        <div class="form-group">
                                            <textarea name="question5" style={{height: "90px"}} class="form-control resize-none" value={question5} onChange={(e)=>{setQuestion5(e.target.value)}}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 mb-30">
                                <div class="b-1-ddd p-20 bg-eee">
                                    <div class="font-bold">
                                        The question will be right here:
                                    </div>
                                    <div class="mt-5">
                                        <div class="form-group">
                                            <textarea name="question6" style={{height: "90px"}} class="form-control resize-none" value={question6} onChange={(e)=>{setQuestion6(e.target.value)}}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div class="form-group">
                                <label class="checkbox-inline cursor-pointer">
                                    <div class="pull-left mr-5">
                                        <input type="checkbox" required/>
                                    </div>
                                    <div class="overflow-hidden">
                                        I agree that the information I provided is accurate and complete.
                                        Any changes will require the seller's (seller_name) approval, which may increase the project cost and/or delivery timeframe.
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div class="bt-1-ddd pt-20">
                            <button type="submit" class="btn btn-blue btn-block" onClick= {handleSubmit}>
                                Submit Requirements
                            </button>
                            <a href="/account/orders/123456789012" class="btn btn-transparent-black btn-block mt-5">
                                Cancel
                            </a>
                            <p style={{display: display}}>successful!</p>
                        </div>

                    </form>
                    
                </div>
            </div>

        </div>

    </div>
    <Footer/>
			</>
		)
}
export default OrderRequirement;