import React from 'react'

export default function Footer() {
  return (
        <>
            <footer className="main-footer alternate5">
            <div className="auto-container">
                <div className="widgets-section">
                <div className="row">
                    <div className="big-column col-xl-4 col-lg-3 col-md-12">
                    <div className="footer-column about-widget">
                        <div className="logo"><a href="#"><img src="assets_careeer\images\logo.svg" alt=""/></a></div>
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


  {/* <!--Bottom--> */}
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


        </>
    )
}
