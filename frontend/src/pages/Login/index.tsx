import { useState } from "react";
import { login } from "~/services/auth.api";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
  PageWrapper,
  FormWrapper,
  Title,
  InputWrapper,
  Input,
  Label,
  SubmitButton,
  ErrorMessage,
  BackButton,
  RedirectText,
} from "./styles";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

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
      <BackButton type="button" onClick={() => navigate(-1)}>
        <FiArrowLeft size={20} /> Voltar
      </BackButton>

      <FormWrapper onSubmit={handleSubmit}>
        <Title>Login</Title>

        <InputWrapper>
          <Input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <Label>Nome</Label>
        </InputWrapper>

        <InputWrapper>
          <Input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Label>Senha</Label>
        </InputWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">Entrar</SubmitButton>
      </FormWrapper>
      <RedirectText>
        Não tem conta? <span onClick={() => navigate("/signup")}>Cadastre-se</span>
      </RedirectText>

    </PageWrapper>
  );
}
