
import React from 'react';
import Image from 'next/image';
import productData,{ productType } from '../assets/fake-data/products';
import Link from 'next/link';

function RelatedProduct() {
  return (
    <div className='_related_product_rice_section'>
        <div className="_related_product_rice_wrap">
            {productData.getProducts(7).map((product: productType) => (
                <Link href={`/products/${product.slug}`} key={product.slug}>
                <div className="_related_product_rice_item" >
                    <div className="_related_product_rice_item_img">
                    <div className="_features_rice_item_img">
                        <Image src={product.image01}  layout='fill' objectFit='cover' className='_img' />
                    </div>
                    </div>
                    <div className="_related_product_rice_content">
                            <p className="_related_product_rice_content_stock">Status <span className='_separet'>: </span><span className='_stock_txt'>{product.availability}</span></p>
                            {product.discount && <p className="_related_product_rice_content_offer">Save {product.discount}%</p>}
                            
                        <h2 className="_related_product_rice_content_title">{product.title}</h2>
                        <p className="_related_product_rice_content_desc">{product.description}</p>
                    </div>
                </div>
                </Link>
                
            ))}
            
        </div>
    </div>
  )
}

export default RelatedProduct