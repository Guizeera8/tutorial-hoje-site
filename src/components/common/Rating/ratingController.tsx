import { useState, useEffect } from "react";

import { useModalStore } from "@/store/modal";
import { PRICE_DEFAULT } from "@/config";

export const useRatingController = () => {
  const { open, handleSetOpen } = useModalStore();
  const [rating, setRating] = useState(-1);

  const handleStarClick = (starIndex: number) => {
    if (rating === starIndex) {
      setRating(starIndex - 1);
    } else {
      setRating(starIndex);
    }
  };

  useEffect(() => {
    if (open || rating < 0) return;

    const timeoutId = setTimeout(() => {
      handleSetOpen(!open);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [handleSetOpen, open, rating]);

  return {
    open,
    rating,
    handleStarClick,
  };
};

export default useRatingController;
