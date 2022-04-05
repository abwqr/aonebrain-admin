import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setJobList } from '../../actions/career';
import PropTypes from 'prop-types';

const ManageJobs = ({setJobList}) => {

    const [jobData, setJobData] = useState([])
    useEffect(()=> {
        async function getJobs(){
        try{
            const res = await axios.get("http://aonebrain.aim-less.com/career/job-list")
            console.log(res.data)
            setJobList(res.data)
            setJobData(res.data)
            
        }
        catch(err){

        }}
        getJobs();
    },[]);
    


    const NavigateToIndividualJob = () => {
        console.log("test")
        return <Navigate to = "../login" replace={true} />

    }


  return (
            <>
                
                    <div className="page-wrapper dashboard ">
                    <div className="preloader"></div>
                    <span className="header-span"></span>

                    <Header/>
                    <div className="sidebar-backdrop"></div>
                    <div className="user-sidebar">

                    <div className="sidebar-inner">
                        <ul className="navigation">
                        <li><a href="dashboard.html"> <i className="la la-home"></i> Dashboard</a></li>
                        <li><a href="dashboard-company-profile.html"><i className="la la-user-tie"></i>Company Profile</a></li>
                        <li><a href="dashboard-post-job.html"><i className="la la-paper-plane"></i>Post a New Job</a></li>
                        <li className="active"><a href="dashboard-manage-job.html"><i className="la la-briefcase"></i> Manage Jobs </a></li>
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
                        <h3>Manage Jobs</h3>
                        <div className="text">Ready to jump back in?</div>
                        </div>

                        <div className="row">
                        <div className="col-lg-12">
                            <div className="ls-widget">
                            <div className="tabs-box">
                                <div className="widget-title">
                                <h4>My Job Listings</h4>

                                <div className="chosen-outer">
                                    <select className="chosen-select">
                                    <option>Last 6 Months</option>
                                    <option>Last 12 Months</option>
                                    <option>Last 16 Months</option>
                                    <option>Last 24 Months</option>
                                    <option>Last 5 year</option>
                                    </select>
                                </div>
                                </div>

                                <div className="widget-content">
                                <div className="table-outer">
                                    <table className="default-table manage-job-table">
                                    <thead>
                                        <tr>
                                        <th>Title</th>
                                        <th>Applications</th>
                                        <th>Created & Expired</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>

                                   
                                    <tbody>
                                        {jobData?.map((jobs) => (
                                        <tr>
                                        <td>
                                            <h6>{jobs.title}</h6>
                                            <h6>{jobs.id}</h6>
                                            <span className="info"><i className="icon flaticon-map-locator"></i> London, UK</span>
                                        </td>
                                        <td className="applied"><a href="#">3+ Applied</a></td>
                                        <td>{jobs.published_on}<br></br>{jobs.application_deadline}</td>
                                        <td className="status">Active</td>
                                        <td>
                                            <div className="option-box">
                                            <ul className="option-list">
                                                <li>
                                                    <Link to = '/individualjob'>
                                                    <button data-text="View Job"><span className="la la-eye"></span></button>
                                                    </Link>
                                                </li>
                                                <li>
                                                <Link to = '/updatejob' state={{ id: jobs.id}}>
                                                    <button data-text="Edit Job"><span className="la la-pencil"></span></button>
                                                </Link>
                                                </li>
                                                <li><button data-text="Delete Job"><span className="la la-trash"></span></button></li>
                                            </ul>
                                            </div>
                                        </td>
                                        </tr> 
                                    ))}

                                    </tbody>
                            
                                    </table>
                                </div>
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

ManageJobs.propTypes = {
    setJobList: PropTypes.func.isRequired
}


export default connect(null, {setJobList}) (ManageJobs)