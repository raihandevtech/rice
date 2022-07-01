
import papaya1 from "../../assets/images/products/papaya1.jpg";
import papaya2 from "../../assets/images/products/papaya2.jpg";
import papaya3 from "../../assets/images/products/papaya3.jpg";

import radish1 from "../../assets/images/products/radish1.jpg";
import radish2 from "../../assets/images/products/radish2.jpg";
import radish3 from "../../assets/images/products/radish3.jpg";

import tomato1 from "../../assets/images/products/tomato1.jpg";
import tomato2 from "../../assets/images/products/tomato2.jpg";
import tomato3 from "../../assets/images/products/tomato3.jpg";

export interface OfferProductType {
  title: string;
  image01: any;
  image02?: any;
  image03?: any;
  categorySlug: string;
  slug: string;
  description: string;
  discount?: number;

}

const products: OfferProductType[] = [
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: papaya1,
      image02: papaya2,
      image03: papaya3,
      categorySlug: "Papaya",
      slug: "papaya",
      discount: 38,
      description:
        "The presence of basic round-neck t-shirts in your wardrobe is the key to helping you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear! Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. In addition, the product also contains 5% spandex - a type of fiber that helps stretch, elastic effectively suitable to wear to many environments, even when exercising <br><br><br> The presence of clothes Basic round neck t-shirt in your wardrobe is the key to help you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear!<br><br><br>Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. Besides, the product also contains 5% spandex - a type of fiber that effectively stretches and elastic, suitable for wearing in many environments, even when exercising.",
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: radish1,
      image02: radish2,
      image03: radish3,
      categorySlug: "Radish",
      slug: "radish",
      discount: 55,
      description:
        "The presence of basic round-neck t-shirts in your wardrobe is the key to helping you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear! Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. In addition, the product also contains 5% spandex - a type of fiber that helps stretch, elastic effectively suitable to wear to many environments, even when exercising <br><br><br> The presence of clothes Basic round neck t-shirt in your wardrobe is the key to help you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear!<br><br><br>Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. Besides, the product also contains 5% spandex - a type of fiber that effectively stretches and elastic, suitable for wearing in many environments, even when exercising.",
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: tomato1,
      image02: tomato2,
      image03: tomato3,
      categorySlug: "Tomato",
      slug: "tomato",
      discount: 40,
      description:
        "The presence of basic round-neck t-shirts in your wardrobe is the key to helping you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear! Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. In addition, the product also contains 5% spandex - a type of fiber that helps stretch, elastic effectively suitable to wear to many environments, even when exercising <br><br><br> The presence of clothes Basic round neck t-shirt in your wardrobe is the key to help you have more interesting outfits without needing too many items. Basic round neck cotton women's t-shirt is a handy weapon for women in everyday wear!<br><br><br>Simple design, convenient shape of PPN4502 T-shirt. Why can you combine with just 1 basic women's t-shirt with 10 different sets? The answer lies in their very simplicity. The simpler it is, the easier it is for you to mix & match with different items. PPM4502 Women's T-shirt has a simple round neck design that is gentle on the skin. Fox sleeves, shirt form is not fussy, very easy to wear with many different bodies. More specifically, the color of this round-neck women's t-shirt is also very elegant, neutral, and smooth. The simplicity from design, seam to color palette helps women not to hesitate too much when choosing. 95% cotton material is strictly processed, modern process and technology should give the shirt a comfortable, soft, cool feeling to the touch. Along with that, the Yody round neck cotton women's T-shirt has a very good ability to darken sweat, so the wearer does not feel the feeling of being stuck on the skin when sweating in the summer. Besides, the product also contains 5% spandex - a type of fiber that effectively stretches and elastic, suitable for wearing in many environments, even when exercising.",
    },

];

const offerProductData = (count: number) => {
  const max = count;
  const min = 0;
  return products.slice(min, max);
};

export default offerProductData;