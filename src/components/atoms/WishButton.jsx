import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { wish } from "../../apis/wish";

const WishButton = ({ filter, id, initialIsWished, onWishChange }) => {
  const [isWished, setIsWished] = useState(initialIsWished);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => wish(filter, id, !isWished), {
    onSuccess: () => {
      setIsWished(!isWished);
      if (onWishChange) {
        onWishChange(!isWished);
      }
      queryClient.refetchQueries("wishlist");
    },
  });

  const handleWishButtonClick = (event) => {
    event.stopPropagation();
    mutate();
  };

  return (
    <button onClick={handleWishButtonClick}>
      <AiFillHeart
        size={20}
        color={isWished ? "#ff6b6b" : "#e4e5e9"}
        style={{ display: "inline-block", fontSize: "16px" }}
      />
    </button>
  );
};

export default WishButton;
