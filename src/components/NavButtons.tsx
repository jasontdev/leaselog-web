import "./NavButtons.css";
import {useNavigate} from "react-router-dom";

export default function NavButtons() {
  const navigate = useNavigate();

  return (<div className="nav-buttons">
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("leases")}>Leases</button>
    <button onClick={() => navigate("payments")}>Payments</button>
    <button onClick={() => navigate("contacts")}>Contacts</button>
  </div>);
}