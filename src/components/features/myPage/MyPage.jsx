import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { user } from "../../../apis/user";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Photo from "../../atoms/Photo";

const MyPage = () => {
  const { data, isLoading, error } = useQuery("user", user);

  const userDetails = data?.data?.response;
  console.log(userDetails);

  return (
    <div className="userProfile-container flex h-screen flex-col items-center">
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
          className="userProfile-image my-2 rounded-full"
        />

        <div className="userProfile-nickName my-2 text-2xl font-bold">
          {userDetails?.nickName}
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
        Edit Profile
      </Button>

      <div className="userProfile-actions flex flex-col items-center justify-center">
        <Button as={Link} to="/userinfo/wishlist/all">
          My Wishlist
        </Button>

        <Button as={Link} to="/userinfo/reviews">
          My Reviews
        </Button>

        <Button as={Link} to="/userinfo/reservations/restaurant">
          My Reservations
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
