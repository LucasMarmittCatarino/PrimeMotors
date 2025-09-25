// src/pages/ProductForm.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper, Title, Form, Input, TextArea, Button } from "./styles";
import { createProduct, getProductById, updateProduct } from "~/services/product.api";

const ProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    imageUrl: "",
  });

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
      });
    }
  }, [id, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // pega o token do usuário logado
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

  return (
    <Wrapper>
      <Title>{isEditing ? "Editar Produto" : "Adicionar Produto"}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="title" placeholder="Nome do produto" value={formData.title} onChange={handleChange} required />
        <TextArea name="description" placeholder="Descrição" value={formData.description} onChange={handleChange} required />
        <Input type="number" name="price" placeholder="Preço" value={formData.price} onChange={handleChange} required />
        <Input type="number" name="stock" placeholder="Estoque" value={formData.stock} onChange={handleChange} required />
        <Input type="text" name="imageUrl" placeholder="URL da imagem" value={formData.imageUrl} onChange={handleChange} />
        <Button type="submit">{isEditing ? "Salvar alterações" : "Criar Produto"}</Button>
      </Form>
    </Wrapper>
  );
};

export default ProductForm;
