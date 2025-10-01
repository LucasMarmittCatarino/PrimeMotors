// src/pages/ProductForm.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PageWrapper,
  FormWrapper,
  Title,
  InputWrapper,
  Input,
  TextArea,
  Label,
  SubmitButton,
  CancelButton,
} from "./styles";

import { createProduct, getProductById, updateProduct } from "~/services/product.api";

const ProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0, // número puro (pra enviar pro back)
    stock: 0,
    imageUrl: "",
  });

  // estado separado só para exibir no input de preço
  const [priceInput, setPriceInput] = useState("R$ 0,00");

  useEffect(() => {
    if (isEditing && id) {
      getProductById(Number(id)).then((data) => {
        setFormData({
          title: data.title,
          description: data.description || "",
          price: data.price,
          stock: data.stock,
          imageUrl: data.imageUrl || "",
        });

        setPriceInput(
          data.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        );
      });
    }
  }, [id, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stock" ? Number(value) : value,
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
        await updateProduct(Number(id), formData, token);
        alert("Produto atualizado com sucesso!");
      } else {
        await createProduct(formData, token);
        alert("Produto criado com sucesso!");
      }
      navigate("/products");
    } catch (err) {
      console.error("Erro ao salvar produto:", err);
      alert("Erro ao salvar produto");
    }
  };

  const formatCurrency = (value: string) => {
    const onlyDigits = value.replace(/\D/g, "");
    const numberValue = Number(onlyDigits) / 100;
    return numberValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const parseCurrencyToNumber = (value: string) => {
    return Number(value.replace(/\D/g, "")) / 100;
  };

  return (
    <PageWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>{isEditing ? "Editar Produto" : "Adicionar Produto"}</Title>

        <InputWrapper>
          <Input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder=" " />
          <Label>Nome do Produto</Label>
        </InputWrapper>

        <InputWrapper>
          <TextArea name="description" value={formData.description} onChange={handleChange} required placeholder=" " />
          <Label>Descrição</Label>
        </InputWrapper>

        <InputWrapper>
          <Input
            type="text"
            name="price"
            value={priceInput}
            onChange={(e) => {
              const raw = e.target.value;
              const formatted = formatCurrency(raw);
              const parsed = parseCurrencyToNumber(raw);
              setPriceInput(formatted);
              setFormData((prev) => ({ ...prev, price: parsed }));
            }}
            required
            placeholder=" "
          />
          <Label>Preço</Label>
        </InputWrapper>

        <InputWrapper>
          <Input type="number" name="stock" value={formData.stock} onChange={handleChange} required placeholder=" " />
          <Label>Estoque</Label>
        </InputWrapper>

        <InputWrapper>
          <Input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder=" " />
          <Label>URL da Imagem</Label>
        </InputWrapper>

        <SubmitButton type="submit">
          {isEditing ? "Salvar alterações" : "Criar Produto"}
        </SubmitButton>
        <CancelButton type="button" onClick={() => navigate(-1)}>
            Cancelar
        </CancelButton>
      </FormWrapper>
    </PageWrapper>

  );
};


export default ProductForm;
