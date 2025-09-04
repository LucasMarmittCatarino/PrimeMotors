import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { featuredSlides } from "~/mocks/FeaturedOffers.mock";

import {
  Wrapper,
  SlideWrapper,
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
} from "./styles";

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
  }),
};

const FeaturedOffers = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slides = featuredSlides;
  const SLIDE_INTERVAL = 5000;

  const resetTimer = useCallback(
    (nextIndex?: number, dir: number = 1) => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setDirection(1);
      }, SLIDE_INTERVAL);

      if (typeof nextIndex === "number") {
        setCurrent(nextIndex);
        setDirection(dir);
      }
    },
    [slides.length]
  );

  const nextSlide = () => resetTimer((current + 1) % slides.length, 1);
  const prevSlide = () => resetTimer((current - 1 + slides.length) % slides.length, -1);

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

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2rem",
            }}
          >
            <TextContainer>
              <TextLabel>{slides[current].title}</TextLabel>
              <TextDescription>{slides[current].description}</TextDescription>
              <SeeMoreButton>
                <SeeMoreText>VISUALIZAR</SeeMoreText>
                <SeeMoreIcon />
              </SeeMoreButton>
            </TextContainer>

            <ImageOutlet src={slides[current].image} alt={slides[current].title} />
          </motion.div>
        </AnimatePresence>

        <ArrowButton onClick={nextSlide}>›</ArrowButton>
      </SlideWrapper>

      <Indicators>
        {slides.map((_, index) => {
          const radius = 6;
          const circumference = 2 * Math.PI * radius;

          return (
            <IndicatorWrapper
              key={index}
              onClick={() =>
                resetTimer(
                  index,
                  index > current ? 1 : -1
                )
              }
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
