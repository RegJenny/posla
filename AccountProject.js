import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';
import {Link} from 'react-router-dom';


const AccountProject =()=>{
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(response=>{
    setResult(response)
  })
  .catch(error => console.log(error));

    })
	return(
		<>
			<Header/>
	<div class="container">
        <div class="row">
            <div class="d-none d-md-block col-md-4 col-lg-3">

               <AccountSidebar/>

            </div>

            <div class="col-12 col-md-8 col-lg-9">

                <div aria-label="breadcrumb" class="details-page-breadcrumb mb-10">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/account">Account</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Projects</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        Active Projects (6)
                        <a href="/account/projects/create" class="btn btn-blue btn-sm pull-right">Create New Project</a>
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-2">
                            <li class="nav-item">
                                <a href="/account/projects/" class="nav-link active">
                                    <div class="text-center">
                                        Active Projects (6)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/projects/paused" class="nav-link">
                                    <div class="text-center">
                                        Paused Projects (3)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    
                        
                        <div class="project-list project-list-mini mt-20 row">
                            {result && result.map((item)=>(
                            <div class="col-sm-6 col-md-12 col-lg-6 project-mgmt">
                    <Link to="/project/c1d00230-a423-4b84-a121-7105239ff8d8" className="project" id="projectlist">
                    
                    <div>
                        <div>
                            <span className="fa fa-angle-right icon-50"></span>
                        </div>
                        <div className="">
                            <div className="font-bold">
                                {item.name}
                            </div>

                            <div className="text-fade ellipsis-2-lines mt-5">
                                {item.body}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 ellipsis">
                        <div className="project-price">
                            $150
                        </div>
                        <div className="item-labels">
                            <div className="item-labels-new">
                                New
                            </div>
                            <div className="item-labels-featured">
                                Featured
                            </div>
                            <div className="item-labels-proposals">
                                18 proposals
                            </div>
                        </div>
                    </div>

                    <div className="item-labels item-labels-tags-all ellipsis">
                        <div className="item-labels-prefix">
                            Tags & Skills:
                        </div>
                        <div className="item-labels-tags">
                            Tag name
                        </div>
                        <div className="item-labels-tags">
                            Tag name
                        </div>
                        <div className="item-labels-tags">
                            Tag name
                        </div>
                        <div className="item-labels-tags">
                            Tag name
                        </div>
                        <div className="item-labels-tags">
                            Tag name
                        </div>
                        <div className="item-labels-tags">
                            Tag name
                        </div>
                        <div className="item-labels-tags">
                            Tag name
                        </div>
                    </div>

                </Link>
                                <div class="dropdown">
                                    <label class="label label-fff label-sm mr-5 pull-right" Style = {{"margin-top":"7px"}}>
                                        Pending Approval
                                        Status (Active)
                                    </label>
                                    <div id="navbarDropdown" class="nav-link bg-blue dropdown-toggle b-1-blue text-fff" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Manage
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" Style = {{"margin-top":"-20px"}}>
                                        <a class="dropdown-item" href="/project/c1d00230-a423-4b84-a121-7105239ff8d8678">
                                            Preview
                                        </a>
                                        <a class="dropdown-item" href="/account/projects/pause/1234">
                                            Pause
                                        </a>
                                        <a class="dropdown-item" href="/account/projects/edit/1234">
                                            Edit
                                        </a>
                                        <a class="dropdown-item" href="/account/projects/delete/1234">
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        
                           ))} 


                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
			<Footer/>
		</>
		)
}
export default AccountProject;