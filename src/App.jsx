import { useEffect, useState } from "react";
import Router from "./Router/Router";
import publicRoutes from "./Router/Routes/publicRoutes";
import { getRoutes } from "./Router/Routes";
import { useDispatch, useSelector } from "react-redux";
import { get_user_information } from "./Store/Reducers/authReducers";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  // console.log(allRoutes);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(get_user_information());
    }
  }, [token]);

  return <Router allRoutes={allRoutes}></Router>;
}

export default App;
