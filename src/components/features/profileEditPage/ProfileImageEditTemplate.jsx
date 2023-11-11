import { useContext, useRef, useState } from "react";
import PageTitle from "../../atoms/PageTitle";
import Photo from "../../atoms/Photo";
import { uploadUserImage } from "../../../apis/user";
import { ModalContext } from "../../../App";

const ProfileImageEditTemplate = ({ initImageURL }) => {
  const [image, setImage] = useState(null);
  const fileRef = useRef();
  const [imageURL, setImageURL] = useState(initImageURL);
  const [isUploading, setIsUploading] = useState(false);

  const { hide } = useContext(ModalContext);
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
    setIsUploading(true);

    uploadUserImage(image)
      .then((res) => {
        setIsUploading(false);
        alert(res);
        window.location.reload();
        hide();
      })
      .catch((e) => {
        setIsUploading(false);
        alert("Failed to upload image due to server error");
      });
  };

  return (
    <div className={"flex flex-col items-center bg-white pb-4"}>
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
      <button
        className={"font-semibold text-tripKoOrange-500 underline"}
        onClick={() => fileRef.current.click()}
      >
        Select File
      </button>
      <button
        className={
          "rounded-full bg-tripKoOrange px-8 py-2 font-semibold text-white"
        }
        onClick={handleOnSubmit}
        disabled={isUploading}
      >
        Change
      </button>
    </div>
  );
};

export default ProfileImageEditTemplate;
