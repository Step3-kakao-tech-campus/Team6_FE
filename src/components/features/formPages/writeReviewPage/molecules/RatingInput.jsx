import { useState } from "react";
import { getStarOn } from "../atoms/utils";
import StarInput from "../atoms/StarInput";

const RatingInput = ({ score, setScore }) => {
  const [array] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="rating-input flex justify-center">
      {array.map((item) => {
        return (
          <>
            <StarInput
              on={getStarOn(score, item)}
              setValue={setScore}
              index={item}
              key={item}
            />
          </>
        );
      })}
    </div>
  );
};

export default RatingInput;
