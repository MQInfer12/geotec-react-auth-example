import { useAuth, useUser } from "geotec-react-auth";

const Home = () => {
  const { user } = useUser();
  const { logout } = useAuth();

  return (
    <div>
      <p>Bienvenido</p>
      <p>{user?.id}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;
