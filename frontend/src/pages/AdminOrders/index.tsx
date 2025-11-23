import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getAllOrders, type Order } from "~/services/order.api";
import {
  Wrapper,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  FilterInput,
  FilterInputWrapper,
  SearchIcon,
  ProductsContainer,
  ProductItem,
  Header,
  ReportTitle,
} from "./styles";

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const totalSold = useMemo(() => (
    orders.reduce((acc, order) => acc + order.total, 0)
  ), [orders]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getAllOrders();
        setOrders(data);
      } catch (err) {
        console.error("Erro ao carregar vendas:", err);
      } finally {
        setLoading(false);
      }
    };
    loadOrders();
  }, []);

  const filteredOrders = orders.filter(order =>
    order.OrderItems.some(item =>
      item.Product.title.toLowerCase().includes(search.toLowerCase())
    )
  );

  if (loading) return <Wrapper>Carregando vendas...</Wrapper>;

  return (
    <Wrapper>
      <Header>
        <ReportTitle>Vendas</ReportTitle>
        <FilterInputWrapper>
          <FilterInput
            placeholder="Pesquisar por carro..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </FilterInputWrapper>
      </Header>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID Pedido</TableHeader>
            <TableHeader>Cliente</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Telefone</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Produtos</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.User?.name || "-"}</TableCell>
              <TableCell>{order.User?.email || "-"}</TableCell>
              <TableCell>{order.User?.phone || "-"}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                R$ {order.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </TableCell>
              <TableCell>
                <ProductsContainer>
                  {order.OrderItems.map((item) => (
                    <ProductItem key={item.id}>
                      <img src={item.Product.imageUrl || "/placeholder.jpg"} alt={item.Product.title} />
                      <span>{item.Product.title} x{item.quantity}</span>
                    </ProductItem>
                  ))}
                </ProductsContainer>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <div style={{ marginTop: 20 }}>
        Total vendido: R$ {totalSold.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} em {orders.length} vendas
      </div>
    </Wrapper>
  );
};

export default AdminOrders;
