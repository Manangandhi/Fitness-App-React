// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// let tempTimer;

const useAuth = () => {
  const user = useSelector((state) => state?.auth);
  const isLoggedIn = user?.token ? true : false;
  return { isLoggedIn };
};

export default useAuth;
