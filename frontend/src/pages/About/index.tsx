import { Container, Title, Subtitle, Text, Highlight, Image } from './styles';

function About() {
  return (
    <Container>
      <Title>ℹ️ Sobre o LuxDrive</Title>
      <Text>
        Bem-vindo ao <Highlight>LuxDrive</Highlight>, a plataforma premium de compra e venda de carros de luxo. 
        Nossa missão é conectar entusiastas automotivos a veículos exclusivos de forma segura, prática e sofisticada.
      </Text>

      <Image src="https://forbes.com.br/wp-content/uploads/2022/01/2_Life_Carros-Mais-Aguardados-2022_5jan22_Divulgacao.jpg" alt="Carro de luxo" />

      <Subtitle>🌟 Nossa Missão</Subtitle>
      <Text>
        Proporcionar uma experiência única aos nossos clientes, garantindo transparência, qualidade e atendimento personalizado
        na aquisição de carros de luxo.
      </Text>

      <Subtitle>🎯 Nossa Visão</Subtitle>
      <Text>
        Ser referência nacional no mercado de veículos premium, oferecendo inovação, confiança e uma seleção exclusiva
        dos melhores automóveis do mundo.
      </Text>

      <Subtitle>💎 Nossos Valores</Subtitle>
      <Text>
        <Highlight>Excelência:</Highlight> buscamos sempre superar expectativas.<br />
        <Highlight>Transparência:</Highlight> todas as negociações são claras e seguras.<br />
        <Highlight>Paixão pelo automóvel:</Highlight> compartilhamos o entusiasmo de nossos clientes por carros de luxo.<br />
        <Highlight>Inovação:</Highlight> usamos tecnologia de ponta para entregar a melhor experiência.
      </Text>

      <Subtitle>🚗 Diferenciais LuxDrive</Subtitle>
      <Text>
        - Seleção exclusiva de veículos de alto padrão.<br />
        - Atendimento personalizado e consultoria especializada.<br />
        - Processo de compra simples, seguro e transparente.<br />
        - Garantia de autenticidade e procedência dos automóveis.
      </Text>
    </Container>
  );
}

export default About;