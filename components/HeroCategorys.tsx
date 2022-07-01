import { FC } from "react";
import { MdClose } from 'react-icons/Md';
import Image from 'next/image';
import { CategoryType, category } from '../assets/fake-data/categorys';

type propsType = {

  toggler: boolean;
  closeCategory: () => void;

}


const HeroCategorys: FC<propsType> = ({toggler, closeCategory}) => {
  


  return (
    <div className={`_hero_rice_category_wrap ${toggler && "_active"}`}>
        <div className="_hero_rice_category_main">
          { toggler && <MdClose className="_hero_rice_category_close" onClick={ closeCategory } /> }
        <h3 className="_hero_rice_category_title">Category's</h3>
        <div className="_hero_rice_category_items">
            {category.map((item : CategoryType ) => {
              return(
              <a href="#0" className='_hero_rice_category_link' key={item.categorySlug} onClick={ closeCategory } >
                <div className='_hero_rice_category_icon'>
                <Image src={item.categoryImg} layout="responsive" objectFit='contain' /> 
                </div>
                <p className='_hero_rice_category_txt'>{item.display}</p>
              </a>
              )
              
            })}
        </div>
       </div>
    </div>
  )
}

export default HeroCategorys;