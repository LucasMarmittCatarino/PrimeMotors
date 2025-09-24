import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  PageWrapper,
  BackButton,
  Form,
  FormGroup,
  InputWrapper,
  Input,
  Label,
  SubmitButton,
  SectionTitle,
  Divider,
  CheckboxWrapper,
  ErrorMessage
} from "./styles";
import { updateUser } from "~/services/user.api";

export default function Profile() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : {};

  const [form, setForm] = useState({
    name: initialUser.name || "",
    email: initialUser.email || "",
    phone: initialUser.phone || "",
    smartphone: initialUser.smartphone || "",
    birthday: initialUser.birthday || "",
    cpf: initialUser.cpf || "",
    cnpj: initialUser.cnpj || "",
    cep: initialUser.cep || "",
    street: initialUser.street || "",
    number: initialUser.number || "",
    complement: initialUser.complement || "",
    city: initialUser.city || "",
    state: initialUser.state || "",
    newsletter: initialUser.newsletter || false,
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Usuário não autenticado");

      const updatedUser = await updateUser(initialUser.id, form, token);
      const mergedUser = { ...initialUser, ...form, ...updatedUser };
      localStorage.setItem("user", JSON.stringify(mergedUser));
      setSuccess("Informações atualizadas com sucesso!");
    } catch (err: any) {
      setError(err.message || "Erro ao atualizar informações.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Voltar
      </BackButton>

      <Form onSubmit={handleSubmit}>
        <SectionTitle>Informações Pessoais</SectionTitle>
        <FormGroup>
          <InputWrapper>
            <Input type="text" name="name" value={form.name} onChange={handleChange} placeholder=" " required />
            <Label>Nome Completo</Label>
          </InputWrapper>

          <InputWrapper>
            <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder=" " required />
            <Label>Email</Label>
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <InputWrapper>
            <Input type="text" name="cpf" value={form.cpf} onChange={handleChange} placeholder=" " />
            <Label>CPF/CNPJ</Label>
          </InputWrapper>

          <InputWrapper>
            <Input type="date" name="birthday" value={form.birthday} onChange={handleChange} placeholder=" " />
            <Label>Data de Nascimento</Label>
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <InputWrapper>
            <Input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder=" " />
            <Label>Telefone</Label>
          </InputWrapper>

          <InputWrapper>
            <Input type="text" name="smartphone" value={form.smartphone} onChange={handleChange} placeholder=" " />
            <Label>Celular</Label>
          </InputWrapper>
        </FormGroup>

        <Divider />
        <SectionTitle>Endereço</SectionTitle>
        <FormGroup>
          <InputWrapper>
            <Input type="text" name="cep" value={form.cep} onChange={handleChange} placeholder=" " />
            <Label>CEP</Label>
          </InputWrapper>

          <InputWrapper>
            <Input type="text" name="street" value={form.street} onChange={handleChange} placeholder=" " />
            <Label>Rua</Label>
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <InputWrapper>
            <Input type="text" name="number" value={form.number} onChange={handleChange} placeholder=" " />
            <Label>Número</Label>
          </InputWrapper>

          <InputWrapper>
            <Input type="text" name="complement" value={form.complement} onChange={handleChange} placeholder=" " />
            <Label>Complemento</Label>
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <InputWrapper>
            <Input type="text" name="city" value={form.city} onChange={handleChange} placeholder=" " />
            <Label>Cidade</Label>
          </InputWrapper>

          <InputWrapper>
            <Input type="text" name="state" value={form.state} onChange={handleChange} placeholder=" " />
            <Label>Estado</Label>
          </InputWrapper>
        </FormGroup>

        <Divider />
        <SectionTitle>Preferências</SectionTitle>
        <CheckboxWrapper>
          <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} id="newsletter" />
          <label htmlFor="newsletter">Receber newsletter</label>
        </CheckboxWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <ErrorMessage style={{ color: "green" }}>{success}</ErrorMessage>}

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Alterações"}
        </SubmitButton>
      </Form>
    </PageWrapper>
  );
}
