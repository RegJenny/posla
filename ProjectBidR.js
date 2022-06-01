import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccountSidebar from '../components/AccountSidebar';
import ProjectList from '../components/ProjectList';
import {Link} from 'react-router-dom';


const ProjectBidR = () => {
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
                        <li class="breadcrumb-item active" aria-current="page">Project Bids</li>
                    </ol>
                </div>

                <div class="section">
                    <div class="section-title section-title-sm">
                        My Project Bids
                    </div>
                    <div>

                        <ul class="nav nav-tabs posla-tabs posla-tabs-3">
                            <li class="nav-item">
                                <a href="/account/project-bids/" class="nav-link">
                                    <div class="text-center">
                                        Ongoing
                                        <span class="d-none d-sm-inline d-md-none d-lg-inline">
                                            Biddings
                                        </span>
                                        (8)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/project-bids/accepted" class="nav-link">
                                    <div class="text-center">
                                        Accepted
                                        <span class="d-none d-sm-inline d-md-none d-lg-inline">
                                            Biddings
                                        </span>
                                        (3)
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="/account/project-bids/rejected" class="nav-link active">
                                    <div class="text-center">
                                        Rejected
                                        <span class="d-none d-sm-inline d-md-none d-lg-inline">
                                            Biddings
                                        </span>
                                        (14)
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
                                {item.title}
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
                                <div class="p-10 b-1-ddd bg-blue text-fff">
                                    <a class="btn btn-fff text-333 btn-xs mt-0 mr-5 pull-right" data-toggle="modal" data-target="#proposal-1">
                                        <span class="far fa-circle bg-333"></span>
                                        View Proposal
                                    </a>
                                    My Proposal: $550
                                    <label class="d-none d-md-inline d-lg-none d-xl-inline label label-fff label-sm mr-5 ml-5">
                                        Ignored
                                    </label>
                                    <div class="d-block d-md-none d-lg-block d-xl-none">
                                        <label class="label label-fff label-sm d-inline">
                                            Ignored
                                        </label>
                                    </div>
                                </div>

                                <div class="modal" id="proposal-1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">Proposal</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="p-20">
                                                    
                                                    <div class="">
                                                        Proposal price:
                                                        <div class="note font-bold font-16 pt-3 pb-3 pr-10 pl-10 d-inline">
                                                            $550
                                                        </div>
                                                    </div>

                                                    <hr class="mt-20 mb-20"/>

                                                    <div>
                                                        Proposal Message:
                                                    </div>

                                                    <div class="text-fade line-height-20 mt-5">
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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
export default ProjectBidR;