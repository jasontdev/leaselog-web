import './App.css'
import {useEffect, useState} from "react";
import {ClientPrincipal} from "./user.ts";
import {Route, Routes} from "react-router-dom";
import Login from "./routes/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

import Home from "./routes/Home.tsx";
import {Layout} from "./components/Layout.tsx";
import Leases from "./routes/Leases.tsx";
import Payments from "./routes/Payments.tsx";
import Contacts from "./routes/Contacts.tsx";

function App() {
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState<ClientPrincipal | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const {clientPrincipal} = payload;
      setUser(clientPrincipal);
      setAuthenticating(false)
    })();
  }, [])

  return (
    <div>
      <Layout user={user}>
        <Routes>
          <Route index element={<ProtectedRoute user={user} authenticating={authenticating}><Home/></ProtectedRoute>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="leases" element={<ProtectedRoute user={user} authenticating={authenticating}><Leases/></ProtectedRoute>}/>
          <Route path="payments"
                 element={<ProtectedRoute user={user} authenticating={authenticating}><Payments/></ProtectedRoute>}/>
          <Route path="contacts"
                 element={<ProtectedRoute user={user} authenticating={authenticating}><Contacts/></ProtectedRoute>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App
