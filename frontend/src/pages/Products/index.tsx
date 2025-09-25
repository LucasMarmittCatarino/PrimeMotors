import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCard from "~/components/CarCard";
import { PageWrapper, Title, Wrapper, AdminActions, AdminButton } from "./styles";
import { getProducts, deleteProduct, type Product } from "~/services/product.api";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null); // para desabilitar o botão de excluir enquanto deleta
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;
  const isAdmin = currentUser?.role === "admin";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleDelete = async (id: number) => {
    if (!isAdmin) {
      alert("Apenas administradores podem excluir produtos.");
      return;
    }
    if (!token) {
      alert("Você precisa estar logado como administrador.");
      return;
    }

    const confirmed = window.confirm("Deseja realmente excluir este produto?");
    if (!confirmed) return;

    // Optimistic UI: remove localmente enquanto a requisição acontece
    const previous = products;
    setProducts((p) => p.filter((prod) => prod.id !== id));
    setDeletingId(id);

    try {
      await deleteProduct(id, token);
      // sucesso => nada mais a fazer (já removemos do state)
    } catch (err: any) {
      // rollback
      setProducts(previous);
      console.error("Erro ao excluir produto:", err);
      const msg = err?.response?.data?.message || err?.message || "Erro ao excluir produto";
      alert(msg);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <PageWrapper>
        <Title>Carregando produtos...</Title>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Title>Catálogo de Veículos</Title>

      {isAdmin && (
        <AdminActions>
          <AdminButton onClick={() => navigate("/products/new")}>
            + Adicionar Produto
          </AdminButton>
        </AdminActions>
      )}

      <Wrapper>
        {products.map((p) => (
          <CardCard
            key={p.id}
            img={p.imageUrl || "/placeholder.jpg"}
            carName={p.title}
            price={`R$ ${p.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}`}
            onClick={() => navigate(`/products/${p.id}`)}
            isAdmin={isAdmin}
            onEdit={() => navigate(`/products/${p.id}/edit`)}
            onDelete={() => handleDelete(p.id)}
            deleteDisabled={deletingId === p.id}
          />
        ))}
      </Wrapper>
    </PageWrapper>
  );
};

export default Products;
