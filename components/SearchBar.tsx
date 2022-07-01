import React, { useState } from "react";
import { GoSearch } from 'react-icons/go';
import { FaList } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import category, { CategoryType } from "../assets/fake-data/categorys";

interface propsType {
    openList: () => void;
    closeList: () => void;
}


const SearchBar: React.FC<propsType> = ({openList, closeList}) => {
    const [categoryItem, setCategoryItem] = useState<string>("All Category");
    const [categorySlug, setCategorySlug] = useState<string>("");

    const [openCategory, setOpenCategory] = useState<boolean>(false);
    
    const selectCategory = ( display: string, slug: string) : void => {
        setCategoryItem(display);
        setCategorySlug(slug);
        setOpenCategory(false);
    }

    const openCategoryHandler = () => {
        setOpenCategory(!openCategory);
    }

  return (
    <div className="_all_product_rice_search_bar">
        <div className="_all_product_rice_search_bar_wrap">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-4">
                   <div className="_category">
                        <div className="_category_wrap">
                            <p className="_category_select_current" onClick={openCategoryHandler}>{categoryItem}<MdOutlineKeyboardArrowDown className="_arrow" /></p>
                            <div className={`_category_select_wrap ${openCategory && "_open"}`}>
                               <div className="_category_select_options">
                                    {category.map((category: CategoryType ) => (
                                        <p className="_category_select_item" onClick={() => selectCategory(category.display, category.categorySlug) } >
                                            {category.display}
                                        </p>
                                    ))}
                                </div> 
                            </div>
                            
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-7 col-sm-6">
                   <form className="_search_input">
                        <input className="_search_input_main" type="text" placeholder="Search Product..." />
                        <button className="_search_input_btn"><GoSearch className="_icon" /></button>
                    </form> 
                </div>
                <div className="col-lg-3 col-sm-2">
                    <div className="_card_view">
                        <BsFillGrid3X3GapFill className="_card_view_icon" onClick={closeList} />
                        <FaList className="_card_view_icon" onClick={openList} />
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar