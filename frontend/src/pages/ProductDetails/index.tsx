import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, type Product } from "~/services/product.api";
import { addToCart } from "~/services/cart.api";
import {
  BackButton,
  Description,
  Price,
  ProductImage,
  Stock,
  Title,
  Wrapper,
  InfoBox,
  ActionButton,
  TopSection,
  PriceStockWrapper,
} from "./styles";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      await addToCart(product.id, 1); // envia para o back
      navigate("/cart");
    } catch (err) {
      console.error("Erro ao adicionar ao carrinho:", err);
      alert("Não foi possível adicionar ao carrinho");
    }
  };


  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (!id) return;
        const data = await getProductById(Number(id));
        setProduct(data);
      } catch (err) {
        console.error("Erro ao carregar produto:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <Wrapper>Carregando produto...</Wrapper>;
  if (!product) return <Wrapper>Produto não encontrado</Wrapper>;

  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← Voltar</BackButton>

      <TopSection>
        <ProductImage
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.title}
        />
        <InfoBox>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <PriceStockWrapper>
            <Price>R$ {product.price.toLocaleString("pt-BR")}</Price>
            <Stock>Estoque: {product.stock}</Stock>
          </PriceStockWrapper>
          <ActionButton onClick={handleAddToCart}>Comprar Agora</ActionButton>
        </InfoBox>
      </TopSection>
    </Wrapper>
  );
};

export default ProductDetails;
