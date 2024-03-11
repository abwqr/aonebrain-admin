import React, {useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
const PostJobs = ({setAlert, setJobData}) => {

    var [formData, setFormData] = useState(
        {
            title: "",
            company_name: "",
            job_location: "...",
            description: "",
            Salary: "",
            experience: "",
            vacancy: "",
            category: 1,
            gender: "",
            responsibilities: "",
            employment_status: "",
            application_deadline: "",
        }   
    )


    var [location, setLocation] = useState({
        country: "",
        city: "",
        address: ""
    })//appends location

    var [application_enddate, setDate] = useState({
        date:''
    })
    const {date} = application_enddate
    const {country, city, address} = location
    const {title, company_name, job_location, description, Salary, experience, vacancy, category, gender, responsibilities, employment_status, application_deadline} = formData


    const onChangeHandler = e => {
        e.preventDefault()

        if(e.target.name === 'country' || e.target.name === 'city' ||e.target.name === 'address'){
            setLocation({...location, [e.target.name]: e.target.value})
        }
        
        else if(e.target.name === 'date'){
            setDate({...application_enddate, [e.target.name]: e.target.value})
        }
        
        else{
            setFormData({...formData, [e.target.name]: e.target.value});
            // console.log({title})
        }   
    }

    const clickHandler = async e => {
        e.preventDefault()
        const job_area = `${country}, ${city}, ${address}`

        const app_deadline = `${date}T18:21:02Z`
        console.log(app_deadline)
        console.log(job_area)
        setFormData({...formData, ["job_location"]: job_area});
        setFormData({...formData, ["application_deadline"]: app_deadline});
        
        console.log(formData)
        // console.log(localStorage.getItem("token"))
        // const token = localStorage.getItem("token")
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2Njg5Mjk3LCJqdGkiOiJiNzFmZWJlNjNiZGU0Y2I0YTY0Y2E4OGE3MWViZWFlZSIsInVzZXJfaWQiOjJ9.qwg1E3HcZ5v3VTaMJ7URDaf1pfww3WR8PCz6qn3qU1o'
        console.log(formData)
        console.log("token", JSON.stringify(token))
        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };
            const body = JSON.stringify(formData)
            console.log(body)
            const res = await axios.post("http://aonebrain.aim-less.com/career/job-list", body, config)
            setJobData(setFormData)
            console.log(res.data)
        }

        catch(err){
            setAlert(err.data, 'danger')
            console.log(err.response.data)
        }

    }

  return (
    <>
                        
  <div className="page-wrapper dashboard ">

<div className="preloader"></div>

<span className="header-span"></span>

<header className="main-header">
      <div className="main-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo"><a href="index.html"><img src="assets_career\images\logo.svg" alt="" title=""/></a></div>
            </div>

            <nav className="nav main-menu">
              <ul className="navigation" id="navbar">
                <li className="dropdown">
                  <span>Home</span>
                  <div className="mega-menu" id="mega-menu">
                    <div className="mega-menu-bar row pt-0">
                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <ul>
                          <li><a href="index.html">Home Page 01</a></li>
                          <li><a href="index-2.html">Home Page 02</a></li>
                          <li><a href="index-3.html">Home Page 03</a></li>
                          <li><a href="index-4.html">Home Page 04</a></li>
                          <li><a href="index-5.html">Home Page 05</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <ul>
                          <li><a href="index-6.html">Home Page 06</a></li>
                          <li><a href="index-7.html">Home Page 07</a></li>
                          <li><a href="index-8.html">Home Page 08</a></li>
                          <li><a href="index-9.html">Home Page 09</a></li>
                          <li><a href="index-10.html">Home Page 10</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <ul>
                          <li><a href="index-11.html">Home Page 11</a></li>
                          <li><a href="index-12.html">Home Page 12</a></li>
                          <li><a href="index-13.html">Home Page 13</a></li>
                          <li><a href="index-14.html">Home Page 14</a></li>
                          <li><a href="index-15.html">Home Page 15</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <ul>
                          <li><a href="index-16.html">Home Page 16</a></li>
                          <li><a href="index-17.html">Home Page 17</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="dropdown has-mega-menu" id="has-mega-menu">
                  <span>Find Jobs</span>
                  <div className="mega-menu" id="mega-menu">
                    <div className="mega-menu-bar row">
                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <h3>Jobs Listing</h3>
                        <ul>
                          <li><a href="job-list-v1.html">Jobs List – v1</a></li>
                          <li><a href="job-list-v2.html">Jobs List – v2</a></li>
                          <li><a href="job-list-v3.html">Jobs List – v3</a></li>
                          <li><a href="job-list-v4.html">Jobs List – v4</a></li>
                          <li><a href="job-list-v5.html">Jobs List – v5</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <ul>
                          <li><a href="job-list-v6.html">Jobs List – v6</a></li>
                          <li><a href="job-list-v7.html">Jobs List – v7</a></li>
                          <li><a href="job-list-v8.html">Jobs List – v8</a></li>
                          <li><a href="job-list-v9.html">Jobs List – v9</a></li>
                          <li><a href="job-list-v10.html">Jobs List – v10</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <ul>
                          <li><a href="job-list-v11.html">Jobs List – v11</a></li>
                          <li><a href="job-list-v12.html">Jobs List – v12</a></li>
                          <li><a href="job-list-v13.html">Jobs List – v13</a></li>
                          <li><a href="job-list-v14.html">Jobs List – v14</a></li>
                        </ul>
                      </div>

                      <div className="column col-lg-3 col-md-3 col-sm-12">
                        <h3>Jobs Single</h3>
                        <ul>
                          <li><a href="job-single.html">Job Single v1</a></li>
                          <li><a href="job-single-2.html">Job Single v2</a></li>
                          <li><a href="job-single-3.html">Job Single v3</a></li>
                          <li><a href="job-single-4.html">Job Single v4</a></li>
                          <li><a href="job-single-5.html">Job Single v5</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="dropdown">
                  <span>Employers</span>
                  <ul>
                    <li className="dropdown">
                      <span>Employers List</span>
                      <ul>
                        <li><a href="employers-list-v1.html">Employers LIst v1</a></li>
                        <li><a href="employers-list-v2.html">Employers LIst v2</a></li>
                        <li><a href="employers-list-v3.html">Employers LIst v3</a></li>
                        <li><a href="employers-list-v4.html">Employers LIst v4</a></li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <span>Employers Single</span>
                      <ul>
                        <li><a href="employers-single-v1.html">Employers Single v1</a></li>
                        <li><a href="employers-single-v2.html">Employers Single v2</a></li>
                        <li><a href="employers-single-v3.html">Employers Single v3</a></li>
                      </ul>
                    </li>
                    <li><a href="dashboard.html">Employers Dashboard</a></li>
                  </ul>
                </li>

                <li className="current dropdown">
                  <span>Candidates</span>
                  <ul>
                    <li className="dropdown">
                      <span>Candidates List</span>
                      <ul>
                        <li><a href="candidates-list-v1.html">Candidates LIst v1</a></li>
                        <li><a href="candidates-list-v2.html">Candidates LIst v2</a></li>
                        <li><a href="candidates-list-v3.html">Candidates LIst v3</a></li>
                        <li><a href="candidates-list-v4.html">Candidates LIst v4</a></li>
                        <li><a href="candidates-list-v5.html">Candidates LIst v5</a></li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <span>Candidates Single</span>
                      <ul>
                        <li><a href="candidates-single-v1.html">Candidates Single v1</a></li>
                        <li><a href="candidates-single-v2.html">Candidates Single v2</a></li>
                        <li><a href="candidates-single-v3.html">Candidates Single v3</a></li>
                      </ul>
                    </li>
                    <li><a href="candidate-dashboard.html">Candidates Dashboard</a></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <span>Blog</span>
                  <ul>
                    <li><a href="blog-list-v1.html">Blog LIst v1</a></li>
                    <li><a href="blog-list-v2.html">Blog LIst v2</a></li>
                    <li><a href="blog-list-v3.html">Blog LIst v3</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>

                <li className="dropdown">
                  <span>Pages</span>
                  <ul>
                    <li className="dropdown">
                      <span>Shop</span>
                      <ul>
                        <li><a href="shop.html">Shop List</a></li>
                        <li><a href="shop-single.html">Shop Single</a></li>
                        <li><a href="shopping-cart.html">Shopping Cart</a></li>
                        <li><a href="shop-checkout.html">Checkout</a></li>
                        <li><a href="order-completed.html">Order Completed</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="faqs.html">FAQ's</a></li>
                    <li><a href="terms.html">Terms</a></li>
                    <li><a href="invoice.html">Invoice</a></li>
                    <li><a href="elements.html">Ui Elements</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </li>

                <li className="mm-add-listing">
                  <a href="add-listing.html" className="theme-btn btn-style-one">Job Post</a>
                  <span>
                    <span className="contact-info">
                      <span className="phone-num"><span>Call us</span><a href="tel:1234567890">123 456 7890</a></span>
                      <span className="address">329 Queensberry Street, North Melbourne VIC <br></br>3051, Australia.</span>
                      <a href="mailto:support@superio.com" className="email">support@superio.com</a>
                    </span>
                    <span className="social-links">
                      <a href="#"><span className="fab fa-facebook-f"></span></a>
                      <a href="#"><span className="fab fa-twitter"></span></a>
                      <a href="#"><span className="fab fa-instagram"></span></a>
                      <a href="#"><span className="fab fa-linkedin-in"></span></a>
                    </span>
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          <div className="outer-box">
            <a href="candidate-dashboard-cv-manager.html" className="upload-cv"> Upload your CV</a>
            <div className="btn-box">
              <a href="login-popup.html" className="theme-btn btn-style-three call-modal">Login / Register</a>
              <a href="dashboard-post-job.html" className="theme-btn btn-style-one">Job Post</a>
            </div>
          </div>
        </div>

        <div className="mobile-header">
          <div className="logo"><a href="index.html"><img src="assets_career\images\logo.svg" alt="" title=""/></a></div>

          <div className="nav-outer clearfix">

            <div className="outer-box">
              <div className="login-box">
                <a href="login-popup.html" className="call-modal"><span className="icon-user"></span></a>
              </div>

              <a href="#nav-mobile" className="mobile-nav-toggler"><span className="flaticon-menu-1"></span></a>
            </div>
          </div>
        </div>

        <div id="nav-mobile"></div>
      </header>

<div className="sidebar-backdrop"></div>

<div className="user-sidebar">

  <div className="sidebar-inner">
    <ul className="navigation">
      <li><a href="dashboard.html"> <i className="la la-home"></i> Dashboard</a></li>
      <li><a href="dashboard-company-profile.html"><i className="la la-user-tie"></i>Company Profile</a></li>
      <li className="active"><a href="dashboard-post-job.html"><i className="la la-paper-plane"></i>Post a New Job</a></li>
      <li><a href="dashboard-manage-job.html"><i className="la la-briefcase"></i> Manage Jobs </a></li>
      <li><a href="dashboard-applicants.html"><i className="la la-file-invoice"></i> All Applicants</a></li>
      <li><a href="dashboard-resumes.html"><i className="la la-bookmark-o"></i>Shortlisted Resumes</a></li>
      <li><a href="dashboard-packages.html"><i className="la la-box"></i>Packages</a></li>
      <li><a href="dashboard-messages.html"><i className="la la-comment-o"></i>Messages</a></li>
      <li><a href="dashboard-resume-alerts.html"><i className="la la-bell"></i>Resume Alerts</a></li>
      <li><a href="dashboard-change-password.html"><i className="la la-lock"></i>Change Password</a></li>
      <li><a href="dashboard-company-profile.html"><i className="la la-user-alt"></i>View Profile</a></li>
      <li><a href="index.html"><i className="la la-sign-out"></i>Logout</a></li>
      <li><a href="index.html"><i className="la la-trash"></i>Delete Profile</a></li>
    </ul>
  </div>
</div>


<section className="user-dashboard">
  <div className="dashboard-outer">
    <div className="upper-title-box">
      <h3>Post a New Job!</h3>
      <div className="text">Ready to jump back in?</div>
    </div>

    <div className="row">
      <div className="col-lg-12">
        <div className="ls-widget">
          <div className="tabs-box">
            <div className="widget-title">
              <h4>Post Job</h4>
            </div>

            <div className="widget-content">

              <div className="post-job-steps">
                <div className="step">
                  <span className="icon flaticon-briefcase"></span>
                  <h5>Job Detail</h5>
                </div>

                <div className="step">
                  <span className="icon flaticon-money"></span>
                  <h5>Package & Payments</h5>
                </div>

                <div className="step">
                  <span className="icon flaticon-checked"></span>
                  <h5>Confirmation</h5>
                </div>
              </div>

              <form className="default-form">
                <div className="row">
                  <div className="form-group col-lg-12 col-md-12">
                    <label>Job Title</label>
                    <input type="text" name="title" placeholder="Title" value={title} onChange={e => onChangeHandler(e)}/>
                  </div>

                  <div className="form-group col-lg-12 col-md-12">
                    <label>Job Description</label>
                    <textarea name = "description" value = {description} placeholder="Description" onChange={e => onChangeHandler(e)}></textarea>
                  </div>

                  <div className="form-group col-lg-12 col-md-12">
                    <label>Employment Status</label>
                    <input type="text" name="employment_status" vale = {employment_status} placeholder="Employment Status"  onChange={e => onChangeHandler(e)}/>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Vacancy</label>
                    <input type="text" name="vacancy" value = {vacancy} placeholder="Vacancy"  onChange={e => onChangeHandler(e)}/>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Offered Salary</label>
                    <input type="text" name="Salary" value = {Salary} placeholder="Salary"  onChange={e => onChangeHandler(e)}/>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Category</label>
                    <input type="text" name="category" value = {category} placeholder="Category"  onChange={e => onChangeHandler(e)}/>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Experience</label>
                    <input type="text" name="experience" value = {experience} placeholder="Experience"  onChange={e => onChangeHandler(e)}/>
                </div>

                  <div className="form-group col-lg-6 col-md-12">
                    <label>Gender</label>
                    <select className="chosen-select" name="gender"  onChange={e => onChangeHandler(e)}>
                      <option>Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Company Name</label>
                    <input type="text" name="company_name" value={company_name}  onChange={e => onChangeHandler(e)} placeholder="Company Name"/>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Responsibilities</label>
                    <input type="text" name="responsibilities" value={responsibilities} placeholder="Responsibilities"  onChange={e => onChangeHandler(e)}/>
                </div>

                <div className="form-group col-lg-12 col-md-12">
                    <label>Application Deadline</label>
                    <input type="date" name="date" value={date}  onChange={e => onChangeHandler(e)} />
                </div>

                  <div className="form-group col-lg-6 col-md-12">
                    <label>Country</label>
                            <select  name="country"  onChange={e => onChangeHandler(e)}>
                                <option>Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Aland Islands">Aland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Curacao">Curacao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kosovo">Kosovo</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Barthelemy">Saint Barthelemy</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Martin">Saint Martin</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Sint Maarten">Sint Maarten</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                <option value="South Sudan">South Sudan</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-Leste">Timor-Leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                  </div>

                  <div className="form-group col-lg-12 col-md-12">
                    <label>City</label>
                    <input type="text" name="city" value = {city} placeholder="City"  onChange={e => onChangeHandler(e)}/>
                  </div>

                  <div className="form-group col-lg-12 col-md-12">
                    <label>Complete Address</label>
                    <input type="text" name="address" value = {address}  onChange={e => onChangeHandler(e)} placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."/>
                  </div>

                  


                  

                  <div className="form-group col-lg-12 col-md-12 text-right">
                    <button className="theme-btn btn-style-one" onClick={e => clickHandler(e)}>Next</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>
<div className="copyright-text">
  <p>© 2021 Superio. All Right Reserved.</p>
</div>

</div>
    
    </>
  )
}

PostJobs.propTypes = {
    setAlert: PropTypes.func.isRequired,
    setJobData: PropTypes.func.isRequired
  }


export default connect(null,{setAlert})(PostJobs)