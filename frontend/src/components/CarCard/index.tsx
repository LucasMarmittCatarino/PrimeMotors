import {
  Wrapper,
  CardImage,
  CardCarName,
  CardCarPrice,
} from './styles';

interface CardCardProps {
  img: string;
  carName: string;
  price: string;
}

const CardCard = ({ img, carName, price }: CardCardProps) => {
  return (
    <Wrapper>
      <CardImage src={img} alt={carName} />
      <CardCarName>{carName}</CardCarName>
      <CardCarPrice>{price}</CardCarPrice>
    </Wrapper>
  );
};

export default CardCard;
