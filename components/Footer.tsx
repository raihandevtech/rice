import Image from 'next/image';
import React, { useEffect } from 'react';
// import ReactPlayer from 'react-player';
import logo from "../assets/images/footer-logo.png"


function Footer() {


  return (
    <footer className='_footer_rice_section'>
      <div className="_footer_rice_wrap">
      <div className="container">
          <div className="_footer_rice_main">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="_footer_rice_about_widget">
                  <div className="_footer_rice_about_content">
                  <div className="_footer_rice_logo">
                    <Image src={logo} width={300} height={120} objectFit="contain" />
                  </div>
                  <p className="_footer_rice_desc">
                    Automatically generate articles for your Blog, Social media,
                    Website, Ads, SEO and more!
                  </p>
                  </div>
                  
                  <div className="_footer_rice_video">
                   {/* <ReactPlayer width="100%" height="180px"  controls url="https://www.youtube.com/watch?v=Zv11L-ZfrSg&t=104s"  />  */}
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="_footer_rice_widget_menu">
                      <h3 className="_footer_rice_widget_menu_title">
                        Company
                      </h3>
                      <ul className="_footer_rice_widget_menu_list">
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Home</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Contact us</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Blog</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Terms</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Privacy</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Content Policy</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Press</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="_footer_rice_widget_menu">
                      <h3 className="_footer_rice_widget_menu_title">
                        Product
                      </h3>
                      <ul className="_footer_rice_widget_menu_list">
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Pricing</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Features</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Join Community</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="_footer_rice_widget_menu">
                      <h3 className="_footer_rice_widget_menu_title">
                        Partners
                      </h3>
                      <ul className="_footer_rice_widget_menu_list">
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Affiliate Program</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >We are hiring</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Case Studies</a
                          >
                        </li>
                        <li className="_footer_rice_widget_menu_list_item">
                          <a
                            href="#0"
                            className="_footer_rice_widget_menu_list_link"
                            >Resources</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_footer_rice_copy_right">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <p className="_footer_rice_copy_right_text">
                    © All Rights Reserved 2022
                  </p>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-5 col-sm-12 order-sm-last order-md-0 order-last"
                >
                  <div className="_footer_rice_copy_right_menu">
                    <a href="#0" className="_footer_rice_copy_right_menu_link"
                      >Terms & Agreement</a
                    >
                    <a href="#0" className="_footer_rice_copy_right_menu_link"
                      >Privacy Policy</a
                    >
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-6">
                  <p className="_footer_rice_copy_right_text _right">
                    Website by RAIHAN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer