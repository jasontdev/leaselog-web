import UserButtons from "./UserButtons.tsx";
import {ClientPrincipal} from "../user.ts";
import NavButtons from "./NavButtons.tsx";

type TopBarProps = {
  user: ClientPrincipal | null;
}

export default function NavBar({user}: TopBarProps) {
  if (!user) {
    return (
      <nav>
        <div>LeaseLog</div>
        <UserButtons user={user}/>
      </nav>
    );
  }

  return (
    <nav>
      <div>LeaseLog</div>
      <NavButtons/>
      <UserButtons user={user}/>
    </nav>
  )
}