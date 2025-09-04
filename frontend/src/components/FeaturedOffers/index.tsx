import { useState } from "react";
import FerrariOffer from '~/assets/FerrariOffer.webp';
import LamboOffer from '~/assets/LamboOffer.webp';
import RollsOffer from '~/assets/RollsOffer.avif';

import {
    Wrapper,
    SlideWrapper,
    Slide,
    TextContainer,
    TextLabel,
    TextDescription,
    SeeMoreButton,
    SeeMoreText,
    SeeMoreIcon,
    ImageOutlet,
    ArrowButton,
    Indicators,
    IndicatorDot,
} from './styles';

const slides = [
  {
    title: "Ferrari LaFerrari Aperta",
    description: "A LaFerrari Aperta é o auge da exclusividade italiana: um V12 híbrido com quase 1000 cv, nascido da Fórmula 1. Conversível, agressiva e raríssima, cada detalhe foi feito para colecionadores que não compram apenas carros, mas símbolos de poder absoluto.",
    image: FerrariOffer,
  },
  {
    title: "Rolls-Royce Phantom",
    description: "O Phantom é a essência do luxo britânico, unindo silêncio absoluto e um V12 que entrega potência com suavidade. Seu interior artesanal, feito com materiais nobres escolhidos a dedo, transforma cada viagem em experiência única. Mais do que um automóvel, é o trono moderno da sofisticação.",
    image: LamboOffer,
  },
  {
    title: "Lamborghini Centenario",
    description: "Criado para homenagear os 100 anos de Ferruccio Lamborghini, o Centenario é um tributo à ousadia. Com motor V12 de 770 cv, acelera de 0–100 km/h em apenas 2,8s, mas sua verdadeira força está na exclusividade: apenas 40 exemplares foram produzidos, tornando-o um ícone reservado a poucos.",
    image: RollsOffer,
  },
];

const FeaturedOffers = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Wrapper>
      <SlideWrapper>
        <ArrowButton onClick={prevSlide}>‹</ArrowButton>

        <Slide>
          <TextContainer>
            <TextLabel>{slides[current].title}</TextLabel>
            <TextDescription>{slides[current].description}</TextDescription>
            <SeeMoreButton>
              <SeeMoreText>VISUALIZAR</SeeMoreText>
              <SeeMoreIcon />
            </SeeMoreButton>
          </TextContainer>

          <ImageOutlet src={slides[current].image} alt={slides[current].title} />
        </Slide>

        <ArrowButton onClick={nextSlide}>›</ArrowButton>
      </SlideWrapper>

      <Indicators>
        {slides.map((_, index) => (
          <IndicatorDot 
            key={index} 
            active={index === current} 
            onClick={() => setCurrent(index)} 
          />
        ))}
      </Indicators>
    </Wrapper>
  );
};

export default FeaturedOffers;
