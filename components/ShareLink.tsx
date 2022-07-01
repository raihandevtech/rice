import { FC } from "react";
import { MdShare } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn, } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

type PropsType = {
    color?: string;    
}

const ShareLink: FC<PropsType> = ({ color }) => {

    const Color = color && "_" + color ;

  return (
    <div className="_share_rice_section">
        <div className="_share_rice_wrap">
            <div className={`_share_rice_title ${Color && Color }`}>
                <h3 className="_share_rice_title_txt">SHARE</h3>
                <MdShare className='_share_rice_title_icon' />
            </div>
            <div className={`_share_rice_social ${Color && Color }`}>
                <a href="#0" className="_share_rice_social_link">
                    <FaFacebookF />
                </a>
                <a href="#0" className="_share_rice_social_link">
                    <FaTwitter />
                </a>
                <a href="#0" className="_share_rice_social_link">
                    <FaLinkedinIn />
                </a>
                <a href="#0" className="_share_rice_social_link">
                    <RiInstagramFill />
                </a>
            </div>
        </div>
    </div>
  )
}

export default ShareLink