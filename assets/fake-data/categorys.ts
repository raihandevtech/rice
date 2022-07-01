import { StaticImageData } from "next/image";
import carrot from "../images/category/carrot.png";
import corn from "../images/category/corn.png";
import cucumber from "../images/category/cucumber.png";
import eggplant from "../images/category/eggplant.png";
import garlic from "../images/category/garlic.png";
import onion from "../images/category/onion.png";
import potato from "../images/category/potato.png";
import radish from "../images/category/radish.png";
import rice from "../images/category/rice.png";
import tomato from "../images/category/tomato.png";
import wheat from "../images/category/wheat.png";
import lemon from "../images/category/lemon.png";
import papaya from "../images/category/papaya.png";


export interface CategoryType {
    display: string;
    categorySlug: string;
    categoryImg: string | StaticImageData;

}


export const category: CategoryType[] = [
    {
        display: "potato",
        categorySlug: "potato",
        categoryImg: potato
    },
    {
        display: "radish",
        categorySlug: "radish",
        categoryImg: radish
    },
    {
        display: "rice - 28",
        categorySlug: "rice",
        categoryImg: rice
    },
    {
        display: "tomato",
        categorySlug: "tomato",
        categoryImg: tomato
    },
    {
        display: "wheat",
        categorySlug: "wheat",
        categoryImg: wheat
    },
    {
      display: "carrot",
      categorySlug: "carrot",
      categoryImg: carrot
    },
    {
        display: "corn",
        categorySlug: "corn",
        categoryImg: corn
    },
    {
        display: "cucumber",
        categorySlug: "cucumber",
        categoryImg: cucumber
    },
    {
        display: "eggplant",
        categorySlug: "eggplant",
        categoryImg: eggplant
    },
    {
        display: "garlic",
        categorySlug: "garlic",
        categoryImg: garlic
    },
    {
        display: "onion",
        categorySlug: "onion",
        categoryImg: onion
    },
    {
        display: "lemon",
        categorySlug: "lemon",
        categoryImg: lemon
    },
    {
        display: "papaya",
        categorySlug: "papaya",
        categoryImg: papaya
    },
    {
        display: "potato",
        categorySlug: "potato",
        categoryImg: potato
    },
    {
        display: "radish",
        categorySlug: "radish",
        categoryImg: radish
    },
    {
        display: "rice - 28",
        categorySlug: "rice",
        categoryImg: rice
    },
    {
        display: "tomato",
        categorySlug: "tomato",
        categoryImg: tomato
    },
    {
        display: "wheat",
        categorySlug: "wheat",
        categoryImg: wheat
    },
    {
      display: "carrot",
      categorySlug: "carrot",
      categoryImg: carrot
    },
    {
        display: "corn",
        categorySlug: "corn",
        categoryImg: corn
    },
    {
        display: "cucumber",
        categorySlug: "cucumber",
        categoryImg: cucumber
    },
    {
        display: "eggplant",
        categorySlug: "eggplant",
        categoryImg: eggplant
    },
    {
        display: "garlic",
        categorySlug: "garlic",
        categoryImg: garlic
    },
    {
        display: "onion",
        categorySlug: "onion",
        categoryImg: onion
    },
    {
        display: "lemon",
        categorySlug: "lemon",
        categoryImg: lemon
    },
    {
        display: "papaya",
        categorySlug: "papaya",
        categoryImg: papaya
    },
  ];

export  const getCategorys = (count: number) => {
    const max = count;
    const min = 0;
    return category.slice(min, max);
};
  
export default category;