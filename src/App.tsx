import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Layout} from "./components/Layout.tsx";
import Leases from "./routes/Leases.tsx";
import Payments from "./routes/Payments.tsx";
import Contacts from "./routes/Contacts.tsx";
import Home from "./routes/Home.tsx";

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

const router = createBrowserRouter([
  {
    path: "/",
    loader: getUserInfo,
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "leases",
        element: <Leases />
      },
      {
        path: "payments",
        element: <Payments />
      },
      {
        path: "contacts",
        element: <Contacts />
      }
    ]
  }
])

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
