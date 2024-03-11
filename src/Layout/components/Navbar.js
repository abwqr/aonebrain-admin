import React from 'react'

export default function Navbar() {
  return (
    <>
                    
            <div className="filters-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column pd-right">
                <div className="filters-outer">
                  <button type="button" className="theme-btn close-filters">X</button>

                  <div className="filter-block">
                    <h4>Search by Keywords</h4>
                    <div className="form-group">
                      <input type="text" name="listing-search" placeholder="Job title, keywords, or company"/>
                      <span className="icon flaticon-search-3"></span>
                    </div>
                  </div>

                  <div className="filter-block">
                    <h4>Location</h4>
                    <div className="form-group">
                      <input type="text" name="listing-search" placeholder="City or postcode"/>
                      <span className="icon flaticon-map-locator"></span>
                    </div>
                    <p>Radius around selected destination</p>
                    <div className="range-slider-one">
                      <div className="area-range-slider"></div>
                      <div className="input-outer">
                        <div className="amount-outer"><span className="area-amount"></span>km</div>
                      </div>
                    </div>
                  </div>

                  <div className="filter-block">
                    <h4>Category</h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option>Choose a category</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Apartments</option>
                      </select>
                      <span className="icon flaticon-briefcase"></span>
                    </div>
                  </div>

                     <div className="filter-block">
                    <h4>Candidate Gender</h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <span className="icon flaticon-man"></span>
                    </div>
                  </div>

                  <div className="checkbox-outer">
                    <h4>Date Posted</h4>
                    <ul className="checkboxes square">
                      <li>
                        <input id="check-f" type="checkbox" name="check"/>
                        <label for="check-f">All</label>
                      </li>
                      <li>
                        <input id="check-g" type="checkbox" name="check"/>
                        <label for="check-g">Last Hour</label>
                      </li>
                      <li>
                        <input id="check-h" type="checkbox" name="check"/>
                        <label for="check-h">Last 24 Hours</label>
                      </li>
                      <li>
                        <input id="check-i" type="checkbox" name="check"/>
                        <label for="check-i">Last 7 Days</label>
                      </li>
                      <li>
                        <input id="check-j" type="checkbox" name="check"/>
                        <label for="check-j">Last 14 Days</label>
                      </li>
                      <li>
                        <input id="check-k" type="checkbox" name="check"/>
                        <label for="check-k">Last 30 Days</label>
                      </li>
                    </ul>
                  </div>


                  <div className="checkbox-outer">
                    <h4>Experience</h4>
                    <ul className="checkboxes square">
                      <li>
                        <input id="check-l" type="checkbox" name="check"/>
                        <label for="check-l">0-2 Years</label>
                      </li>
                      <li>
                        <input id="check-m" type="checkbox" name="check"/>
                        <label for="check-m">10-12 Years</label>
                      </li>
                      <li>
                        <input id="check-n" type="checkbox" name="check"/>
                        <label for="check-n">12-16 Years</label>
                      </li>
                      <li>
                        <input id="check-o" type="checkbox" name="check"/>
                        <label for="check-o">16-20 Years</label>
                      </li>
                      <li>
                        <input id="check-p" type="checkbox" name="check"/>
                        <label for="check-p">20-25 Years</label>
                      </li>
                      <li>
                        <button className="view-more"><span className="icon flaticon-plus"></span> View More</button>
                      </li>
                    </ul>
                  </div>

                     <div className="checkbox-outer">
                    <h4>Education Levels</h4>
                    <ul className="checkboxes square">
                      <li>
                        <input id="check-a" type="checkbox" name="check"/>
                        <label for="check-a">Certificate</label>
                      </li>
                      <li>
                        <input id="check-b" type="checkbox" name="check"/>
                        <label for="check-b">Diploma</label>
                      </li>
                      <li>
                        <input id="check-c" type="checkbox" name="check"/>
                        <label for="check-c">Associate Degree</label>
                      </li>
                      <li>
                        <input id="check-d" type="checkbox" name="check"/>
                        <label for="check-d">Bachelor Degree</label>
                      </li>
                      <li>
                        <input id="check-e" type="checkbox" name="check"/>
                        <label for="check-e">Master’s Degree</label>
                      </li>
                      <li>
                        <button className="view-more"><span className="icon flaticon-plus"></span> View More</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
