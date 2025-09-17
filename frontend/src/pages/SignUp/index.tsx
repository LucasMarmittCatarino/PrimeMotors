import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.errors ? data.errors.join(", ") : "Erro ao cadastrar");
      }

      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
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
