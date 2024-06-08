// HalfCircleCarousel.tsx
"use client";
import React from "react";

import MenuItem from "./MenuItem";

import CircleComponent from "./CircleComponent";
import HalfCircleCompThree from "./HalfCircleCompThree";

interface HalfCircleCarouselProps {
  search?: string | null;
}

interface MenuItem {
  id: string;
  name: string;
  image: string;
  link: string;
  itemsCount: number;
  color: string;
}
// restruant menu items
const items: MenuItem[] = [
  {
    id: "0",
    name: `Breakfast`,
    image: "/breakfast.png",
    link: "/breakfast",
    itemsCount: 5,
    color: "#D6B969",
  },
  {
    id: "1",
    name: `Burgers <span class="text-base">&</span> Sliders`,
    image: "/burger.png",
    link: "/burger",
    itemsCount: 17,
    color: "#D6B969",
  },
  {
    id: "2",
    name: `Appetizers`,
    image: "/appetizers.png",
    link: "/appetizers",
    itemsCount: 5,
    color: "#D6B969",
  },
  {
    id: "3",
    name: "On The Oven",
    image: "/on_the_oven.png",
    link: "/on_the_oven",
    itemsCount: 3,
    color: "#D6B969",
  },
  {
    id: "4",
    // name: `Burger <span class="text-base">&</span> Sliders`,
    name: `Soups`,
    image: "/soups.png",
    link: "/soups",
    itemsCount: 2,
    color: "#D6B969",
  },
  {
    id: "5",
    name: "Mains",
    image: "/mains.png",
    link: "/mains",
    itemsCount: 9,
    color: "#D6B969",
  },
  {
    id: "6",
    name: "Fries",
    image: "/fries.png",
    link: "/fries",
    itemsCount: 7,
    color: "#D6B969",
  },
  {
    id: "7",
    name: "Soft Drinks",
    image: "/soft_drinks.png",
    link: "/soft_drinks",
    itemsCount: 7,
    color: "#D6B969",
  },

  {
    id: "8",
    name: "salads",
    image: "/salads.png",
    link: "/salads",
    itemsCount: 2,
    color: "#D6B969",
  },
  {
    id: "9",
    name: "Desserts",
    image: "/desserts.png",
    link: "/desserts",
    itemsCount: 5,
    color: "#D6B969",
  },
  {
    id: "10",
    name: "Hot Drinks",
    image: "/hot_drinks.png",
    link: "/hot_drinks",
    itemsCount: 4,
    color: "#D6B969",
  },
  {
    id: "11",
    name: "Cold Drinks",
    image: "/cold_drinks.png",
    link: "/cold_drinks",
    itemsCount: 3,
    color: "#D6B969",
  },

  {
    id: "12",
    name: "Mocktails",
    image: "/mocktails.png",
    link: "/mocktails",
    itemsCount: 10,
    color: "#D6B969",
  },
  {
    id: "13",
    name: "Tea",
    image: "/Tea.png",
    link: "/Tea",
    itemsCount:3,
    color: "#D6B969",
  }
];

const HalfCircleCarousel: React.FC<HalfCircleCarouselProps> = ({ search }) => {
  console.log(search);
  // return <CircleComponent items={items} />;

  return <CircleComponent items={items} food={search} />;
};

export default HalfCircleCarousel;
