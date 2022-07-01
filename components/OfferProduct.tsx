import React from "react"
import Image from "next/image";
import { OfferProductType } from "../assets/fake-data/offer-product";
import Button from "./Button";

interface offerProductType {
    offer: OfferProductType;
}

const OfferProduct: React.FC<offerProductType> = ({ offer }) => {
   const { title, image01, discount , slug } = offer;
  return (
    <div className="_offer_rice_product">
        <div className="_offer_rice_product_img">
            <Image src={image01} layout="fill" objectFit="cover" className="_img" />
        </div>
        <div className="_offer_rice_product_content">
            <h2 className="_offer_rice_product_parsent"><span className="_color">{discount}%</span> Save</h2>
            <h3 className="_offer_rice_product_title">{title}</h3>
            <Button href={`/product/${slug}`} size="small" color="primary" text="See More" />
        </div>
    </div>
  )
}

export default OfferProduct