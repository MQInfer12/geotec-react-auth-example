import { PasswordForm, useAuth } from "geotec-react-auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();
  const { changePassword } = useAuth();
  const [form, setForm] = useState<PasswordForm>({
    actual: "",
    confirm: "",
    new: "",
  });

  const handleChange = async () => {
    const res = await changePassword(form);
    if (res.status === "error") {
      return alert(res.message);
    }
    alert(res.message);
  };

  return (
    <div>
      <p>Cambiar contraseña</p>
      <div>
        <p>Antigua</p>
        <input
          value={form.actual}
          onChange={(e) =>
            setForm((old) => ({ ...old, actual: e.target.value }))
          }
        />
      </div>
      <div>
        <p>Nueva</p>
        <input
          value={form.new}
          onChange={(e) => setForm((old) => ({ ...old, new: e.target.value }))}
        />
      </div>
      <div>
        <p>Confirmar</p>
        <input
          value={form.confirm}
          onChange={(e) =>
            setForm((old) => ({ ...old, confirm: e.target.value }))
          }
        />
      </div>
      <button onClick={handleChange}>Cambiar contraseña</button>
      <button onClick={() => navigate("/home")}>Home</button>
    </div>
  );
};

export default Password;
