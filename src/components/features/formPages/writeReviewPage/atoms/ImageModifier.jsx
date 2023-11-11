import { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import HorizontalListSection from "../../../carousel/HorizontalListSection";
import Button from "../../../../atoms/Button";
import Photo from "../../../../atoms/Photo";
import {IoMdClose} from "react-icons/io";

/**
 * 이미지를 업로드하는 컴포넌트
 * @param  setFile {function} 파일을 업로드하는 함수
 * @param  file {Array<binary>} 업로드한 파일
 * @param  multiple {boolean} 여러개의 파일을 업로드할 수 있는지 여부
 * @param setDeletedImage {function} 삭제된 이미지를 저장하는 함수
 * @param initImage {Array<string>} 초기에 이미지를 불러올 때 사용하는 함수
 * @returns {JSX.Element}
 * @constructor
 */
const ImageModifier = ({
  setFile,
  file,
  multiple,
  setDeletedImage,
  initImage,
}) => {
  const [preview, setPreview] = useState(null);
  const [imageOnServer, setImageOnServer] = useState(initImage);

  const fileRef = useRef();

  const handleFileOnChange = (e) => {
    const files = e.target.files;
    if (files.length === 0) {
      return;
    }
    if (multiple) {
      setFile([...file, ...files]);
    } else {
      setFile(files[0]);
    }
  };

  useEffect(() => {
    let stagedImageURL = [];
    if (file) {
      stagedImageURL = file.map((f) => URL.createObjectURL(f));
    } else {
      stagedImageURL = [];
    }
    const generatePreview = () => {
      const mergedURL = [...imageOnServer, ...stagedImageURL];
      const newPreview = mergedURL.map((url, index) => {
        return (
          <div className={"image-wrapper relative h-40 w-40"} key={index}>
            <Button
              as={"button"}
              className={"delete-button absolute right-2 top-2 bg-white rounded-full opacity-70"}
              onClick={() => {
                // 이미지를 삭제할 때 이미지가 서버에 있는 이미지인지 staged 이미지인지 구분해서 삭제
                if (index < imageOnServer.length) {
                  setDeletedImage((prev) => [...prev, imageOnServer[index]]);
                  const newImageOnServer = Array.from(imageOnServer);
                  newImageOnServer.splice(index, 1);
                  setImageOnServer(newImageOnServer);
                } else {
                  const newFile = Array.from(file);
                  newFile.splice(index - imageOnServer.length, 1);
                  setFile(newFile);
                }
              }}
              aria-label={"delete-image-button"}
            >
              <IoMdClose color={"#ff7000"} size={30} />
            </Button>

            <Photo
              key={index}
              className="h-40 w-40 object-cover"
              src={url}
              alt="preview"
            />
          </div>
        );
      });
      setPreview(newPreview);
    };
    generatePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, imageOnServer]);

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
        accept={".jpg, .jpeg, .png"}
        multiple={multiple ? "multiple" : ""}
      />
      <HorizontalListSection hideButton={true}>
        <div className="preview-wrapper flex gap-2">
          {preview}
          <Button
              as={"button"}
            onClick={handleFileButtonClick}
            className={
              "relative flex h-40 w-40 items-center justify-center bg-gray-300"
            }
            aria-label="image-upload-button"
          >
            <BiPlus color={"#000000"} size={50} />
          </Button>
        </div>
      </HorizontalListSection>
    </aside>
  );
};
export default ImageModifier;
