import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Layout} from "./components/Layout.tsx";
import Leases from "./routes/Leases.tsx";
import Payments from "./routes/Payments.tsx";
import Contacts from "./routes/Contacts.tsx";
import Home from "./routes/Home.tsx";
import {getLeases} from "./data.ts";
import {getUserInfo} from "./user.ts";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getUserInfo,
    element: <Layout/>,
    children: [
      {
        element: <Home/>,
        index: true
      },
      {
        path: "leases",
        loader: getLeases,
        element: <Leases/>,
      },
      {
        path: "payments",
        element: <Payments/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
