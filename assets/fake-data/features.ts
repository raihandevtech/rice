import feature1 from "../images/features/feature1.jpg";
import feature2 from "../images/features/feature2.jpg";
import feature3 from "../images/features/feature3.jpg";
import feature4 from "../images/features/feature4.jpg";
import feature5 from "../images/features/feature5.jpg";



export interface FeaturesType {
    title: string;
    description?: string;
    image: any;
    slug: string;

}

export const features: FeaturesType[] = [
    {
        title: "The traditional method for rice",
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
        image: feature1,
        slug: "rice-29",
    },
    {
        title: "As a cereal grain, domesticated rice is the most",
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
        image: feature2,
        slug: "tomato",
    },
    {
        title: "It is a long established fact",
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
        image: feature3,
        slug: "carrot",
    },
    {
        title: "Rice, a monocot, is normally grown as an annual plant,",
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
        image: feature4,
        slug: "rice-29",

    },
    {
        title: "While flooding is not mandatory for the",
        description: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
        image: feature5,
        slug: "tomato",
    },

];