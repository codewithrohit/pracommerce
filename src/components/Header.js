import React from 'react'

//components
import Navbar from './Navbar'
import Search from './Search'

function Header() {
    return (
      <header>
        <div className="header">
          <div className="header_top d_none1">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4">
                          <ul className="conta_icon ">
                              <li>
                                  <a href="#"><img src="assets/images/call.png" alt="#"/>Call us: 0126 - 922 - 0162</a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-4">
                          <ul className="social_icon">
                              <li>
                                  <a href="#">
                                      <i className="fa fa-facebook" aria-hidden="true"></i>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <i className="fa fa-twitter"></i>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <i className="fa fa-instagram" aria-hidden="true"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-4">
                          <div className="se_fonr1">
                              <form action="#">
                                  <div className="select-box">
                                      <label htmlFor="select-box1" className="label select-box1">
                                          <span className="label-desc">English</span>
                                      </label>
                                      <select id="select-box1" className="select">
                                          <option value="Choice 1">English</option>
                                          <option value="Choice 1">Falkla</option>
                                          <option value="Choice 2">Germa</option>
                                          <option value="Choice 3">Neverl</option>
                                      </select>
                                  </div>
                              </form>
                              <span className="time_o">
                                  Open hour: 8.00 - 18.00</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="header_midil">
              <div className="container">
                  <div className="row d_flex">
                      <div className="col-md-4">
                          <ul className="conta_icon d_none1">
                              <li>
                                  <a href="#"><img src="assets/images/email.png" alt="#"/>
                                      demo@gmail.com</a>
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-4">
                          <a className="logo" href="#"><img src="assets/images/logo.png" alt="#"/></a>
                      </div>
                      <div className="col-md-4">
                          <ul className="right_icon d_none1">
                              <li>
                                  <a href="#"><img src="assets/images/shopping.png" alt="#"/></a>
                              </li>
                              <a href="#" className="order">Order Now</a>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <Navbar />
                </div>
                <div className="col-md-4">
                    <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header