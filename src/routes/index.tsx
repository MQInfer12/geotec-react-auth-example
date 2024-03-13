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
    const correct = await login(body);
    if (!correct) {
      return alert("Login failed");
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
