// src/pages/Login.tsx
import { useState } from "react";
import { login } from "~/services/auth.api";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  FormWrapper,
  Title,
  Input,
  SubmitButton,
  ErrorMessage,
} from "./styles";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    console.log("🔑 Tentando login com:", { name, password });

    try {
      const response = await login(name, password);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao fazer login");
    }

  }

  return (
    <PageWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Login</Title>

        <Input
          type="text"
          placeholder="E-mail"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">Entrar</SubmitButton>
      </FormWrapper>
    </PageWrapper>
  );
}
