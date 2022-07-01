import Image from "next/image"
import tomato from "../assets/images/products/tomato1.jpg"
import Button from "./Button"
import ShareLink from "./ShareLink"

const Banner = () => {
  return (
    <section className="_banner_rice_section">
      <div className="_banner_rice_wrap">
        <div className="container">
          <div className="_banner_rice_main">
            <div className="_banner_rice_main_img">
            <Image src={tomato}  layout="fill" objectFit="cover" className="_img" />
            </div>
            <div className="_banner_rice_main_content">
              <h1 className="_banner_rice_main_offer"><span className="_color">50%</span> Save</h1>
              <h2 className="_banner_rice_main_title">Special discount for you </h2>
              <p className="_banner_rice_main_desc">The presence of basic round-neck t-shirts in your wardrobe is the
               key to helping you have more interesting outfits without needing too man</p>
               <ShareLink />
              <Button href="#0" size="large" text="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner