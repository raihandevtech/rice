import rice1 from "../../assets/images/products/rice1.jpg";
import rice2 from "../../assets/images/products/rice2.jpg";
import rice3 from "../../assets/images/products/rice3.jpg";

import carrot1 from "../../assets/images/products/carrot1.jpg";
import carrot2 from "../../assets/images/products/carrot2.jpg";
import carrot3 from "../../assets/images/products/carrot3.jpg";

import cocumber1 from "../../assets/images/products/cocumber1.jpg";
import cocumber2 from "../../assets/images/products/cocumber2.jpg";
import cocumber3 from "../../assets/images/products/cocumber3.jpg";

import garlic1 from "../../assets/images/products/garlic1.jpg";
import garlic2 from "../../assets/images/products/garlic2.jpg";
import garlic3 from "../../assets/images/products/garlic3.jpg";

import onion1 from "../../assets/images/products/onion1.jpg";
import onion2 from "../../assets/images/products/onion2.jpg";
import onion3 from "../../assets/images/products/onion3.jpg";

import papaya1 from "../../assets/images/products/papaya1.jpg";
import papaya2 from "../../assets/images/products/papaya2.jpg";
import papaya3 from "../../assets/images/products/papaya3.jpg";

import radish1 from "../../assets/images/products/radish1.jpg";
import radish2 from "../../assets/images/products/radish2.jpg";
import radish3 from "../../assets/images/products/radish3.jpg";

import tomato1 from "../../assets/images/products/tomato1.jpg";
import tomato2 from "../../assets/images/products/tomato2.jpg";
import tomato3 from "../../assets/images/products/tomato3.jpg";
import { StaticImageData } from "next/image";

type status = "in stock" | "out of stock";
type currency = "tk";
type weightType = "kg" | "mon";

export interface price {
  value: number;
  currency: currency;
  weight: weightType;
}

export interface productType {
  title: string;
  image01: StaticImageData | string ;
  image02?: StaticImageData | string ;
  image03?: StaticImageData | string ;
  categorySlug: string;
  slug: string;
  shortDescription: string;
  description: string;
  discount?: number;
  availability: status;
  price: price[]
}

const products: productType[] = [
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: rice1,
      image02: rice2,
      image03: rice3,
      categorySlug: "Rice-29",
      slug: "rice-29",
      discount: 40,
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       
       availability: "in stock",
       price:[
         {
           value: 80,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 3200,
          currency: "tk",
          weight: "mon"
        }
       ] 
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: carrot1,
      image02: carrot2,
      image03: carrot3,
      categorySlug: "Carrot",
      slug: "carrot",
      discount: 32,
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       
       availability: "out of stock",
       price:[
         {
           value: 32,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 1200,
          currency: "tk",
          weight: "mon"
        }
       ]
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: cocumber1,
      image02: cocumber2,
      image03: cocumber3,
      categorySlug: "Cocumber",
      slug: "cocumber",
      discount: 30,
      
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       
       availability: "in stock",
       price:[
         {
           value: 60,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 2400,
          currency: "tk",
          weight: "mon"
        }
       ]
     },

    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: garlic1,
      image02: garlic2,
      image03: garlic3,
      categorySlug: "Garlic",
      slug: "garlic",
      discount: 40,
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       availability: "out of stock",
       price:[
         {
           value: 80,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 3200,
          currency: "tk",
          weight: "mon"
        }
       ]
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: onion1,
      image02: onion2,
      image03: onion3,
      categorySlug: "Onion",
      slug: "onion",
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       availability: "in stock",
       price:[
         {
           value: 72,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 2880,
          currency: "tk",
          weight: "mon"
        }
       ]
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: papaya1,
      image02: papaya2,
      image03: papaya3,
      categorySlug: "Papaya",
      slug: "papaya",
      discount: 20,
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       availability: "out of stock",
       price:[
         {
           value: 80,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 3200,
          currency: "tk",
          weight: "mon"
        }
       ]  
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: radish1,
      image02: radish2,
      image03: radish3,
      categorySlug: "Radish",
      slug: "radish",
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       availability: "in stock",
       price:[
         {
           value: 80,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 3200,
          currency: "tk",
          weight: "mon"
        }
       ]
    },
    {
      title: "The traditional method for cultivating rice is flooding the fields",
      image01: tomato1,
      image02: tomato2,
      image03: tomato3,
      categorySlug: "Tomato",
      slug: "tomato",
      discount: 40,
      shortDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",

      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
       availability: "in stock",
       price:[
         {
           value: 80,
           currency: "tk",
           weight: "kg"
         },
         {
          value: 3200,
          currency: "tk",
          weight: "mon"
        }
       ]
    },

];

const getProducts = (count: number) => {
  const max = count;
  const min = 0;
  return products.slice(min, max);
};

const getProductBySlug = (slug: string | string[] | undefined ) : productType | undefined => products.find((e) => e.slug === slug);

const getAllProducts = () => products;

const productData = {
  getProducts,
  getAllProducts,
  getProductBySlug,
}

export default productData;