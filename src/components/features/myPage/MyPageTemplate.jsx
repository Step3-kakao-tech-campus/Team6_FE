import Button from "../../atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import Photo from "../../atoms/Photo";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const MyPageTemplate = ({ userDetails }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="userProfile-navigation mt-4 flex">
        <Button as={Link} to="/" className="mb-4" aria-label="home-button">
          <AiOutlineHome size={24} />
        </Button>
        <Button
          as={Link}
          to="/userinfo/settings"
          className="mb-4 ml-4"
          aria-label="settings-button"
        >
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
        aria-label="edit-profile-button"
      >
        View / Edit Profile
      </Button>

      <div className="userProfile-actions mt-4 flex flex-col items-center justify-center">
        <Button
          as={Link}
          to="/userinfo/wishlist/all"
          className="mb-2 flex h-10 w-60 items-center justify-center rounded-md shadow-md"
          aria-label="wishlist-button"
        >
          My Wishlist
        </Button>
        <Button
          as={Link}
          to="/userinfo/reservations/restaurant"
          className="mb-2 flex h-10 w-60 items-center justify-center rounded-md shadow-md"
          aria-label="reservation-list-button"
        >
          My Reservations
        </Button>
        <Button
          as={Link}
          to="/userinfo/reviews/all"
          className="mb-2 flex h-10 w-60 items-center justify-center rounded-md shadow-md"
          aria-label="review-list-button"
        >
          My Reviews
        </Button>
        <Button
          as="button"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
            window.location.reload();
          }}
          className="mb-2 flex h-10 w-60 items-center justify-center rounded-md shadow-md"
          aria-label="logout-button"
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default MyPageTemplate;
