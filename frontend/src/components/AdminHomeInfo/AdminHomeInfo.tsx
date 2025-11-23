import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHomeAdminInfo, type Product, type AdminInfo } from "~/services/order.api";

const AdminHomeInfo = () => {
  const [adminInfo, setAdminInfo] = useState<AdminInfo>();
  
  const productInfo = (product: Product, suffix: string) => (
    <div style={{ display: "flex", alignContent: "center", gap: 10, height: 60 }}>
      <img src={product.imageUrl} style={{ height: 50, borderRadius: 10 }} />
      <Link to={`/products/${product.id}/edit`}>{product.title}</Link>
      <p>({suffix})</p>
    </div>
  );

  const getInfo = async () => {
    const data = await getHomeAdminInfo();
    setAdminInfo(data);
  };
  
  useEffect(() => {
    getInfo();
  }, []);

  if (!adminInfo) return <></>;
  
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        height: "100vh",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Ferrari Sans",
        fontWeight: 400,
        fontSize: 16,
      }}
    >
      <div
        style={{
          background: "white",
          width: "50%",
          opacity: 0.7,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <h1>Informações básicas do admin:</h1>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}>
          <p>Total de vendas no mês: {adminInfo.totalItemsSold}</p>
          <p>
            Produto mais vendido no período: {adminInfo.topProduct ? (
              productInfo(adminInfo.topProduct.Product, adminInfo.topProduct.totalSold + " vendas")
            ) : "--"}
          </p>
          <p>
            Produtos com baixo estoque: {adminInfo.lowStockProducts.length > 0 ? (
              adminInfo.lowStockProducts.map((product) => (
                productInfo(product, product.stock + " unidades")
              ))
            ) : "--"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeInfo;
