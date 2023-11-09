import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button
      className={"button-back absolute left-4"}
      onClick={() => navigate(-1)}
      aria-label="button-back"
    >
      <AiOutlineLeft size={30} />
    </button>
  );
};

export default ButtonBack;
