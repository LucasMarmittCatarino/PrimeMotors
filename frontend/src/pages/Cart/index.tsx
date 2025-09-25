import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, updateCartItem, removeFromCart } from "~/services/cart.api";
import { checkout } from "~/services/order.api";

import {
  Wrapper, Title, CartContent, Items, Item, Image, Details,
  Name, Price, QuantityWrapper, RemoveButton, Summary,
  SummaryTitle, SummaryItem, SummaryItemTotal, CheckoutButton,
} from "./styles";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    try {
      const items = await getCart();
      setCartItems(items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleUpdateQuantity = async (id: number, quantity: number) => {
    if (quantity < 1) return;
    await updateCartItem(id, quantity);
    loadCart();
  };

  const handleRemoveItem = async (id: number) => {
    await removeFromCart(id);
    loadCart();
  };

  const handleCheckout = async () => {
    try {
      await checkout(); // já usa o carrinho do back
      alert("Compra finalizada com sucesso!");
      loadCart();
      navigate("/products");
    } catch (err: any) {
      alert(err.response?.data?.message || "Erro ao finalizar compra");
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.Product.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  if (loading) return <p>Carregando carrinho...</p>;

  if (!cartItems.length)
    return (
      <Wrapper>
        <h2>Seu carrinho está vazio</h2>
        <button onClick={() => navigate("/products")}>Voltar às compras</button>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Title>Seu Carrinho</Title>
      <CartContent>
        <Items>
          {cartItems.map((item) => (
            <Item key={item.id}>
              <Image src={item.Product.imageUrl || "/placeholder.jpg"} alt={item.Product.title} />
              <Details>
                <Name>{item.Product.title}</Name>
                <Price>
                  R$ {item.Product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </Price>
                <QuantityWrapper>
                  <label>Qtd:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value))}
                  />
                </QuantityWrapper>
                <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                  Remover
                </RemoveButton>
              </Details>
            </Item>
          ))}
        </Items>

        <Summary>
          <SummaryTitle>Resumo do Pedido</SummaryTitle>
          <CheckoutButton
            style={{ backgroundColor: "#007bff", marginBottom: "15px" }}
            onClick={() => navigate("/products")}
          >
            Comprar mais
          </CheckoutButton>
          <SummaryItem>
            <span>Subtotal</span>
            <span>R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Frete</span>
            <span>R$ {shipping.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
          </SummaryItem>
          <SummaryItemTotal>
            <span>Total</span>
            <span>R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
          </SummaryItemTotal>
          <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
        </Summary>
      </CartContent>
    </Wrapper>
  );
};

export default Cart;
