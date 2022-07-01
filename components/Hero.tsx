import React, { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import HeroCategorys from './HeroCategorys';
import HeroFeatures from './HeroFeatures';




const Hero = (): JSX.Element =>  {
  const [CategoryToggler, SetCategoryToggler ] = useState<boolean>(false);

  const OpenCategory = () => SetCategoryToggler(true);
  const CloseCategory = () => SetCategoryToggler(false);

  return (
    <section className='_hero_rice_section'>
        <div className="_hero_rice_wrap">
            <div className="container">
                <div className="_hero_rice_category_menu">
                { !CategoryToggler && <AiOutlineBars className='_hero_rice_category_open' onClick={OpenCategory} /> }
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                      <HeroCategorys toggler={CategoryToggler} closeCategory={CloseCategory} />  
                    </div>
                    <div className="col-xl-9 col-lg-9">
                        <HeroFeatures />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;