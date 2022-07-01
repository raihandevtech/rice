import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdStarOutline, MdStar, MdStarHalf } from 'react-icons/md';
import Button from './Button';


const ReviewForm = () => {
  const [number, setNumber] = useState<number>(0);
  const [hoverStar, setHoverStar] = useState<number | undefined >(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };
  return (
    <div className="_review_form_rice_section">
      <div className="_review_form_rice_wrap">
        <h2 className="_review_form_rice_title">Review Here</h2>
        <div className="_review_form_rice_content">
            <div className="_review_form_rice_star_wrap">
              <div className="_review_form_rice_star_main">
                {Array(5).fill(null).map((_, index) => 
                number >= index + 1 || hoverStar && hoverStar >= index + 1 ? (
                  <MdStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                    className="_review_form_rice_star_icon"
                  />
                ) : (
                  <MdStarOutline
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                    className="_review_form_rice_star_icon"
                  />
                )
              )}
              </div>
              <div className="_review_form_rice_star_txt">
                <h3>{handleText()}</h3>
              </div>
            </div>
          <textarea placeholder={handlePlaceHolder()}></textarea>
          
          <button disabled={!number && true} className='_review_form_rice_submit'>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm