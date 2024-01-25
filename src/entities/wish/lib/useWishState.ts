import { useState } from "react";

export const useWishState = () => {
  const lsKey = "wishList";

  const loadWishList = () => {
    const lsWishList = localStorage.getItem(lsKey);

    if (!lsWishList) return [];

    return JSON.parse(lsWishList);
  };

  const [wishList, setWishList] = useState(loadWishList());

  const saveItem = (item: any) => {
    const newWishList = [...wishList, item];

    setWishList(newWishList);
    localStorage.setItem(lsKey, JSON.stringify(newWishList));
  };

  return {
    wishList,
    saveItem,
  };
};
