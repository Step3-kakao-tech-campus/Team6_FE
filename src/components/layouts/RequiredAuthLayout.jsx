import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RequiredAuthLayout;
