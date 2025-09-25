import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalCart,
  updateLocalCartQuantity,
  removeFromLocalCart,
} from "~/services/cartLocal";

import {
  Wrapper,
  Title,
  CartContent,
  Items,
  Item,
  Image,
  Details,
  Name,
  Price,
  QuantityWrapper,
  RemoveButton,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemTotal,
  CheckoutButton,
} from "./styles";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}
// ...imports e interfaces continuam iguais

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCartItems(getLocalCart());
    setLoading(false);
  }, []);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    updateLocalCartQuantity(id, quantity);
    setCartItems(getLocalCart());
  };

  const handleRemoveItem = (id: number) => {
    removeFromLocalCart(id);
    setCartItems(getLocalCart());
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
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
              <Image src={item.imageUrl || "/placeholder.jpg"} alt={item.title} />
              <Details>
                <Name>{item.title}</Name>
                <Price>
                  R$ {item.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </Price>
                <QuantityWrapper>
                  <label>Qtd:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, Number(e.target.value))
                    }
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

          {/* Botão para comprar mais */}
          <CheckoutButton
            style={{ backgroundColor: "#007bff", marginBottom: "15px" }}
            onClick={() => navigate("/products")}
          >
            Comprar mais
          </CheckoutButton>

          <SummaryItem>
            <span>Subtotal</span>
            <span>
              R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </SummaryItem>
          <SummaryItem>
            <span>Frete</span>
            <span>
              R$ {shipping.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </SummaryItem>
          <SummaryItemTotal>
            <span>Total</span>
            <span>
              R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </SummaryItemTotal>

          <CheckoutButton onClick={() => alert("Checkout!")}>
            Finalizar Compra
          </CheckoutButton>
        </Summary>
      </CartContent>
    </Wrapper>
  );
};

export default Cart;
