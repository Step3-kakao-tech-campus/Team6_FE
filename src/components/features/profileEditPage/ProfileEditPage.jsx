import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { user, editUser } from "../../../apis/user";
import InputGroup from "../../molecules/InputGroup";

const ProfileEditPage = () => {
  const { data, isLoading, error } = useQuery("userProfile", user);
  const [formValues, setFormValues] = useState({
    name: "",
    nickName: "",
    email: "",
    nationality: "",
    birthday: "",
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

  useEffect(() => {
    if (data?.data?.response) {
      setFormValues((prevValues) => ({
        ...prevValues,
        name: data.data.response.name || "",
        nickName: data.data.response.nickName || "",
        email: data.data.response.email || "",
        nationality: data.data.response.nationality || "",
        birthday: data.data.response.birthday || "",
      }));
    }
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(formValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="profile-edit-container h-screen w-full">
      <h1>Profile Edit Page</h1>

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
        name="nickName"
        type="text"
        value={formValues.nickName}
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
    </div>
  );
};

export default ProfileEditPage;
