import CardCard from '~/components/CarCard';
import { Wrapper } from './styles';
import imagemTeste from '~/assets/LamboOffer.webp';

const carData = [
  {
    img: imagemTeste,
    carName: 'Lamborghini Aventador',
    price: 'R$ 200.000,00',
  },
  {
    img: imagemTeste,
    carName: 'Ferrari F8',
    price: 'R$ 1.200.000,00',
  },
  {
    img: imagemTeste,
    carName: 'Porsche 911',
    price: 'R$ 700.000,00',
  },

  {
    img: imagemTeste,
    carName: 'Lamborghini Aventador',
    price: 'R$ 200.000,00',
  },
  {
    img: imagemTeste,
    carName: 'Lamborghini Aventador',
    price: 'R$ 200.000,00',
  },
];

const Products = () => {
  return (
    <Wrapper>
      {carData.map((car, index) => (
        <CardCard
          key={index}
          img={car.img}
          carName={car.carName}
          price={car.price}
        />
      ))}
    </Wrapper>
  );
};

export default Products;
