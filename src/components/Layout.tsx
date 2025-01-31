import NavBar from "./NavBar.tsx";
import {Outlet, useLoaderData} from "react-router-dom";
import Landing from "../routes/Landing.tsx";

export function Layout() {
  const user = useLoaderData();
  return (
    <div>
      <NavBar user={user}/>
      <div>
        {user ? <Outlet /> : <Landing />}
      </div>
    </div>
  )
}