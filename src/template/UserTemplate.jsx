import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../Pages/Loading/Loading";

const UserTemplate = () => {
  const { isLoading } = useSelector((state) => state.loading);
  return (
    <>
      {isLoading ? <Loading /> : <Fragment></Fragment>}
      <div className="flex flex-col min-h-screen justify-between ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default UserTemplate;
