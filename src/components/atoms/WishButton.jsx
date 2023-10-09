import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { wish } from "../../apis/wish";

const WishButton = ({ filter, id, initialIsWished }) => {
  const [isWished, setIsWished] = useState(initialIsWished);

  const handleWishButtonClick = async () => {
    const newWishState = !isWished;

    await wish(filter, id, newWishState);
    setIsWished(newWishState);
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
