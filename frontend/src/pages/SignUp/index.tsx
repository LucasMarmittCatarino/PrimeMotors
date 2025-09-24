// src/pages/SignUp.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "~/services/auth.api";
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

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      const response = await signup(form.name, form.email, form.password);
      alert(`Conta criada com sucesso! Bem-vindo, ${response.user.name}`);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Voltar
      </BackButton>

      <FormWrapper onSubmit={handleSubmit}>
        <Title>Registrar Conta</Title>

        <InputWrapper>
          <Input type="text" name="name" value={form.name} onChange={handleChange} required placeholder=" " />
          <Label>Nome</Label>
        </InputWrapper>

        <InputWrapper>
          <Input type="email" name="email" value={form.email} onChange={handleChange} required placeholder=" " />
          <Label>Email</Label>
        </InputWrapper>

        <InputWrapper>
          <Input type="password" name="password" value={form.password} onChange={handleChange} required placeholder=" " />
          <Label>Senha</Label>
        </InputWrapper>

        <InputWrapper>
          <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required placeholder=" " />
          <Label>Confirmar Senha</Label>
        </InputWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar Conta"}
        </SubmitButton>

        <RedirectText>
          Já tem conta? <span onClick={() => navigate("/login")}>Login</span>
        </RedirectText>
      </FormWrapper>
    </PageWrapper>
  );
}
