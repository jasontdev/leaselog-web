import "./Layout.css";
import NavBar from "./NavBar.tsx";
import {Outlet, useLoaderData} from "react-router-dom";
import Landing from "../routes/Landing.tsx";

export function Layout() {
  const user = useLoaderData();
  return (
    <div className="layout-container">
      <NavBar user={user}/>
      <div className="route-container">
        {user ? <Outlet /> : <Landing />}
      </div>
    </div>
  )
}