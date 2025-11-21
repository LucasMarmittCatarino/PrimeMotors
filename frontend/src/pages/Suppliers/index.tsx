import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  PageTitle,
  Header,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  AdminActions,
  AdminButton,
  AdminButtons,
} from "./styles";
import { getSuppliers, deleteSupplier, type Supplier } from "~/services/supplier.api";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;
  const isAdmin = currentUser?.role === "admin";
  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadSuppliers = async () => {
      try {
        const data = await getSuppliers();
        setSuppliers(data);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSuppliers();
  }, []);

  const handleDelete = async (id: number) => {
    if (!isAdmin) {
      alert("Apenas administradores podem excluir fornecedores.");
      return;
    }
    if (!token) {
      alert("Você precisa estar logado como administrador.");
      return;
    }

    const confirmed = window.confirm("Deseja realmente excluir este fornecedor?");
    if (!confirmed) return;

    // Optimistic UI: remove localmente enquanto a requisição acontece
    const previous = suppliers;
    setSuppliers((p) => p.filter((prod) => prod.id !== id));

    try {
      await deleteSupplier(id, token);
      // sucesso => nada mais a fazer (já removemos do state)
    } catch (err: any) {
      // rollback
      setSuppliers(previous);
      console.error("Erro ao excluir produto:", err);
      const msg = err?.response?.data?.message || err?.message || "Erro ao excluir produto";
      alert(msg);
    }
  };

  if (loading) return <Wrapper>Carregando fornecedores...</Wrapper>;

  return (
    <Wrapper>
      <Header>
        <PageTitle>Lista de Fornecedores</PageTitle>
        {isAdmin && (
          <AdminActions>
            <AdminButton onClick={() => navigate("/suppliers/new")}>
              + Adicionar fornecedor
            </AdminButton>
          </AdminActions>
        )}
      </Header>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID Fornecedor</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Contato</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.id}</TableCell>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.contact}</TableCell>
              <TableCell style={{ width: 100 }}>
                {isAdmin && (
                  <AdminButtons>
                    <button onClick={() => navigate(`/suppliers/${supplier.id}/edit`)}>
                      Editar
                    </button>
                    <button onClick={() => handleDelete(supplier.id)}>
                      Excluir
                    </button>
                  </AdminButtons>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Suppliers;
