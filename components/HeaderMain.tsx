import Image from "next/image"
import logo from "../assets/images/logo.png"
import { ChevronDownIcon, } from "@heroicons/react/outline";
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/Md';
import { useState } from "react";
import Link from "next/link";
function HeaderMain() {
  const [TogglerMenu, setTogglerMenu] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  
  const ChangeDropdown = () => setDropdown(!dropdown);
  const HideDropdown = () => setDropdown(false);
  const OpenMenu = () => setTogglerMenu(true);
  const HideMenu = () => setTogglerMenu(false);
  
  return (
    <div className="_header_rice_main_section">
        <div className="container">
            <div className="_header_rice_wrap">
                <div className="_header_rice_logo">
                  <Link href="/" >
                    <Image src={logo} layout="responsive"  />
                  </Link>
                </div>
                <div className={`_header_rice_nav ${TogglerMenu && "_active"}`}>
                  <div className="_header_rice_nav_menu">
                    <ul className="_header_rice_nav_menu_main">
                      <li className="_header_rice_nav_menu_item">
                        <Link href="/">
                        <a  className="_header_rice_nav_menu_item_link _active">Home</a>
                        </Link>
                      </li>
                      <li className="_header_rice_nav_menu_item">
                        <Link href="/products">
                        <a  className="_header_rice_nav_menu_item_link">Produces</a>
                        </Link>
                      </li>
                      <li className="_header_rice_nav_menu_item">
                        <a href="#0" className="_header_rice_nav_menu_item_link">Events</a>
                      </li>
                      <li className="_header_rice_nav_menu_item">
                        <a href="#0" className="_header_rice_nav_menu_item_link">About</a>
                      </li>
                      <li className="_header_rice_nav_menu_item">
                        <a href="#0" className="_header_rice_nav_menu_item_link _header_rice_dropdown" onClick={ChangeDropdown}>Pages <ChevronDownIcon className="_dropdown_icon" /></a>
                        <ul className={`_header_rice_dropdown_menu ${dropdown && "_active"}`} onClick={HideDropdown}>
                          <li className="_header_rice_dropdown_menu_item">
                            <a href="#0" className="_header_rice_dropdown_menu_item_link">Register</a>
                          </li>
                          <li className="_header_rice_dropdown_menu_item">
                            <a href="#0" className="_header_rice_dropdown_menu_item_link">Register</a>
                          </li>
                          <li className="_header_rice_dropdown_menu_item">
                            <a href="#0" className="_header_rice_dropdown_menu_item_link">Register</a>
                          </li>
                          <li className="_header_rice_dropdown_menu_item">
                            <a href="#0" className="_header_rice_dropdown_menu_item_link">Register</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="_header_rice_sign_up_btn">
                    <a href="#0" className="_header_rice_sign_up_btn_link">
                      <span className="_header_rice_sign_up_btn_txt">SIGN UP</span>
                    </a>
                  </div>
                </div>
                <div className="_header_rice_menu_toggler">
                  { TogglerMenu ? <MdClose className="_menu_toggler_icon" onClick={HideMenu} /> : <FaBars className="_menu_toggler_icon _open" onClick={OpenMenu} /> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain;