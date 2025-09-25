import { useEffect, useState } from "react";
import { getMyOrders, type Order } from "~/services/order.api";
import { Wrapper, Table, TableRow, TableHeader, TableCell, FilterInput } from "./styles";

const PurchaseHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await getMyOrders(); // <-- sem passar token
        setOrders(data);
      } catch (err) {
        console.error("Erro ao carregar histórico de compras:", err);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  const filteredOrders = orders.filter(order =>
    order.OrderItems.some(item =>
      item.Product?.title?.toLowerCase().includes(search.toLowerCase())
    )
  );


  if (loading) return <Wrapper>Carregando histórico...</Wrapper>;

  return (
    <Wrapper>
      <h1>Histórico de Compras</h1>

      <FilterInput
        placeholder="Pesquisar por produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table>
        <thead>
          <TableRow>
            <TableHeader>ID Pedido</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Produtos</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                R$ {order.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </TableCell>
              <TableCell>
                {order.OrderItems.map((item) => (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                    <img
                      src={item.Product?.imageUrl || "/placeholder.jpg"}
                      alt={item.Product?.title || "Produto"}
                      style={{ width: 60, height: 40, objectFit: "cover", marginRight: 8 }}
                    />
                    <span>{item.Product?.title || "Produto"} x{item.quantity}</span>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default PurchaseHistory;
