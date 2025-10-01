import { useState } from "react";
import { signupAdmin } from "../../services/auth.api";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  FormWrapper,
  Title,
  InputWrapper,
  Input,
  Label,
  SubmitButton,
  ErrorMessage,
} from "./styles";

export default function CreateAdmin() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signupAdmin(form.name, form.email, form.password);
      alert("Admin criado com sucesso!");
      navigate("/admin-orders");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Erro ao criar admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>

      <FormWrapper onSubmit={handleSubmit}>
        <Title>Criar Novo Admin</Title>

        <InputWrapper>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <Label>Nome</Label>
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <Label>Email</Label>
        </InputWrapper>

        <InputWrapper>
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <Label>Senha</Label>
        </InputWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar Admin"}
        </SubmitButton>
      </FormWrapper>
    </PageWrapper>
  );
}
