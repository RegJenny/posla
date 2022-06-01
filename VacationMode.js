import React,{useState} from 'react';
import AccountSidebar from '../components/AccountSidebar';

const VacationMode = () =>{

	const[error, setError] = useState("");
	const [display, setDisplay] = useState("");

	const handleSubmit =(e)=>{
        e.preventDefault()
            
	var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 37|6I38pJScQro7GN881QKKiwQhzWEvsYh8aZIZbAWb");

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
			<div class="container">
		        <div class="row">
		            <div class="d-none d-md-block col-md-4 col-lg-3">

		                 <AccountSidebar/>

		            </div>

		            <div class="col-12 col-md-8 col-lg-9">

		                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
		                    <ol class="breadcrumb">
		                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
		                        <li class="breadcrumb-item"><a href="/account/settings">Settings</a></li>
		                        <li class="breadcrumb-item active" aria-current="page">Vacation Mode</li>
		                    </ol>
		                </div>

		                <div class="section">
		                    <div class="section-title section-title-sm">
		                        Vacation Mode
		                    </div>
		                    <div>

		                        <form action="/account/settings/vacation-mode-success">
		                            <div class="b-1-ddd p-20">

		                                <div>
		                                    Are you sure you want to put your account on vacation mode?
		                                </div>

		                                <div class="mt-15">
		                                    <div class="note d-inline-block">
		                                        Please note:
		                                    </div>
		                                    <ul class="list-style mt-10">
		                                        <li>
		                                            This will temporarily hide your account generally from our platform.
		                                        </li>
		                                        <li class="mt-5">
		                                            You are allowed to go on vacation mode for as long as you want.
		                                        </li>
		                                        <li class="mt-5">
		                                            You may switch off the vacation mode and put your account back online at anytime.
		                                        </li>
		                                        <li class="mt-5">
		                                            Your deals and project will be hidden generally on the platform.
		                                        </li>
		                                        <li class="mt-5">
		                                            Your current orders will not be affected.
		                                        </li>
		                                        <li class="mt-5">
		                                            Your earnings will not be affected.
		                                        </li>
		                                        <li class="mt-5">
		                                            Your refunds will not be affected.
		                                        </li>
		                                        <li class="mt-5">
		                                            You may request for your payment withdrawal during this period.
		                                        </li>
		                                        <li class="mt-5">
		                                            You will not be allowed to bid for projects during this period.
		                                        </li>
		                                        <li class="mt-5">
		                                            You deals will not be purchasable during this period.
		                                        </li>
		                                    </ul>
		                                </div>
		                                
		                            </div>

		                            <div class="pt-20 mt-20 bt-1-ddd">

		                                <div class="floated-content">
		                                    <button type="submit" class="btn btn-danger btn-sm pull-right ml-10" onClick={handleSubmit} >
		                                        Turn on Vacation Mode
		                                    </button>
		                                    <a href="/account/settings" class="btn btn-transparent-black btn-sm pull-right">
		                                        Cancel
		                                    </a>
		                                </div>

		                            </div>
		                        </form>
		                        <p Style={{display:display}}>category created successfully</p>

		                    </div>
		                </div>


		            </div>
		        </div>
		    </div>
		</>
		)
}

export default VacationMode;