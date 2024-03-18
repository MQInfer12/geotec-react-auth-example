import { LoginForm, useAuth } from "geotec-react-auth";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const body: LoginForm = {
      login: "admin",
      password: "123456",
    };
    const res = await login(body);
    if (res.status === "error") {
      return alert(res.message);
    }
    navigate("/home");
  };

  return (
    <div>
      <p>Index</p>
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={() => navigate("/register")}>Registrarse</button>
    </div>
  );
};

export default Index;
