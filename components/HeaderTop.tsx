import React, { useState } from 'react'
import { PhoneIcon, MailIcon } from '@heroicons/react/outline'
import { FaFacebookF, FaTwitter, FaLinkedinIn, } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

import bangladesh from '../assets/images/bangladesh-flag.png'
import england from '../assets/images/england-flag.png'
import Image from 'next/image'

function HeaderTop() {
    const [language, setLanguage] = useState<boolean>(false);

    const ChangeLanguage = () => setLanguage(!language);
    const ChangeLanguageItem = () => setLanguage(false);

  return (
    <div className="_header_rice_top">
        <div className="container wrap">
           <div className="_header_rice_top_left">
            <div className="_header_rice_top_contact">
                <div className="_header_rice_top_contact_item">
                    <PhoneIcon className='_header_rice_top_contact_item_icon' />
                    <p className="_header_rice_top_contact_item_txt">01912-123456</p>
                </div>
                <div className="_header_rice_top_contact_item">
                    <MailIcon className='_header_rice_top_contact_item_icon' />
                    <p className="_header_rice_top_contact_item_txt">info@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="_header_rice_top_right">
            <div className="_header_rice_top_language">
                <div className="_header_rice_top_language_item" onClick={ChangeLanguage}>
                    <div className="_header_rice_top_language_item_icon">
                    <Image src={england} alt="bangla" width={28} height={20} objectFit='cover' />
                    </div>
                    <p className="_header_rice_top_language_item_txt">English</p>
                </div>
                <ul className= {`_header_rice_top_language_list ${language && "_active"} `}>
                    <li className="_header_rice_top_language_list_item" onClick={ChangeLanguageItem} >
                        <div className="_header_rice_top_language_item">
                            <div className="_header_rice_top_language_item_icon">
                                <Image src={bangladesh} alt="bangla" width={28} height={20} objectFit='cover' />
                            </div>
                            <p className="_header_rice_top_language_item_txt">Bangla</p>
                        </div>
                    </li>
                    <li className="_header_rice_top_language_list_item" onClick={ChangeLanguageItem} >
                        <div className="_header_rice_top_language_item">
                            <div className="_header_rice_top_language_item_icon">
                                <Image src={england} alt="bangla" width={28} height={20} objectFit='cover' />
                            </div>
                            <p className="_header_rice_top_language_item_txt">English</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="_header_rice_top_social">
                <a href="#0" className="_header_rice_top_social_link"><FaFacebookF /></a>
                <a href="#0" className="_header_rice_top_social_link"><FaTwitter /></a>
                <a href="#0" className="_header_rice_top_social_link"><FaLinkedinIn /></a>
                <a href="#0" className="_header_rice_top_social_link"><RiInstagramFill /></a>
            </div>
        </div> 
        </div>
        
    </div>
  )
}

export default HeaderTop