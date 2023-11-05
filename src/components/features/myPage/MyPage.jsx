import { useQuery } from "react-query";
import { user } from "../../../apis/user";
import MyPageTemplate from "./MyPageTemplate";

const MyPage = () => {
  const { data, isLoading, error } = useQuery("user", user);

  const userDetails = data?.data?.response;
  // console.log(userDetails);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="userProfile-container flex h-screen w-full flex-col items-center justify-center overflow-y-auto pb-20">
      <MyPageTemplate userDetails={userDetails} />
    </div>
  );
};

export default MyPage;
