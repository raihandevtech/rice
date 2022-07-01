
import React, { FC } from "react";
import Image from "next/image"
import Button from "./Button";
import { productType } from "../assets/fake-data/products";
import ProductMeta from "./ProductMeta";

interface product {
  product: productType;
  list?: boolean;
}

const ProductCard:FC<product> = ({ product, list }) : JSX.Element => {
  const { discount, image01, title, description, slug, availability } = product;

  return (
      <div className={`_product_rice_card ${list && "_list"}`}>
        <div className="_product_rice_card_thumb">
          { discount && <span className="_product_rice_card_thumb_descount">{discount}% Save</span>}
          <div className="_product_rice_card_thumb_img">
            <Image src={image01} alt="pic" width={600} height={400} layout="responsive" />
          </div>
          
          <span className={`_product_rice_card_thumb_stock ${availability === "in stock" && "_in_stock"}`}>{availability === "in stock" ? "In Stock" : "Out Of Stock"}</span>
        </div>
        <div className="_product_rice_card_content">
          <div className="_product_rice_card_meta">
            <ProductMeta name="Mk Raihan" rating={3.5} />
          </div>
          <h3 className="_product_rice_card_title">{title}</h3>
          <p className="_product_rice_card_desc">{description}</p>
          <div className="_product_rice_card_btn">
           <Button href={`products/${slug}`} size="small" color="primary"  text="Read More" />
          </div>
        </div>
    </div>
  ) 
}

export default ProductCard;