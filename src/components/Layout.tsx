import {ReactNode} from "react";
import "./Layout.css";
import NavBar from "./NavBar.tsx";
import {ClientPrincipal} from "../user.ts";

type LayoutProps = {
  children: ReactNode;
  user: ClientPrincipal | null;
}

export function Layout({children, user}: LayoutProps) {
  return (
    <div className="layout-container">
      <NavBar user={user}/>
      <div className="route-container">
          {children}
      </div>
    </div>
  )
}