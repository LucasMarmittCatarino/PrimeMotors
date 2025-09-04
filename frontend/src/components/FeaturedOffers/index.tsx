import FerrariPic from '~/assets/Ferrari.webp';
import {
    Wrapper,
    TextContainer,
    TextLabel,
    TextDescription,
    SeeMoreContainer,
    SeeMoreText,
    SeeMoreIcon,
    ImageOutlet,
} from './styles';

const FeaturedOffers = () => {
    return(
        <Wrapper>
            <TextContainer>
                <TextLabel>Testando</TextLabel>
                <TextDescription>teste teste teste, teste teste. Teste testador! testando o teste.</TextDescription>
                <SeeMoreContainer>
                    <SeeMoreText>VIZUALIZAR</SeeMoreText>
                    <SeeMoreIcon/>
                </SeeMoreContainer>
            </TextContainer>

            <ImageOutlet src={FerrariPic} alt="Descrição da imagem"/>

        </Wrapper>
    );
}

export default FeaturedOffers;