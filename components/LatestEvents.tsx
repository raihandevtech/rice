import Image from "next/image"
import event1 from "../assets/images/products/radish3.jpg"
import event2 from "../assets/images/products/onion3.jpg"
import event3 from "../assets/images/products/rice3.jpg"
import { FaUserTie } from 'react-icons/fa';
import { BsClockFill } from 'react-icons/bs';


const LatestEvents = () => {
  return (
    <section className="_latest_rice_events_section">
      <div className="_latest_rice_events_wrap">
        <div className="container">
        <h2 className="_rice_heading_title">Latest Events</h2>
        <div className="_latest_rice_events_wrap">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="_latest_rice_events_left">
                <div className="_latest_rice_events_item">
                <div className="_latest_rice_events_thumb">
                  <Image src={event1} layout="fill" className="_img" />
                </div>
                <div className="_latest_rice_events_content">
                  <h3 className="_latest_rice_events_title">The presence of basic round-neck t-shirts in your wardrobe</h3>
                  <div className="_latest_rice_events_meta">
                    <div className="_latest_rice_events_meta_item">
                        <FaUserTie className="_latest_rice_events_meta_icon" />
                        <span className="_latest_rice_events_meta_txt">Admin</span>
                    </div>
                    <div className="_latest_rice_events_meta_item">
                        <BsClockFill className="_latest_rice_events_meta_icon" />
                        <span className="_latest_rice_events_meta_txt">4--11--2022</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="_latest_rice_events_right">
              <div className="_latest_rice_events_item _right">
                <div className="_latest_rice_events_thumb">
                  <Image src={event2}  layout="fill" className="_img" />
                </div>
                <div className="_latest_rice_events_content">
                  <h3 className="_latest_rice_events_title">The presence of basic round-neck t-shirts in your wardrobe</h3>
                  <div className="_latest_rice_events_meta">
                    <div className="_latest_rice_events_meta_item">
                        <FaUserTie className="_latest_rice_events_meta_icon" />
                        <span className="_latest_rice_events_meta_txt">Admin</span>
                    </div>
                    <div className="_latest_rice_events_meta_item">
                        <BsClockFill className="_latest_rice_events_meta_icon" />
                        <span className="_latest_rice_events_meta_txt">4--11--2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_latest_rice_events_item _right">
                <div className="_latest_rice_events_thumb">
                  <Image src={event3} layout="fill" className="_img" />
                </div>
                <div className="_latest_rice_events_content">
                  <h3 className="_latest_rice_events_title">The presence of basic round-neck t-shirts in your wardrobe</h3>
                  <div className="_latest_rice_events_meta">
                    <div className="_latest_rice_events_meta_item">
                        <FaUserTie className="_latest_rice_events_meta_icon" />
                        <span className="_latest_rice_events_meta_txt">Admin</span>
                    </div>
                    <div className="_latest_rice_events_meta_item">
                        <BsClockFill className="_latest_rice_events_meta_icon" />
                        <span className="_latest_rice_events_meta_txt">4--11--2022</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default LatestEvents