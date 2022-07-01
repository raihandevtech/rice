import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react';
import OfferProduct from '../../components/OfferProduct';
import offerProductData, { OfferProductType } from "../../assets/fake-data/offer-product";
import  productData , { productType } from '../../assets/fake-data/products';
import SearchBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';

const Products: NextPage = () => {

    const [ List, setList ] = useState<boolean>(false);
    const [ Medium, setMedium ] = useState<boolean>(false);
    const openList = () => setList(true);
    const closeList = () => setList(false);
    
    let resize: number = 0;

    useEffect(() => {
      if(window.innerWidth <= 991 ){
        setMedium(true);
      }
      if(window.innerWidth <= 575 ){
        setList(false);
      }
      function handleResize() {
        resize  = window.innerWidth;
        if(window.innerWidth <= 991 ){
          setMedium(true);
        } 
        if(window.innerWidth >= 991 ){
          setMedium(false);
        }
        if(window.innerWidth <= 575 ){
          setList(false);
        }

      }
      
      window.addEventListener('resize', handleResize);
    },[resize]);


  return (
        <main>
        <section className='_all_product_rice_section'>
          <div className="_all_product_rice_wrap">
            <div className="container">
              <div className="_all_product_rice_offer_product">
                <div className="row">
                  <SearchBar openList={openList} closeList={closeList} />
                </div>
                <div className="row">
                  <div className={`${List  ? "col-lg-4" : "col-12"}`}>
                    <div className="row">
                      {offerProductData(3).map((offer: OfferProductType, index: number) => (
                        <div className={`${
                          !Medium ? `${List ? "col-12" : "col-lg-4 col-md-6"}` : "col-lg-4 col-md-6"
                        }  ${!Medium ? `${index === 2 && !List && "offset-md-3 offset-lg-0"}` : `${index === 2 && "offset-md-3 offset-lg-0"}`}`} key={offer.slug} >
                          <OfferProduct offer={offer} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${List  ? "col-lg-8" : "col-12"}`}>
                    <div className="row">
                      {productData.getAllProducts().map((product: productType) => (
                        <div className= {`${List ? "col-lg-12 col-md-12" : "col-lg-4 col-md-6 col-sm-6"}`}>
                          <ProductCard product={product} list={List} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Products