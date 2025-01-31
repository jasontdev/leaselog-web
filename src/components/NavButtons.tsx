import {useNavigate} from "react-router-dom";
import {Button} from "./ui/button.tsx";

export default function NavButtons() {
  const navigate = useNavigate();

  return (<div>
    <Button onClick={() => navigate("/")}>Home</Button>
    <Button onClick={() => navigate("leases")}>Leases</Button>
    <Button onClick={() => navigate("payments")}>Payments</Button>
    <Button onClick={() => navigate("contacts")}>Contacts</Button>
  </div>);
}