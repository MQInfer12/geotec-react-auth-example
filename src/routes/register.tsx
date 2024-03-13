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
    const success = await register(form);
    if (!success) {
      return alert("Registration failed");
    }
    alert("Registration successful");
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
