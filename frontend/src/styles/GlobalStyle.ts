import { createGlobalStyle } from "styled-components";
import FerrariSansBold from '~/assets/fonts/ferrari-sans/Ferrari-SansBold.ttf';
import FerrariSansLight from '~/assets/fonts/ferrari-sans/Ferrari-SansLight.ttf';
import FerrariSansMedium from '~/assets/fonts/ferrari-sans/Ferrari-SansMedium.ttf';
import FerrariSansRegular from '~/assets/fonts/ferrari-sans/Ferrari-SansRegular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ferrari Sans';
    src: url(${FerrariSansLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ferrari Sans';
    src: url(${FerrariSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ferrari Sans';
    src: url(${FerrariSansMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ferrari Sans';
    src: url(${FerrariSansBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #fffefe;
  }
`;

export default GlobalStyle;
