import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RequiredAuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RequiredAuthLayout;
