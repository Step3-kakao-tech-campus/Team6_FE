import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import UserAvatar from "../../atoms/UserAvatar";
import { user } from "../../../apis/user";

const MyPage = () => {
  const { data, isLoading, error } = useQuery("user", user);

  const userDetails = data?.data?.response;
  console.log(userDetails);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button as={Link} to="/" className="mb-4">
        Home
      </Button>

      <div>
        <UserAvatar
          image={"https://picsum.photos/230"}
          className="rounded-full"
        />
        <div className="text-lg font-bold">{userDetails?.nickName}</div>
        <div>{userDetails?.name}</div>
        <div>{userDetails?.email}</div>
      </div>

      <Button as={Link} to="/my-page/edit">
        Edit Profile
      </Button>

      <div className="flex flex-col items-center justify-center">
        <Button as={Link} to="/userinfo/wishlist/all">
          Wishlist
        </Button>
        <Button as={Link} to="/userinfo/reservations/restaurant">
          My Reservations
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
