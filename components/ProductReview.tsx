import { MdStarOutline, MdStar, MdStarHalf } from 'react-icons/md';
import ClientReview from './ClientReview';
import ReviewForm from './ReviewForm';

const ProductReview = () => {
  return (
    <div className="_product_review_section">
        <div className="_product_review_wrap">
            <div className="_product_review_all_info">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="_product_review_all_info_summary">
                            <div className="_product_review_all_info_score">
                                <span className="_product_review_all_info_score_average">4.5</span>
                                <span className="_product_review_all_info_score_max">/5</span>
                            </div>
                            <div className="_product_review_all_info_average">
                                <div className="_star_emty">
                                    <MdStarOutline className="_star_emty_icon" />
                                    <MdStarOutline className="_star_emty_icon" />
                                    <MdStarOutline className="_star_emty_icon" />
                                    <MdStarOutline className="_star_emty_icon" />
                                    <MdStarOutline className="_star_emty_icon" />
                                </div>
                                <div className="_star_full">
                                    <MdStar className="_star_full_icon" />
                                    <MdStar className="_star_full_icon" />
                                    <MdStar className="_star_full_icon" />
                                    <MdStarHalf className="_star_full_icon" />
                                </div>
                            </div>
                            <p className="_product_review_all_info_count">
                                93 Ratings
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="_product_review_all_info_detail">
                            <ul className='_product_review_all_info_detail_list'>
                                <li className='_product_review_all_info_detail_item'>
                                   <div className="_product_review_all_info_container_star">
                                        <div className="_star_emty">
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                        </div>
                                        <div className="_star_full">
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                        </div>
                                    </div> 
                                    <div className="_product_review_all_info_progress">
                                        <span className="_progress_emty"></span>       
                                        <span className="_progress_full" style={{width: "65%"}}></span>       
                                    </div>
                                </li>
                                <li className='_product_review_all_info_detail_item'>
                                   <div className="_product_review_all_info_container_star">
                                        <div className="_star_emty">
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                        </div>
                                        <div className="_star_full">
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                        </div>
                                    </div> 
                                    <div className="_product_review_all_info_progress">
                                        <span className="_progress_emty"></span>       
                                        <span className="_progress_full" style={{width: "30%"}}></span>       
                                    </div>
                                </li>
                                <li className='_product_review_all_info_detail_item'>
                                   <div className="_product_review_all_info_container_star">
                                        <div className="_star_emty">
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                        </div>
                                        <div className="_star_full">
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                        </div>
                                    </div> 
                                    <div className="_product_review_all_info_progress">
                                        <span className="_progress_emty"></span>       
                                        <span className="_progress_full" style={{width: "10%"}}></span>       
                                    </div>
                                </li>
                                <li className='_product_review_all_info_detail_item'>
                                   <div className="_product_review_all_info_container_star">
                                        <div className="_star_emty">
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                        </div>
                                        <div className="_star_full">
                                            <MdStar className="_star_full_icon" />
                                            <MdStar className="_star_full_icon" />
                                        </div>
                                    </div> 
                                    <div className="_product_review_all_info_progress">
                                        <span className="_progress_emty"></span>       
                                        <span className="_progress_full" style={{width: "6%"}}></span>       
                                    </div>
                                </li>
                                <li className='_product_review_all_info_detail_item'>
                                   <div className="_product_review_all_info_container_star">
                                        <div className="_star_emty">
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                            <MdStarOutline className="_star_emty_icon" />
                                        </div>
                                        <div className="_star_full">
                                            <MdStar className="_star_full_icon" />
                                        </div>
                                    </div> 
                                    <div className="_product_review_all_info_progress">
                                        <span className="_progress_emty"></span>       
                                        <span className="_progress_full" style={{width: "2%"}}></span>       
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="_product_review_form">
                <ReviewForm />
            </div>
            <div className="_product_review_client">
                <ClientReview />
            </div>

        </div>
    </div>
  )
}

export default ProductReview