import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
export default function CandidatesList() {
  return (
    <>
      

      <div className="page-wrapper">

      <div className="preloader"></div>

      <span className="header-span"></span>

      <Header/>

      <section className="page-title">
        <div className="auto-container">
          <div className="title-outer">
            <h1>Showing All Resumes</h1>
            <ul className="page-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>Resumes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ls-section">
        <div className="auto-container">
          <div className="filters-backdrop"></div>

          <div className="row">

          <Navbar/>

            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <button type="button" className="theme-btn btn-style-two toggle-filters">Show Filters</button>

                <div className="ls-switcher">
                  <div className="showing-result">
                    <div className="text">Showing <strong>41-60</strong> of <strong>944</strong> jobs</div>
                  </div>
                  <div className="sort-by">
                    <select className="chosen-select">
                      <option>New Jobs</option>
                      <option>Freelance</option>
                      <option>Full Time</option>
                      <option>Internship</option>
                      <option>Part Time</option>
                      <option>Temporary</option>
                    </select>

                    <select className="chosen-select">
                      <option>Show 10</option>
                      <option>Show 20</option>
                      <option>Show 30</option>
                      <option>Show 40</option>
                      <option>Show 50</option>
                      <option>Show 60</option>
                    </select>
                  </div>
                </div>


                <div className="candidate-block-three">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image"><img src="assets_career\images\resource\candidate-1.png" alt=""/></figure>
                      <h4 className="name"><a href="#">Darlene Robertson</a></h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span className="icon flaticon-money"></span> $99 / hour</li>
                      </ul>
                      <ul className="post-tags">
                        <li><a href="#">App</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Digital</a></li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                      <a href="#" className="theme-btn btn-style-three"><span className="btn-title">View Profile</span></a>
                    </div>
                  </div>
                </div>

                <div className="candidate-block-three">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image"><img src="assets_career\images\resource\candidate-2.png" alt=""/></figure>
                      <h4 className="name"><a href="#">Wade Warren</a></h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span className="icon flaticon-money"></span> $99 / hour</li>
                      </ul>
                      <ul className="post-tags">
                        <li><a href="#">App</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Digital</a></li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                      <a href="#" className="theme-btn btn-style-three"><span className="btn-title">View Profile</span></a>
                    </div>
                  </div>
                </div>

                <div className="candidate-block-three">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image"><img src="assets_career\images\resource\candidate-3.png" alt=""/></figure>
                      <h4 className="name"><a href="#">Leslie Alexander</a></h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span className="icon flaticon-money"></span> $99 / hour</li>
                      </ul>
                      <ul className="post-tags">
                        <li><a href="#">App</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Digital</a></li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                      <a href="#" className="theme-btn btn-style-three"><span className="btn-title">View Profile</span></a>
                    </div>
                  </div>
                </div>

                <div className="candidate-block-three">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image"><img src="assets_career\images\resource\candidate-4.png" alt=""/></figure>
                      <h4 className="name"><a href="#">Floyd Miles</a></h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span className="icon flaticon-money"></span> $99 / hour</li>
                      </ul>
                      <ul className="post-tags">
                        <li><a href="#">App</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Digital</a></li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                      <a href="#" className="theme-btn btn-style-three"><span className="btn-title">View Profile</span></a>
                    </div>
                  </div>
                </div>

                <div className="candidate-block-three">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image"><img src="assets_career\images\resource\candidate-5.png" alt=""/></figure>
                      <h4 className="name"><a href="#">Jerome Bell</a></h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span className="icon flaticon-money"></span> $99 / hour</li>
                      </ul>
                      <ul className="post-tags">
                        <li><a href="#">App</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Digital</a></li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                      <a href="#" className="theme-btn btn-style-three"><span className="btn-title">View Profile</span></a>
                    </div>
                  </div>
                </div>

                <div className="candidate-block-three">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image"><img src="assets_career\images\resource\candidate-6.png" alt=""/></figure>
                      <h4 className="name"><a href="#">Cameron Williamson</a></h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span className="icon flaticon-money"></span> $99 / hour</li>
                      </ul>
                      <ul className="post-tags">
                        <li><a href="#">App</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Digital</a></li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                      <a href="#" className="theme-btn btn-style-three"><span className="btn-title">View Profile</span></a>
                    </div>
                  </div>
                </div>

                <div className="candidate-block-three">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image"><img src="assets_career\images\resource\candidate-7.png" alt=""/></figure>
                      <h4 className="name"><a href="#">Robert Fox</a></h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                        <li><span className="icon flaticon-money"></span> $99 / hour</li>
                      </ul>
                      <ul className="post-tags">
                        <li><a href="#">App</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Digital</a></li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn"><span className="flaticon-bookmark"></span></button>
                      <a href="#" className="theme-btn btn-style-three"><span className="btn-title">View Profile</span></a>
                    </div>
                  </div>
                </div>

                <div className="ls-show-more">
                  <p>Showing 36 of 497 Jobs</p>
                  <div className="bar"><span className="bar-inner" style={{width: "40%"}}></span></div>
                  <button className="show-more">Show More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="main-footer alternate5">
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row">
              <div className="big-column col-xl-4 col-lg-3 col-md-12">
                <div className="footer-column about-widget">
                  <div className="logo"><a href="#"><img src="assets_career\images\logo.svg" alt=""/></a></div>
                  <p className="phone-num"><span>Call us </span><a href="thebeehost%40support.html">123 456 7890</a></p>
                  <p className="address">329 Queensberry Street, North Melbourne VIC<br></br> 3051, Australia. <br></br><a href="mailto:support@superio.com" className="email">support@superio.com</a></p>
                </div>
              </div>

              <div className="big-column col-xl-8 col-lg-9 col-md-12">
                <div className="row">
                  <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">For Candidates</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><a href="#">Browse Jobs</a></li>
                          <li><a href="#">Browse Categories</a></li>
                          <li><a href="#">Candidate Dashboard</a></li>
                          <li><a href="#">Job Alerts</a></li>
                          <li><a href="#">My Bookmarks</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">For Employers</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><a href="#">Browse Candidates</a></li>
                          <li><a href="#">Employer Dashboard</a></li>
                          <li><a href="#">Add Job</a></li>
                          <li><a href="#">Job Packages</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">About Us</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><a href="#">Job Page</a></li>
                          <li><a href="#">Job Page Alternative</a></li>
                          <li><a href="#">Resume Page</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Contact</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>


                  <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">Helpful Resources</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li><a href="#">Site Map</a></li>
                          <li><a href="#">Terms of Use</a></li>
                          <li><a href="#">Privacy Center</a></li>
                          <li><a href="#">Security Center</a></li>
                          <li><a href="#">Accessibility Center</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <div className="auto-container">
            <div className="outer-box">
              <div className="copyright-text">© 2021 <a href="#">Superio</a>. All Right Reserved.</div>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up"></span></div>
      </footer>
      </div>





    </>
  )
}



