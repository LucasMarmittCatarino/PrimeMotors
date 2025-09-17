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
    Select, 
    Button, 
    ErrorText, 
    RedirectText
} from "./styles";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    role: "customer",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

  try {
    const { data } = await signup(form.name, form.password, form.role);
    console.log("🔑 Conta criada com:", data);
    alert(`Conta criada com sucesso! Bem-vindo, ${data.name}`);
    navigate("/login");
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Erro ao criar conta");
    }
  } finally {
    setLoading(false);
  }
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome</Label>
          <Input type="text" name="name" value={form.name} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Função</Label>
          <Select name="role" value={form.role} onChange={handleChange}>
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <Input type="password" name="password" value={form.password} onChange={handleChange} required />
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

