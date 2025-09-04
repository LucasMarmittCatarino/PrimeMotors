import FerrariOffer from '~/assets/FerrariOffer.webp';
import LamboOffer from '~/assets/LamboOffer.webp';
import RollsOffer from '~/assets/RollsOffer.avif';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

export const featuredSlides: Slide[] = [
  {
    title: "Ferrari LaFerrari Aperta",
    description:
      "A LaFerrari Aperta é o auge da exclusividade italiana: um V12 híbrido com quase 1000 cv, nascido da Fórmula 1. Conversível, agressiva e raríssima, cada detalhe foi feito para colecionadores que não compram apenas carros, mas símbolos de poder absoluto.",
    image: FerrariOffer,
  },
  {
    title: "Rolls-Royce Phantom",
    description:
      "O Phantom é a essência do luxo britânico, unindo silêncio absoluto e um V12 que entrega potência com suavidade. Seu interior artesanal, feito com materiais nobres escolhidos a dedo, transforma cada viagem em experiência única. Mais do que um automóvel, é o trono moderno da sofisticação.",
    image: LamboOffer,
  },
  {
    title: "Lamborghini Centenario",
    description:
      "Criado para homenagear os 100 anos de Ferruccio Lamborghini, o Centenario é um tributo à ousadia. Com motor V12 de 770 cv, acelera de 0–100 km/h em apenas 2,8s, mas sua verdadeira força está na exclusividade: apenas 40 exemplares foram produzidos, tornando-o um ícone reservado a poucos.",
    image: RollsOffer,
  },
];
