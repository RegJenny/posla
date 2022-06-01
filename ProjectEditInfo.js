import React, {useState} from 'react';
import AccountSidebar from '../components/AccountSidebar';
import NavTabProjectMgt from '../components/NavTabProjectMgt';

const ProjectEditInfo = () =>{
    const[error, setError] = useState("");
    const [display, setDisplay] = useState("None");
    const [title, setTitle]= useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [timeframe, setTimeframe] = useState("");
    const [budget, setBudget] = useState("");
    const [activeuntil, setActiveuntil] = useState("");
    const [picture1,setPicture1] = useState("");
    const [picture2, setPicture2] = useState("");
    const [picture3, setPicture3] = useState("");
    const [picture4, setPicture4] = useState("");
    const [picture5, setPicture5] = useState("");
    const [picture6, setPicture6] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer 37|6I38pJScQro7GN881QKKiwQhzWEvsYh8aZIZbAWb");

const handleSubmit =(e)=>{
        e.preventDefault() 

var formdata = new FormData();
formdata.append("title", "{{title}}");
formdata.append("category_id", "{{category}}");
formdata.append("subcategory_id", "{{subcategory}}");
formdata.append("timeframe", "{{timeframe}}");
formdata.append("budget", "{{budget}}");
formdata.append("active_until", "{{activeuntil}}");
formdata.append("description", "{{description}}");
formdata.append("status", "{{status}}");



var raw = JSON.stringify({
  "title": title,
  "category_id": category,
  "subcategory_id": subcategory,
  "timeframe":timeframe,
  "budget": budget,
  "active_until": activeuntil,
  "picture1": picture1,
  "picture2": picture2,
  "picture3": picture3,
  "picture4": picture4,
  "picture5": picture5,
  "picture6": picture6,
  "description": description,
  "status": status
})



var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
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
                        <li class="breadcrumb-item"><a href="/account/projects">Projects</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit Project</li>
                    </ol>
                </div>
                
                <div class="section">
                    <div class="section-title">
                        Edit Project
                    </div>
                    <div>
                        
                       <NavTabProjectMgt/>
                        
                        <div class="tab-content">
                            <div class="tab-pane active">

                                <form action="/account/projects/edit/1234/publish">
                                    <div class="b-1-ddd">

                                        <div class="p-20">
                                            
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="title" class="control-label">
                                                            Project Title:
                                                        </label>
                                                        <textarea name="title" id="title" class="form-control resize-none" style={{height: "99px"}} placeholder="I need..." value={title} onChange={(e)=>{setTitle(e.target.value)}}  ></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="category" class="control-label">
                                                            Category:
                                                        </label>
                                                        <select name="category" id="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} >
                                                            <option value="">- Select -</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="subcategory" class="control-label" value={subcategory} onChange={(e)=>{setSubcategory(e.target.value)}} >
                                                            SubCategory:
                                                        </label>
                                                        <select name="subcategory" id="subcategory">
                                                            <option value="">- Select -</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="timeframe" class="control-label">
                                                                    Project Timeframe:
                                                                </label>
                                                                <select name="timeframe" id="timeframe" value={timeframe} onChange={(e)=>{setTimeframe(e.target.value)}}>
                                                                    <option value="">- Select -</option>
                                                                    <option value="1">1 day</option>
                                                                    <option value="2">2 days</option>
                                                                    <option value="3">3 days</option>
                                                                    <option value="5">5 days</option>
                                                                    <option value="7">7 days</option>
                                                                    <option value="10">10 days</option>
                                                                    <option value="20">20 days</option>
                                                                    <option value="30">30 days</option>
                                                                    <option value="45">45 days</option>
                                                                    <option value="60">60 days</option>
                                                                    <option value="90">90 days</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <div class="form-group">
                                                                <label for="budget" class="control-label">
                                                                    Budget:
                                                                </label>
                                                                <div class="input-group input-group-attach input-group-attach-transparent input-group-attach-transparent-left">
                                                                    <div class="input-group-btn">
                                                                        <button type="button" class="btn btn-md">
                                                                            <span class="font-18">$</span>
                                                                        </button>
                                                                    </div>
                                                                    <input type="number" class="form-control" name="budget" id="budget" value={budget} onChange={(e)=>{setBudget(e.target.value)}}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="expdate" class="control-label">
                                                            Active Until:
                                                        </label>
                                                        <input type="datetime-local" class="form-control" name="expdate" id="expdate" value={activeuntil} onChange={(e)=>{setActiveuntil(e.target.value)}}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr/>
                                            
                                            <div class="row">
                                                <div class="col-sm-12 file-upload-box-container">
                                                
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_1">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Main Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file" name="picture_1" id="picture_1" accept="image/*" value={picture1} onChange={(e)=>setPicture1(e.target.value)} />
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_2">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Add Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file" name="picture_2" id="picture_2" accept="image/*" value={picture2} onChange={(e)=>setPicture2(e.target.value)} />
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_3">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Add Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file" name="picture_3" id="picture_3" accept="image/*" value={picture3} onChange={(e)=>setPicture3(e.target.value)} />
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_4">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Add Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file" name="picture_4" id="picture_4" accept="image/*" value={picture4} onChange={(e)=>setPicture4(e.target.value)} />
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_5">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Add Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file" name="picture_5" id="picture_5" accept="image/*" value={picture5} onChange={(e)=>setPicture5(e.target.value)} />
                                                    </div>
                                                    
                                                    <div class="file-upload-box">
                                                        <label class="" for="picture_6">
                                                            <div>
                                                                <span class="fa fa-plus icon-50"></span>
                                                            </div>
                                                            <div>
                                                                Add Picture
                                                                <br />
                                                                (jpg, jpeg, png, gif)
                                                            </div>
                                                            <button class="btn btn-danger btn-xs file-upload-box-delete" type="button">
                                                                <span class="fa fa-times"></span>
                                                                Delete
                                                            </button>
                                                        </label>
                                                        <input type="file" name="picture_6" id="picture_6" accept="image/*" value={picture6} onChange={(e)=>setPicture6(e.target.value)} />
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <hr/>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="description" class="control-label">
                                                            Project Description:
                                                        </label>
                                                        <textarea name="description" id="description" class="form-control resize-none" style={{height: "99px"}} value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="visibility" class="control-label">
                                                            Visiblility:
                                                        </label>
                                                        <select name="visibility" id="visibility">
                                                            <option value="">- Select -</option>
                                                            <option value="public">Public</option>
                                                            <option value="private">Private</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="tags" class="control-label">
                                                            Tags:
                                                        </label>
                                                        let's do comman separated value for now.. onsave, explode input with comma 
                                                        <input type="search" name="tags" class="form-control" placeholder="Search"/>
                                                    </div>
                                                    <div>
                                                        <div class="item-labels item-labels-tags-all" style={{marginLeft: "-2px"}}>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                Mobile App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                iOS App
                                                            </div>
                                                            <div class="item-labels-tags cursor-pointer">
                                                                App Store
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div class="p-15 mt-15 bt-1-ddd floated-content">
                                            <div class="pull-right">
                                                <a href="/account/projects/edit/1234/rules" class="btn btn-transparent-black btn-sm icon-left">
                                                    <span class="fa fa-angle-left"></span>
                                                    Back
                                                </a>
                                                <button type="submit" class="btn btn-blue btn-sm icon-right" onClick={handleSubmit} >
                                                    Proceed
                                                    <span class="fa fa-angle-right"></span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                                <p Style={{display:display}}>category created successfully</p>

                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    </div>

		</>
		);
}
export default ProjectEditInfo;