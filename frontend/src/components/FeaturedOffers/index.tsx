import { useState, useEffect, useRef, useCallback } from "react";
import { featuredSlides } from "~/mocks/FeaturedOffers.mock";

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

const FeaturedOffers = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slides = featuredSlides;
  const SLIDE_INTERVAL = 5000;

  const resetTimer = useCallback((nextIndex?: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    if (typeof nextIndex === "number") {
      setCurrent(nextIndex);
    }
  }, [slides.length]);

  const nextSlide = () => resetTimer((current + 1) % slides.length);
  const prevSlide = () => resetTimer((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

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
