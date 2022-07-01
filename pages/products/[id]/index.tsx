import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import productData, { productType } from '../../../assets/fake-data/products';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/router';
import ShareLink from '../../../components/ShareLink';
import Button from '../../../components/Button';
import ProductMeta from '../../../components/ProductMeta';
import { price } from '../../../assets/fake-data/products';
import numberWithCommas from '../../../utils/numberWithCommas';
import ProductReview from '../../../components/ProductReview';
import RelatedProduct from '../../../components/RelatedProduct';

const SingleProduct = () => {
    
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<productType | undefined >(undefined);
    const [openWeight, setOpenWeight] = useState<boolean>(false);
    const [click, setClick ] = useState<number>(0);
    const [images, setImages ] = useState<(StaticImageData | undefined | string )[]>([]);
    const [previewImg, setPreviewImg] = useState<StaticImageData | undefined | string >("");
    const [allPrice, setAllPrice] = useState<(price[])>([]);
    const [price, setPrice ] = useState<price | null >(null);

    useEffect(() => {
        const fatceData = async () : Promise<void> => {
            const ProductData = await productData.getProductBySlug(id);        
            setProduct(ProductData);
            setPreviewImg(ProductData?.image01);
            setImages([product?.image01, product?.image02, product?.image03]);

            let PriceData = ProductData?.price;
            
            if(PriceData && PriceData.length >= 2 ){
                const Price = PriceData?.find((price) => price.weight === 'mon');
                if(Price){
                    setPrice({ ...Price });
                }else{
                    setPrice({...PriceData[0]})
                }
            }else{
                if(PriceData && PriceData[0] ){
                    setPrice({...PriceData[0]});
                }else{
                    setPrice(null);
                }
                
            }

            if(PriceData){
              setAllPrice([...PriceData]);
              console.log(PriceData);
              
            }else{
              setAllPrice([]);
            }
        }

        fatceData();
        
    }, [product,id])
        
    const clickImg = (image: StaticImageData | string , index: number) : void => {
        setPreviewImg(image);
        setClick(index);
    }
    const handleWeight = () => {
        setOpenWeight(!openWeight);
    }
    
    const handlePrice = (item: price): void => {
        setPrice({...item});
        setOpenWeight(false);
    }

  return (
    <section className='_single_product_rice_section'>
        <div className="_single_product_rice_wrap">
            {product ? (
              <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="_single_product_rice_image">
                            <div className="_single_product_rice_image_main">
                                { previewImg && <Image src={previewImg} width={500} height={340} layout="responsive" objectFit='cover' />}
                            </div>
                            <div className="_single_product_rice_image_list">
                                {images.map((image, index) => (
                                    image && 
                                     <div className={`_single_product_rice_image_list_item ${click === index && "_active"}`} key={index} onClick={() => clickImg(image, index)} >
                                       <Image src={image} width={160} height={90} layout="responsive" objectFit='cover' />       
                                    </div>                       
                                 ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="_single_product_rice_content">
                            <div className="_single_product_rice_meta">
                                <ProductMeta name="Mk Raihan" rating={3.5} />
                            </div>
                            <ShareLink color='primary' />
                            <div className="_single_product_rice_status">
                                <h3 className="_single_product_rice_status_title">STATUS -</h3>
                                <p className="_single_product_rice_status_txt">{product.availability}</p>
                            </div>
                            <h2 className="_single_product_rice_title">{product.title}</h2>
                            <p className="_single_product_rice_short_desc">{product.shortDescription}</p>
                            <div className="_single_product_rice_price">
                                <div className="_single_product_rice_price_weight">
                                    <p className="_single_product_rice_price_weight_main" onClick={handleWeight}>per {price?.weight} <MdOutlineKeyboardArrowDown className='_arrow' /></p>
                                    <div className={`_single_product_rice_price_weight_list ${openWeight && "_open"}`}>
                                        {allPrice.map((item : price, index : number) => (
                                            <p className="_single_product_rice_price_weight_item" key={item?.weight} onClick={ () => handlePrice(item)}>per {item?.weight}</p>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="_single_product_rice_price_amount">{`${numberWithCommas(price?.value)}`} Tk</h3>
                            </div>
                            <Button color='primary' href={`/products/${id}/contact`} size='medium' text='contact' />
                        </div>
                    </div>
                    <div className="col-12">
                       <div className="_single_product_rice_desc_wrap">
                            <p className="_single_product_rice_desc_txt">{product.description}</p>
                        </div> 
                    </div>
                    <div className="col-12">
                      <div className="row">
                       <div className="col-lg-7">
                            <ProductReview />
                        </div>
                        <div className="col-lg-5">
                            <RelatedProduct />
                        </div> 
                      </div>  
                    </div>
                </div>
            </div>  
            ) : (
                <div className="_product_rice_emty">
                    <h2 className="_product_rice_emty_txt">There's No Product</h2>
                    <h3 className="_product_rice_go_to_product">Go To Product Page</h3>
                    <Button href='/products' text='Products' color='secondary' size='medium' />
                </div>
            )}
            
        </div>
    </section>
  )
}

export default SingleProduct;