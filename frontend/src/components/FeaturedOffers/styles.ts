import styled, { css, keyframes } from "styled-components";
import { LiaChevronCircleRightSolid } from "react-icons/lia";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  padding: 2rem;
`;

export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 2rem;
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 1rem 2rem;
`;

export const TextLabel = styled.h1`
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

export const TextDescription = styled.p`
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const SeeMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
`;

export const SeeMoreText = styled.p`
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 0.9rem;
  color: #c00;
`;

export const SeeMoreIcon = styled(LiaChevronCircleRightSolid).attrs({
  size: 20,
})`
  color: #c00;
  margin-top: 2px;
`;

export const ImageOutlet = styled.img`
  flex: 1;
  max-width: 500px;
  max-height: 350px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #181818; 
  font-size: 2rem;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #c00;
  }
`;

export const Indicators = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 10px;
`;

export const IndicatorWrapper = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const IndicatorCircle = styled.circle`
  fill: none;
  stroke: #ccc;
  stroke-width: 2;
`;

const progressAnim = keyframes`
  from { stroke-dashoffset: 37.7; } /* circunferência aproximada p/ r=6 */
  to { stroke-dashoffset: 0; }
`;

export const IndicatorProgress = styled.circle<{ active: boolean }>`
  fill: none;
  stroke: #c00;
  stroke-width: 2;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;

  ${({ active }) =>
    active &&
    css`
      animation: ${progressAnim} 5s linear forwards;
    `}
`;
