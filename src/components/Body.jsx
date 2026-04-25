import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // we are using useSelector to get the user data from the store
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if(userData) return; // if we already have user data in the store, then we don't need to fetch it again
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  //if we don't use useEffect here, then we will have infinite loop of fetchUser function because every time we dispatch addUser,
  //  the component will re-render and call fetchUser again and again.
  // So we need to use useEffect to call fetchUser only once when the component mounts.
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
