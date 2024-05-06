import { imageProduct as image } from "../pages/@assets/image";
export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2000, // Adjust the delay (in milliseconds) as needed
    disableOnInteraction: false, // Allow autoplay to continue even when user interacts
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

export const data = [
  {
    name: "Aluminium Alloy",
    image: image[0],
    url: "aluminium-alloy",
  },
  {
    name: "Titanium Alloy",
    image: image[1],
    url: "titanium-alloy",
  },
  {
    name: "Stainless steel",
    image: image[2],
    url: "stainless-steel",
  },
  {
    name: "Copper Alloy",
    image: image[3],
    url: "copper-alloy",
  },
  {
    name: "Nickel Alloy",
    image: image[4],
    url: "nickel-alloy",
  },
];
