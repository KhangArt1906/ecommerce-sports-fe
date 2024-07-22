import { useEffect, useState } from "react";
import Router from "./Router/Router";
import publicRoutes from "./Router/Routes/publicRoutes";
import { getRoutes } from "./Router/Routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  // console.log(allRoutes);

  useEffect(() => {
    const routes = getRoutes();

    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes}></Router>;
}

export default App;
