import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import Photo from "../../atoms/Photo";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const MyPageTemplate = ({ userDetails }) => {
  return (
    <>
      <div className="userProfile-navigation mt-4 flex">
        <Button as={Link} to="/" className="mb-4">
          <AiOutlineHome size={24} />
        </Button>
        <Button as={Link} to="/userinfo/settings" className="mb-4 ml-4">
          <IoSettingsOutline size={24} />
        </Button>
      </div>

      <div className="userProfile-infoSection flex flex-col items-center justify-center">
        <Photo
          src={"https://picsum.photos/230"}
          className="userProfile-image my-2 h-60 w-60 rounded-full object-cover"
        />
        <div className="userProfile-nickname my-2 text-2xl font-bold">
          {userDetails?.nickname}
        </div>
        <div className="userProfile-email mb-2">
          <span className="text-gray-400">email: {userDetails?.email}</span>
        </div>
      </div>

      <Button
        as={Link}
        to="/userinfo/edit"
        className="userProfile-editButton mb-2 text-lg text-[#FF4800] underline underline-offset-4"
      >
        View / Edit Profile
      </Button>

      <div className="userProfile-actions mt-4 flex flex-col items-center justify-center">
        <Button
          as={Link}
          to="/userinfo/wishlist/all"
          className="mb-2 flex h-10 w-60 items-center justify-center rounded-md shadow-md"
        >
          My Wishlist
        </Button>
        <Button
          as={Link}
          to="/userinfo/reviews"
          className="mb-2 flex h-10 w-60 items-center justify-center rounded-md shadow-md"
        >
          My Reviews
        </Button>
        <Button
          as={Link}
          to="/userinfo/reservations/restaurant"
          className="mb-2 flex h-10 w-60 items-center justify-center rounded-md shadow-md"
        >
          My Reservations
        </Button>
      </div>
    </>
  );
};

export default MyPageTemplate;
