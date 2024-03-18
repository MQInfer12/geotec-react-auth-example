import { useAuth, useUser } from "geotec-react-auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useUser();
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <p>Bienvenido</p>
      <p>{user?.id}</p>
      <button onClick={logout}>Cerrar sesión</button>
      <button onClick={() => navigate("/password")}>Cambiar contraseña</button>
    </div>
  );
};

export default Home;
