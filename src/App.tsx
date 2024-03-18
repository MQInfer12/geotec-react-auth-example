import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./routes";
import Home from "./routes/home";
import { AuthContext, AuthGuard } from "geotec-react-auth";
import Register from "./routes/register";
import Password from "./routes/password";

function App() {
  return (
    <AuthContext projectCluster="ERP" version="v1" logoutRoute="/">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <AuthGuard loader={<p>Cargando...</p>}>
                <Home />
              </AuthGuard>
            }
          />
          <Route
            path="/password"
            element={
              <AuthGuard loader={<p>Cargando...</p>}>
                <Password />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
