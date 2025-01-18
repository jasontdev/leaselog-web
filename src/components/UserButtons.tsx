import {ClientPrincipal} from "../user.ts";

type RightButtonProps = {
  user: ClientPrincipal | null;
}

export default function UserButtons({user}: RightButtonProps) {
  function logOut() {
    location.href = "/.auth/logout";
  }

  function logIn() {
    location.href = "/.auth/login/aad";
  }

  return (
    <div>
      {user? <button onClick={() => {logOut()}}>Logout</button> : <button onClick={() => logIn()}>Login</button>}
    </div>
  )
}