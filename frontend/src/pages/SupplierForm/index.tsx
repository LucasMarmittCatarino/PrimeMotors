// src/pages/SupplierForm.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PageWrapper,
  FormWrapper,
  Title,
  InputWrapper,
  Input,
  Label,
  SubmitButton,
  CancelButton,
} from "./styles";

import { createSupplier, getSupplierById, updateSupplier } from "~/services/supplier.api";

const SupplierForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });

  useEffect(() => {
    if (isEditing && id) {
      getSupplierById(Number(id)).then((data) => {
        setFormData({
          name: data.name,
          contact: data.contact,
        });
      });
    }
  }, [id, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você precisa estar logado como admin.");
      return;
    }

    try {
      if (isEditing && id) {
        await updateSupplier(Number(id), formData, token);
        alert("Fornecedor atualizado com sucesso!");
      } else {
        await createSupplier(formData, token);
        alert("Fornecedor criado com sucesso!");
      }
      navigate("/suppliers");
    } catch (err) {
      console.error("Erro ao salvar fornecedor:", err);
      alert("Erro ao salvar fornecedor");
    }
  };

  return (
    <PageWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>{isEditing ? "Editar fornecedor" : "Adicionar fornecedor"}</Title>

        <InputWrapper>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
          <Label>Nome do Fornecedor</Label>
        </InputWrapper>

        <InputWrapper>
          <Input type="text" name="contact" value={formData.contact} onChange={handleChange} required placeholder=" " />
          <Label>Contato</Label>
        </InputWrapper>

        <SubmitButton type="submit">
          {isEditing ? "Salvar alterações" : "Criar fornecedor"}
        </SubmitButton>
        <CancelButton type="button" onClick={() => navigate(-1)}>
          Cancelar
        </CancelButton>
      </FormWrapper>
    </PageWrapper>

  );
};


export default SupplierForm;
