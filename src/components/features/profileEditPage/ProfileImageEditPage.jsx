import { useRef, useState } from "react";
import PageTitle from "../../atoms/PageTitle";
import Photo from "../../atoms/Photo";

const ProfileImageEditPage = ({ initImageURL }) => {
  const [image, setImage] = useState(null);
  const fileRef = useRef();
  const [imageURL, setImageURL] = useState(initImageURL);
  const handleOnChangeImage = (e) => {
    const files = e.target.files;
    if (files.length === 0) {
      return;
    }
    setImageURL(URL.createObjectURL(files[0]));
    setImage(files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!image) {
        alert("Please select image");
        return;
    }
    const formData = new FormData();
    formData.append("image", image);

  };

  return (
    <div className={"flex flex-col items-center"}>
      <PageTitle title={"Edit Profile Image"} />
      <input
        type="file"
        id="file"
        onChange={handleOnChangeImage}
        accept=".png, .jpeg, .jpg"
        ref={fileRef}
        hidden={true}
      />
      <Photo
        src={imageURL}
        alt={"profile image"}
        className={"h-40 w-40 rounded-full"}
      />
      <button className={"text-tripKoOrange-500 underline font-semibold"}
          onClick={() => fileRef.current.click()}>Select File</button>
      <button className={"bg-tripKoOrange px-8 rounded-full py-2 font-semibold text-white"} onClick={handleOnSubmit}>
        Change
      </button>
    </div>
  );
};

export default ProfileImageEditPage;
