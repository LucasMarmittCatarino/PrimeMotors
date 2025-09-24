// src/pages/Login.tsx
import { useState } from "react";
import { login } from "~/services/auth.api";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  PageWrapper,
  BackButton,
  FormWrapper,
  Title,
  InputWrapper,
  Input,
  Label,
  SubmitButton,
  ErrorMessage,
  RedirectText,
} from "./styles";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await login(name, password);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageWrapper>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Voltar
      </BackButton>

      <FormWrapper onSubmit={handleSubmit}>
        <Title>Login</Title>

        <InputWrapper>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder=" "
          />
          <Label>E-mail</Label>
        </InputWrapper>

        <InputWrapper>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <Label>Senha</Label>
        </InputWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </SubmitButton>

        <RedirectText>
          Não tem conta? <span onClick={() => navigate("/signup")}>Cadastre-se</span>
        </RedirectText>
      </FormWrapper>
    </PageWrapper>
  );
}
