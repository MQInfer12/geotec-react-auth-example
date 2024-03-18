import { RegisterForm, useAuth } from "geotec-react-auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState<RegisterForm>({
    login: "",
    password: "",
  });

  const handleRegister = async () => {
    const res = await register(form);
    if (res.status === "error") {
      return alert(res.message);
    }
    alert(res.message);
  };

  return (
    <div>
      <p>Register</p>
      <input
        value={form.login}
        onChange={(e) => setForm((old) => ({ ...old, login: e.target.value }))}
      />
      <input
        value={form.password}
        onChange={(e) =>
          setForm((old) => ({ ...old, password: e.target.value }))
        }
      />
      <button onClick={handleRegister}>Registrarse</button>
      <button onClick={() => navigate("/")}>Iniciar sesión</button>
    </div>
  );
};

export default Register;
