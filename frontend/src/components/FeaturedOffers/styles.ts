import styled from "styled-components";
import { LiaChevronCircleRightSolid } from "react-icons/lia";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const TextContainer = styled.div`
    
`;

export const TextLabel = styled.h1`

`;

export const TextDescription = styled.p`

`;

export const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SeeMoreText = styled.p`
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
`;

export const SeeMoreIcon = styled(LiaChevronCircleRightSolid).attrs({
    size: 20,
})`

`;

export const ImageOutlet = styled.img`
  width: 400px;
  height: 400px;
`;