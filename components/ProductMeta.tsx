import {FC} from "react";
import Image, { StaticImageData } from "next/image"
import man from "../assets/images/man-icon.png";
import { MdStarOutline, MdStar, MdStarHalf } from 'react-icons/md';

interface PropsType {
  image?: StaticImageData | string;
  name: string;
  rating?: number;
}

const ProductMeta: FC<PropsType> = ({image, name, rating }) : JSX.Element => {
  return (
    <div className="_product_rice_meta">
        <div className="_product_rice_auth_wrap">
          <div className="_product_rice_auth">
          <div className="_product_rice_auth_img">
            {
              image ? <Image src={man} width={200} height={200} objectFit="cover"  /> :
              <Image src={man} width={200} height={200} objectFit="cover"  />  
            }
              
          </div>
          <h4 className="_product_rice_auth_name">{name}</h4>
        </div>
        </div>
        
        <div className="_product_rice_rating_wrap">
          <div className="_product_rice_rating">
            {rating && (
              <>
                <span className="_product_rice_rating_rate">({rating})</span>
                  <div className="_product_rice_rating_star">
                      <div className="_product_rice_rating_star_emty">
                      <MdStarOutline className="_product_rice_rating_star_emty_icon" />
                      <MdStarOutline className="_product_rice_rating_star_emty_icon" />
                      <MdStarOutline className="_product_rice_rating_star_emty_icon" />
                      <MdStarOutline className="_product_rice_rating_star_emty_icon" />
                      <MdStarOutline className="_product_rice_rating_star_emty_icon" />
                      </div>
                      <div className="_product_rice_rating_star_full">
                      <MdStar className="_product_rice_rating_star_full_icon" />
                      <MdStar className="_product_rice_rating_star_full_icon" />
                      <MdStar className="_product_rice_rating_star_full_icon" />
                      <MdStarHalf className="_product_rice_rating_star_full_icon" />
                      </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default ProductMeta