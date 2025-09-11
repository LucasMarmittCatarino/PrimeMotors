import styled from "styled-components";
import { PartnerIcons, type PartnerIconName } from "~/assets/BrandsLogos/PartnerIcons";

export const Wrapper = styled.div`
  min-height: 20vh;
  background-color: #181818;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

type PartnerIconProps = {
  partner: PartnerIconName;
  size?: number;
};

export const PartnerIcon = styled.img.attrs<PartnerIconProps>(
  ({ partner }) => ({
    src: PartnerIcons[partner],
    alt: partner,
  })
)<PartnerIconProps>`
  width: ${({ size = 100 }) => size}px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }

  /* Responsividade */
  @media (max-width: 1200px) {
    width: ${({ size }) => (size ? size * 0.8 : 96)}px;
  }

  @media (max-width: 768px) {
    width: ${({ size }) => (size ? size * 0.6 : 72)}px;
  }

  @media (max-width: 480px) {
    width: ${({ size }) => (size ? size * 0.5 : 60)}px;
  }
`;
