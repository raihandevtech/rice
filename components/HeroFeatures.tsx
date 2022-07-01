import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import '@splidejs/react-splide/css';
import { features, FeaturesType } from '../assets/fake-data/features';
import Button from './Button';

const HeroFeatures = () => {
  return (
    <div className="_features_rice_section">
        <div className="_features_rice_wrap">
            <Splide options={ { rewind: true } } aria-label="React Splide Example">
                {features.map((item: FeaturesType ) => {
                    return(
                      <SplideSlide key={item.image}>
                        <div className="_features_rice_item">
                            <div className="_features_rice_item_main">
                                <div className="_features_rice_item_img">
                                   <Image src={item.image} alt={item.image} height={800} width={1560} layout='fill' className='_img' />
                                </div>
                                <div className="_features_rice_item_content">
                                    <h1 className="_features_rice_item_title">{item.title}</h1>
                                    <p className="_features_rice_item_desc">{item.description}</p>
                                    <Button href={`/products/${item.slug}`} size="medium" color="secondary" text="Read More" />
                                </div>
                            </div>
                        </div>
                       </SplideSlide>  
                    )
                })}
                
            </Splide>
        </div>
    </div>
  )
}

export default HeroFeatures