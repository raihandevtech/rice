import Image from 'next/image';
import React from 'react';
import {getCategorys, CategoryType} from '../assets/fake-data/categorys';

const FeatureCategorys = (): JSX.Element => {
  return (
    <section className="_feature_category_rice_section">
        <div className="_feature_category_rice_wrap">
            <div className="container">
                <h2 className="_rice_heading_title">Feature Category</h2>
                <div className="_feature_category_rice_main">
                    <div className="row">
                        {getCategorys(12).map((item : CategoryType ) => (
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                               <div className="_feature_category_rice_item">
                                    <div className="_feature_category_rice_item_img">
                                        <Image src={item.categoryImg} width={500} height={500} layout="responsive" />
                                    </div>
                                    <h3 className="_feature_category_rice_item_title">{item.display}</h3>
                                </div> 
                            </div>
                        
                    ))}
                    </div>
                    
                </div>
            </div>
        </div>

    </section>
  )
}

export default FeatureCategorys;