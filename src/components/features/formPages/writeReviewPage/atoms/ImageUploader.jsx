import { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import HorizontalListSection from "../../../carousel/HorizontalListSection";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "../../../../atoms/Button";
import Photo from "../../../../atoms/Photo";
import {IoMdClose} from "react-icons/io";

/**
 * 이미지를 업로드하는 컴포넌트
 * @param  setFile {function} 파일을 업로드하는 함수
 * @param  file {Array<binary>} 업로드한 파일
 * @param  multiple {boolean} 여러개의 파일을 업로드할 수 있는지 여부
 * @returns {JSX.Element}
 * @constructor
 */
const ImageUploader = ({ setFile, file, multiple }) => {
  const [preview, setPreview] = useState(null);
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
    if (file) {
      if (multiple) {
        const preview = Array.from(file).map((f, index) => {
          return (
            <div className={"image-wrapper relative h-40 w-40"}>
              <Button
                as={"button"}
                className={"delete-button absolute right-2 top-2"}
                onClick={() => {
                  const newFile = Array.from(file);
                  newFile.splice(index, 1);
                  setFile(newFile);
                }}
              >
                  <IoMdClose color={"#ff7000"} size={30} />
              </Button>

              <Photo
                key={index}
                className="h-40 w-40 object-cover"
                src={URL.createObjectURL(f)}
                alt="preview"
              />
            </div>
          );
        });
        setPreview(preview);
      } else {
        setPreview(
          <div className={"image-wrapper relative h-40 w-40"}>
            <Button
              as={"button"}
              className={"delete-button absolute right-2 top-2"}
              onClick={() => setFile(null)}
              aria-label={"delete-image-button"}
            >
              <AiOutlineCloseCircle color={"#ff0000"} size={20} />
            </Button>
            <Photo
              className="h-full w-full object-cover"
              src={URL.createObjectURL(file)}
              alt="preview"
            />
          </div>,
        );
      }
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

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
          <button
            onClick={handleFileButtonClick}
            className={
              "relative flex h-40 w-40 items-center justify-center bg-gray-300"
            }
            aria-label="image-upload-button"
          >
            <BiPlus color={"#000000"} size={50} />
          </button>
        </div>
      </HorizontalListSection>
    </aside>
  );
};
export default ImageUploader;
