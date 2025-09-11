import { useEffect, useState } from "react";
import MainHeaderLogo from '~/assets/MainLogo.png';
import { useNavigate } from "react-router-dom";
import {
    HeaderContainer,
    HeaderLabels,
    Logo,
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
            <HeaderLabels onClick={() => navigate("/")}>HOME</HeaderLabels>
            <HeaderLabels onClick={() => navigate("/products")}>LUXO</HeaderLabels>
            <HeaderLabels>CORRIDA</HeaderLabels>
            <HeaderLabels onClick={() => navigate("/about")}>SOBRE NÓS</HeaderLabels>
        </HeaderContainer>
    );
}

export default MainHeader