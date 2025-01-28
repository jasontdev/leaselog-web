import {Navigate} from "react-router-dom";
import {ClientPrincipal} from "../user.ts";

type ProtectedRouteProps = {
  user: ClientPrincipal | null;
  authenticating: boolean;
  children: React.ReactNode;
}

function ProtectedRoute({user, authenticating, children}: ProtectedRouteProps) {
  if (!user && !authenticating) {
    return (<Navigate to="/login"/>);
  }

  return children;
}

export default ProtectedRoute;