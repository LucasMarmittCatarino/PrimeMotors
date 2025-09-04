import {
    Wrapper,
    TextContainer,
    TextLabel,
    TextDescription,
    SeeMoreContainer,
    SeeMoreText,
    SeeMoreIcon,
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

        </Wrapper>
    );
}

export default FeaturedOffers;