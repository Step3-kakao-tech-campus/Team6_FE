import { useEffect, useRef, useState } from "react";
import { BiImage } from "react-icons/bi";
import HorizontalListSection from "../../../carousel/HorizontalListSection";

const ImageUploader = ({ setFile, file }) => {
  const [previewURL, setPreviewURL] = useState("");
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

  useEffect(() => {
    if (file !== "")
      //처음 파일 등록하지 않았을 때를 방지
      setPreview(
        <img
          className="img_preview h-40 w-40 object-contain"
          src={previewURL}
          alt="preview of the file you are about to upload"
        />,
      );
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewURL]);

  const handleFileOnChange = (event) => {
    //파일 불러오기
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = (e) => {
      setFile(file);
      setPreviewURL(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleFileButtonClick = (e) => {
    //버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };

  return (
    <aside className="side">
      <input
        ref={fileRef}
        hidden={true}
        id="file"
        type="file"
        onChange={handleFileOnChange}
      />
      <HorizontalListSection hideButton={true}>
        <div className="preview-wrapper">{preview}</div>
        <button
          onClick={handleFileButtonClick}
          className={"flex h-40 w-40 items-center justify-center bg-gray-300"}
          aria-label="image-upload-button"
        >
          <BiImage color={"#000000"} size={50} />
        </button>
      </HorizontalListSection>
    </aside>
  );
};

export default ImageUploader;
