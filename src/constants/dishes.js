import dish1 from "../assets/images/Image 7 (1).svg";
import dish2 from "../assets/images/Image 7 (2).svg";
import dish3 from "../assets/images/Image 7.svg";


const getAvailability = (min, max) =>
  `${Math.floor(Math.random() * (max - min + 1)) + min} Bowls available`;

export const DISHES = [
  {
    name: "Healthy noodle with spinach leaf",
    prices: { S: "20.00 AED", M: "25.00 AED", L: "30.00 AED" },
    oldPrices: { S: "26.00 AED", M: "32.00 AED", L: "38.00 AED" },
    available: getAvailability(10, 30),
    image: dish1,
  },
  {
    name: "Hot spicy fried rice with omelet",
    prices: { S: "22.00 AED", M: "27.00 AED", L: "33.00 AED" },
    oldPrices: { S: "28.00 AED", M: "34.00 AED", L: "40.00 AED" },
    available: getAvailability(8, 25),
    image: dish2,
  },
  {
    name: "Spicy instant noodle with special omelette",
    prices: { S: "21.00 AED", M: "26.00 AED", L: "32.00 AED" },
    oldPrices: { S: "27.00 AED", M: "33.00 AED", L: "39.00 AED" },
    available: getAvailability(12, 28),
    image: dish1,
  },
  {
    name: "Chicken ramen with soft boiled egg",
    prices: { S: "28.00 AED", M: "34.00 AED", L: "40.00 AED" },
    oldPrices: { S: "35.00 AED", M: "42.00 AED", L: "48.00 AED" },
    available: getAvailability(6, 20),
    image: dish2,
  },
  {
    name: "Vegetable hakka noodles",
    prices: { S: "18.00 AED", M: "23.00 AED", L: "28.00 AED" },
    oldPrices: { S: "24.00 AED", M: "29.00 AED", L: "34.00 AED" },
    available: getAvailability(15, 35),
    image: dish3,
  },
  {
    name: "Paneer chilli dry",
    prices: { S: "26.00 AED", M: "31.00 AED", L: "37.00 AED" },
    oldPrices: { S: "32.00 AED", M: "38.00 AED", L: "44.00 AED" },
    available: getAvailability(10, 22),
    image: dish1,
  },
  {
    name: "Butter chicken rice bowl",
    prices: { S: "30.00 AED", M: "36.00 AED", L: "42.00 AED" },
    oldPrices: { S: "38.00 AED", M: "44.00 AED", L: "50.00 AED" },
    available: getAvailability(5, 18),
    image: dish2,
  },
  {
    name: "Garlic prawn fried rice",
    prices: { S: "32.00 AED", M: "38.00 AED", L: "45.00 AED" },
    oldPrices: { S: "40.00 AED", M: "46.00 AED", L: "52.00 AED" },
    available: getAvailability(4, 15),
    image: dish3,
  },
  {
    name: "Mushroom pepper fry",
    prices: { S: "24.00 AED", M: "29.00 AED", L: "35.00 AED" },
    oldPrices: { S: "30.00 AED", M: "36.00 AED", L: "42.00 AED" },
    available: getAvailability(12, 26),
    image: dish1,
  },
  {
    name: "Egg fried noodles",
    prices: { S: "20.00 AED", M: "25.00 AED", L: "30.00 AED" },
    oldPrices: { S: "26.00 AED", M: "32.00 AED", L: "38.00 AED" },
    available: getAvailability(18, 40),
    image: dish1,
  },
  {
    name: "Thai basil chicken stir fry",
    prices: { S: "29.00 AED", M: "35.00 AED", L: "41.00 AED" },
    oldPrices: { S: "36.00 AED", M: "42.00 AED", L: "48.00 AED" },
    available: getAvailability(6, 20),
    image: dish3,
  },
  {
    name: "Cheese corn fried rice",
    prices: { S: "23.00 AED", M: "28.00 AED", L: "34.00 AED" },
    oldPrices: { S: "29.00 AED", M: "35.00 AED", L: "41.00 AED" },
    available: getAvailability(14, 30),
    image: dish1,
  },
];
