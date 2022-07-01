import Image from 'next/image';
import React from 'react';
import user from "../assets/images/man-icon.png";
import { MdStarOutline, MdStar, } from 'react-icons/md';

function ClientReview() {
  return (
    <div className='_product_review_client_section'>
        { Array(3).fill(null).map((_, index) => (
        <div className="_product_review_client_main">
            <div className="_product_review_client_wrap" key={index}>
                <div className="_product_review_client_left">
                    <div className="_product_review_client_img">
                        <Image src={user} width={120} height={120} objectFit="cover" />
                    </div>
                </div>
                <div className="_product_review_client_right">
                    <div className="_product_review_client_info">
                        <div className="_product_review_client_star">
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
                    <h3 className="_product_review_client_name">Max Alina</h3>
                    </div>
                    <p className="_product_review_client_comment">
                        " Illo nihil magni voluptatem quas odit. velit deleniti tempore fugit omnis animi facere doloribus dicta. Illo nihil magni odit. facere doloribus dicta. Illo nihil magni odit."
                    </p>
                </div>
            </div>
            <div className="_replay_from_store">
                <div className="_replay_from_store_info">
                    <p className="_replay_from_store_info_txt">Response from store by</p>
                    <p className="_replay_from_store_info_name">Mk Raihan</p>
                </div>
                <p className="_replay_from_store_replay_txt">
                    "Illo nihil magni voluptatem quas odit.  Illo nihil magni voluptatem quas odit. velit deleniti tempore fugit omnis animi facere doloribus dict"
                </p>
            </div>  
        </div>
        ))}
        <div className="_product_review_client_see_more_btn">
            See More...
        </div>
    </div>
  )
}

export default ClientReview