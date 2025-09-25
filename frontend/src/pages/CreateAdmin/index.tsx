import { useState } from "react";
import { signupAdmin } from "../../services/auth.api";
import { useNavigate } from "react-router-dom";
import { Container, Input, Button } from "./styles";

export default function CreateAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signupAdmin(name, email, password);
      alert("Admin criado com sucesso!");
      navigate("/admin-orders");
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.message || "Erro ao criar admin");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container>
      <h2>Criar Novo Admin</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Criando..." : "Criar Admin"}
        </Button>
      </form>
    </Container>
  );
}