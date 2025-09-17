import { useEffect, useState } from "react";
import MainHeaderLogo from '~/assets/MainLogo.png';
import { useNavigate } from "react-router-dom";
import {
    HeaderContainer,
    HeaderLabels,
    Logo,
    NavLinks,
    AuthLinks,
    SignUpButton,
} from "./styles";

const MainHeader = () => {
    const [solid, setSolid] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
        const currentScroll = window.scrollY;

        setSolid(currentScroll > 0);

        if (currentScroll > lastScrollY) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <HeaderContainer solid={solid} visible={visible}>
        <Logo src={MainHeaderLogo} alt="LuxDrive Logo" />

        <NavLinks>
            <HeaderLabels onClick={() => navigate("/")}>Home</HeaderLabels>
            <HeaderLabels onClick={() => navigate("/products")}>Produtos</HeaderLabels>
            <HeaderLabels onClick={() => navigate("/race")}>Corrida</HeaderLabels>
            <HeaderLabels onClick={() => navigate("/about")}>Sobre Nós</HeaderLabels>
        </NavLinks>

        <AuthLinks>
            <HeaderLabels onClick={() => navigate("/login")}>Login</HeaderLabels>
            <SignUpButton onClick={() => navigate("/signup")}>Sign Up</SignUpButton>
        </AuthLinks>
        </HeaderContainer>
    );
}

export default MainHeader