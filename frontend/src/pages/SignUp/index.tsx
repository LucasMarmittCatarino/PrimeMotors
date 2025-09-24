import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "~/services/auth.api";
import {
  Container,
  Title, 
  Form, 
  FormGroup, 
  Label, 
  Input,
  Button, 
  ErrorText, 
  RedirectText
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

    // Validação frontend: senhas iguais
    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

  try {
    const response = await signup(form.name, form.email, form.password);
    console.log("🔑 Conta criada com:", response);
    alert(`Conta criada com sucesso! Bem-vindo, ${response.user.name}`);
    navigate("/login");
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message); // aqui vai aparecer a mensagem de erro corretamente
    } else {
      setError("Erro ao criar conta");
    }
  } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Registrar Conta</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" name="name" value={form.name} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <Input type="password" name="password" value={form.password} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Confirmar Senha</Label>
          <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </FormGroup>

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar Conta"}
        </Button>
      </Form>

      <RedirectText>
        Já tem conta? <span onClick={() => navigate("/login")}>Login</span>
      </RedirectText>
    </Container>
  );
}
