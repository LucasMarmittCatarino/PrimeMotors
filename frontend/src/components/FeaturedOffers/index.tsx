import { useState, useEffect, useRef } from "react";
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
  IndicatorWrapper,
  IndicatorCircle,
  IndicatorProgress,
} from './styles';

const SLIDE_INTERVAL = 5000;

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = (nextIndex?: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    if (typeof nextIndex === "number") {
      setCurrent(nextIndex);
    }
  };

  const nextSlide = () => resetTimer((current + 1) % slides.length);
  const prevSlide = () => resetTimer((current - 1 + slides.length) % slides.length);

  // iniciar ciclo automático
  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
        {slides.map((_, index) => {
          const radius = 6;
          const circumference = 2 * Math.PI * radius;

          return (
            <IndicatorWrapper
              key={index}
              onClick={() => resetTimer(index)}
            >
              <svg width="16" height="16">
                <IndicatorCircle r={radius} cx="8" cy="8" />
                <IndicatorProgress
                  key={current === index ? `active-${current}` : `idle-${index}`}
                  r={radius}
                  cx="8"
                  cy="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  active={current === index}
                />
              </svg>
            </IndicatorWrapper>
          );
        })}
      </Indicators>
    </Wrapper>
  );
};

export default FeaturedOffers;
