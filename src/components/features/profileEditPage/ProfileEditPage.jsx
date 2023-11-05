import { useCallback, useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { user, editUser } from "../../../apis/user";
import InputGroup from "../../molecules/InputGroup";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Button from "../../atoms/Button";

const ProfileEditPage = () => {
  const { data, isLoading, error } = useQuery("userProfile", user);
  const [formValues, setFormValues] = useState({
    name: "",
    nickname: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const mutation = useMutation((newData) => editUser(newData), {
    onSuccess: () => {
      setSuccessMessage("Profile updated successfully!");
    },
    onError: (error) => {
      setErrorMessage(
        error.message || "An error occurred while updating the profile.",
      );
    },
  });

  // 별도의 validation 함수를 만들어서 사용할 수도 있음
  const emailValidation = yup
    .string()
    .required("Email is required.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    );

  const nameValidation = yup
    .string()
    .required("Name is required.")
    .matches(
      /^[a-zA-Z]+$/,
      "Name must contain at least 1 letter and only alphabetic characters are allowed.",
    );

  const nicknameValidation = yup
    .string()
    .required("Nickname is required.")
    .matches(
      /^(?=.*[a-zA-Z])[a-zA-Z\d]+$/,
      "Nickname must be at least 1 character long and contain at least one letter.",
    );

  const schema = yup.object().shape({
    name: nameValidation,
    nickname: nicknameValidation,
    email: emailValidation,
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   mutation.mutate(formValues);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data?.data?.response) {
      reset(data.data.response);
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    mutation.mutate(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="profile-edit-page width-flex-layout flex h-screen items-center justify-center p-8">
      <div className="profile-edit-container flex w-full flex-col justify-center gap-4">
        <h1 className="flex justify-between">
          <span className="text-4xl font-bold text-tripKoOrange">
            Edit My Profile
          </span>
          <Button as={Link} to="/" className="mt-2">
            <AiOutlineHome size={24} />
          </Button>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup
            label="Name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            errorMsg={errorMessage}
          />
          <InputGroup
            label="Nickname"
            name="nickname"
            type="text"
            value={formValues.nickname}
            onChange={handleChange}
            errorMsg={errorMessage}
          />
          <InputGroup
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            errorMsg={errorMessage}
          />

          <Button
            className="mt-4 w-full rounded-full bg-tripKoOrange p-2 text-xl font-bold text-white"
            type="submit"
          >
            Save Changes
          </Button>
        </form>
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default ProfileEditPage;
