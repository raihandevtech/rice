import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { MdStar } from 'react-icons/md';
import shape from "../assets/images/shape/testimonial-img-shape.svg";
import parson1 from "../assets/images/parson/parson1.png";


const Testimonial = () => {
  return (
    <section className="_testimonial_halbor_section">
    <div className="_testimonial_halbor_wrap">
      <div className="container">
          <h2 className="_rice_heading_title">What Our Users Say</h2>
        <div className="_testimonial_halbor_main">
          <div className="row">
            <div className="col-12">
              <div className="_rice_testimonial">
                <Splide
                    options={ {
                        type: "loop",
                        perPage: 2,
                        perMove: 1,
                        breakpoints: {
                          991: {
                            perPage: 1,
                          },
                        },
                    } }
                    aria-label="My Favorite Images"
                    >

                    <SplideSlide>
                    <div className="_testimonial_rice_item">
                        <div className="_testimonial_rice_rating">
                          <MdStar className="_testimonial_rice_rating_star" />
                          <p className="_testimonial_rice_rating_number">(4.5)</p>
                        </div>
                        <div className="_testimonial_rice_person">
                          <div className="_testimonial_rice_person_img">
                            <div className="_testimonial_rice_person_img_shape">
                              <Image src={shape} width={500} height={500} objectFit="contain" />
                            </div>
                            <div className="_testimonial_rice_person_img_main">
                              <Image src={parson1} width={400} height={400} objectFit="cover" />
                            </div>
                          </div>
                          <div className="_testimonial_rice_person_details">
                            <h3 className="_testimonial_rice_person_name">
                              John Mills
                            </h3>
                            <p className="_testimonial_rice_person_profession">
                              Vp Manager,Lizlle Compar
                            </p>
                          </div>
                        </div>
                        <p className="_testimonial_rice_comment">
                          "Their UI/UX skills and experience. were key to
                          identifying potential friction points within our
                          Business Processes, which they fixed or streamlined
                          beautifull".
                        </p>
                      </div>
                    </SplideSlide> 
                    <SplideSlide>
                    <div className="_testimonial_rice_item">
                        <div className="_testimonial_rice_rating">
                          <MdStar className="_testimonial_rice_rating_star" />
                          <p className="_testimonial_rice_rating_number">(4.5)</p>
                        </div>
                        <div className="_testimonial_rice_person">
                          <div className="_testimonial_rice_person_img">
                            <div className="_testimonial_rice_person_img_shape">
                              <Image src={shape} width={500} height={500} objectFit="contain" />
                            </div>
                            <div className="_testimonial_rice_person_img_main">
                              <Image src={parson1} width={400} height={400} objectFit="cover" />
                            </div>
                          </div>
                          <div className="_testimonial_rice_person_details">
                            <h3 className="_testimonial_rice_person_name">
                              John Mills
                            </h3>
                            <p className="_testimonial_rice_person_profession">
                              Vp Manager,Lizlle Compar
                            </p>
                          </div>
                        </div>
                        <p className="_testimonial_rice_comment">
                          "Their UI/UX skills and experience. were key to
                          identifying potential friction points within our
                          Business Processes, which they fixed or streamlined
                          beautifull".
                        </p>
                      </div>
                    </SplideSlide> 
                    <SplideSlide>
                    <div className="_testimonial_rice_item">
                        <div className="_testimonial_rice_rating">
                          <MdStar className="_testimonial_rice_rating_star" />
                          <p className="_testimonial_rice_rating_number">(4.5)</p>
                        </div>
                        <div className="_testimonial_rice_person">
                          <div className="_testimonial_rice_person_img">
                            <div className="_testimonial_rice_person_img_shape">
                              <Image src={shape} width={500} height={500} objectFit="contain" />
                            </div>
                            <div className="_testimonial_rice_person_img_main">
                              <Image src={parson1} width={400} height={400} objectFit="cover" />
                            </div>
                          </div>
                          <div className="_testimonial_rice_person_details">
                            <h3 className="_testimonial_rice_person_name">
                              John Mills
                            </h3>
                            <p className="_testimonial_rice_person_profession">
                              Vp Manager,Lizlle Compar
                            </p>
                          </div>
                        </div>
                        <p className="_testimonial_rice_comment">
                          "Their UI/UX skills and experience. were key to
                          identifying potential friction points within our
                          Business Processes, which they fixed or streamlined
                          beautifull".
                        </p>
                      </div>
                    </SplideSlide> 
                    </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial